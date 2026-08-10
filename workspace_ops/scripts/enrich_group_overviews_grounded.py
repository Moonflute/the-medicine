from __future__ import annotations

"""Grounded, source-traceable enrichment for disease group overview notes.

The source of truth stays in ``source_notes/02 Diseases``.  This script only
updates notes that have been identified as group overviews by the web-data
builder.  It deliberately avoids reproducing individual treatment plans:
each overview is limited to shared clinical framing, red-flag triage, and a
compact discriminator for the member diseases.
"""

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
from google import genai
from google.genai import types


ROOT = Path(__file__).resolve().parents[2]
DATA_ROOT = ROOT / "_webapp" / "data"
REPORT_PATH = ROOT / "reports" / "group-overview-priority.json"
ALLOWED_SOURCE_HOSTS = (
    "merckmanuals.com", "msdmanuals.com", "escardio.org", "ginasthma.org",
    "goldcopd.org", "kdigo.org", "diabetes.org", "diabetesjournals.org",
    "thyroid.org", "rheumatology.org", "hematology.org", "idsociety.org",
    "cdc.gov", "kdca.go.kr", "nccn.org", "esmo.org", "asco.org",
    "acog.org", "who.int", "nice.org.uk", "ncbi.nlm.nih.gov",
)
PROVIDERS = (
    ("cerebras", "CEREBRAS_API_KEY", "CEREBRAS_EXPLANATION_MODEL", "gpt-oss-120b", "https://api.cerebras.ai/v1/chat/completions"),
    ("groq", "GROQ_API_KEY", "GROQ_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://api.groq.com/openai/v1/chat/completions"),
    ("sambanova", "SAMBANOVA_API_KEY", "SAMBANOVA_EXPLANATION_MODEL", "gpt-oss-120b", "https://api.sambanova.ai/v1/chat/completions"),
    ("openrouter", "OPENROUTER_API_KEY", "OPENROUTER_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://openrouter.ai/api/v1/chat/completions"),
    ("nvidia", "NVIDIA_API_KEY", "NVIDIA_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://integrate.api.nvidia.com/v1/chat/completions"),
)


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def clean(value: Any) -> str:
    return str(value or "").strip()


def source_records(note: dict[str, Any]) -> list[dict[str, str]]:
    return [
        {"label": clean(item.get("label")), "url": clean(item.get("url"))}
        for item in note.get("contentMeta", {}).get("sources", [])
        if clean(item.get("label")) and clean(item.get("url"))
    ]


def reliable(url: str) -> bool:
    return any(host in url.lower() for host in ALLOWED_SOURCE_HOSTS)


def priority_for(group: dict[str, Any], members: list[dict[str, Any]], qbank_count: int) -> tuple[int, str]:
    urgent = group.get("specialty", "").startswith("21 ") or any(member.get("emergencyClassification") for member in members)
    if urgent or qbank_count >= 30 or any(member.get("clinicalPriority") == "tier_1" for member in members):
        return 1, "응급·고빈도 또는 Tier 1 구성 질환 포함"
    if qbank_count >= 10 or len(members) >= 5:
        return 2, "문제 수 또는 구성 질환 수가 많은 핵심 질환군"
    return 3, "보완 우선순위의 소규모 질환군"


def member_context(member: dict[str, Any]) -> str:
    overview = " ".join(clean(line) for line in member.get("overview", [])[:3])
    definition = clean(member.get("definition"))
    return f"- {member['title']}: {definition or overview or '개별 문서 참조'}"[:900]


def grounded_sources(response: Any, fallback: list[dict[str, str]]) -> list[dict[str, str]]:
    found: list[dict[str, str]] = []
    for candidate in getattr(response, "candidates", None) or []:
        metadata = getattr(candidate, "grounding_metadata", None)
        for chunk in getattr(metadata, "grounding_chunks", None) or []:
            web = getattr(chunk, "web", None)
            url = clean(getattr(web, "uri", ""))
            title = clean(getattr(web, "title", ""))
            if url and reliable(url):
                found.append({"label": title or "임상 참고문헌", "url": url})
    for source in fallback:
        if reliable(source["url"]):
            found.append(source)

    unique: list[dict[str, str]] = []
    seen: set[str] = set()
    for source in found:
        if source["url"] in seen:
            continue
        seen.add(source["url"])
        unique.append(source)
    return unique[:5]


def build_prompt(group: dict[str, Any], members: list[dict[str, Any]], known_sources: list[dict[str, str]]) -> str:
    member_names = ", ".join(member["title"] for member in members)
    source_lines = "\n".join(f"- {source['label']}: {source['url']}" for source in known_sources[:16]) or "- 없음 (Google Search로 신뢰 가능한 정본을 찾아야 함)"
    contexts = "\n".join(member_context(member) for member in members[:24])
    overflow = "" if len(members) <= 24 else f"\n나머지 구성 질환({len(members) - 24}개): {', '.join(member['title'] for member in members[24:])}"
    return f"""당신은 근거 중심의 한국어 의학 학습자료 편집자입니다. 아래 질환군 대표 문서만 작성합니다.

질환군: {group['title']}
분과: {group['specialty']}
구성 질환: {member_names}

구성 질환의 기존 요약:
{contexts}{overflow}

기존에 연결된 정본·가이드라인 출처:
{source_lines}

제공된 기존 문서 요약과 정본·가이드라인 출처의 범위에서만 작성하세요.
숫자 기준, 약물 용량, 세부 치료 알고리즘은 쓰지 마세요. 개별 질환 문서의 내용을 복제하거나, 근거 없이 질환 간 공통점을 단정하지 마세요.

다음 Markdown 본문만 한국어로 반환하세요. 제목(#)과 frontmatter, 출처 목록은 반환하지 마세요.

## 공통 임상 접근
- 3~5개. 실제로 공유되는 병태생리·위험상황·초기 평가만.

## 먼저 배제할 상황
- 0~3개. 즉시 평가가 필요한 상황만; 해당 사항이 없으면 “구성 질환별 red flag는 개별 문서에서 확인한다.”라고 한 줄만 작성.

## 하위 질환 감별 포인트
| 질환 | 구분에 특히 유용한 단서 | 다음 확인 |
|---|---|---|
- 모든 구성 질환을 한 행씩 포함하되, 근거가 부족한 질환은 “개별 문서의 병력·검사 기준 확인”처럼 보수적으로 쓴다.

"""


def load_provider_env() -> None:
    for path in (ROOT / ".env.qbank-explanations", ROOT.parent / ".env.qbank-explanations", ROOT / ".env.qbank-cloudflare", ROOT.parent / ".env.qbank-cloudflare"):
        load_dotenv(path, override=False)


def call_gpt_oss(prompt: str) -> tuple[str, str]:
    errors: list[str] = []
    for name, key_name, model_name, default_model, url in PROVIDERS:
        key = clean(os.getenv(key_name))
        if not key:
            continue
        payload = json.dumps({
            "model": clean(os.getenv(model_name)) or default_model,
            "messages": [
                {"role": "system", "content": "Return only the requested Korean Markdown. Do not mention being an AI."},
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.1,
            "max_tokens": 5000,
        }).encode("utf-8")
        request = urllib.request.Request(url, data=payload, headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"}, method="POST")
        try:
            with urllib.request.urlopen(request, timeout=120) as response:
                data = json.loads(response.read().decode("utf-8"))
            content = clean(data["choices"][0]["message"]["content"])
            if content:
                return content.removeprefix("```markdown").removeprefix("```").removesuffix("```").strip(), name
            errors.append(f"{name}: empty response")
        except (urllib.error.HTTPError, urllib.error.URLError, KeyError, IndexError, json.JSONDecodeError) as exc:
            errors.append(f"{name}: {exc}")
    raise RuntimeError("; ".join(errors) or "No GPT-OSS provider key is configured")


def split_frontmatter(raw: str) -> tuple[str, str]:
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, flags=re.S)
    if not match:
        return "", raw
    return match.group(1), raw[match.end():]


def strip_generated_sections(body: str) -> str:
    # The generated overview replaces the old navigation-only body in full.
    return body.strip()


def render_frontmatter(original: str, group: dict[str, Any], sources: list[dict[str, str]]) -> str:
    filtered: list[str] = []
    skip_list = False
    for line in original.splitlines():
        if re.match(r"^(document_role|content_updated_at|sources|group_members):", line):
            skip_list = True
            continue
        if skip_list and (line.startswith("- ") or line.startswith("  - ")):
            continue
        skip_list = False
        filtered.append(line)
    while filtered and not filtered[-1].strip():
        filtered.pop()
    filtered.extend([
        "document_role: group_overview",
        f"content_updated_at: {date.today().isoformat()}",
        "group_members:",
        *[f"- {title}" for title in group["groupOverview"]["memberTitles"]],
    ])
    if sources:
        filtered.append("sources:")
        filtered.extend(f'- "{source["label"].replace(chr(34), "")} | {source["url"]}"' for source in sources)
    return "---\n" + "\n".join(filtered) + "\n---\n"


def main() -> None:
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            stream.reconfigure(encoding="utf-8", errors="replace")
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0, help="Maximum pending groups to write; 0 means all.")
    parser.add_argument("--only-title", default="", help="Run one named group overview (for grounded validation).")
    parser.add_argument("--sleep", type=float, default=0.3)
    parser.add_argument("--model", default=os.getenv("GEMINI_MODEL", "gemini-3.1-flash-lite-preview"))
    parser.add_argument("--provider", choices=["gemini", "gpt-oss"], default="gpt-oss")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    load_dotenv(ROOT / ".env")
    load_dotenv(ROOT.parent / ".env", override=False)
    diseases = read_json(DATA_ROOT / "diseases.json")
    hierarchy = read_json(DATA_ROOT / "disease-hierarchy.json")
    qbank = read_json(DATA_ROOT / "qbank-index.json")
    by_slug = {item["slug"]: item for item in diseases}

    tasks = []
    for group in diseases:
        if not group.get("groupOverview"):
            continue
        members = [by_slug[slug] for slug in hierarchy.get("groupMemberSlugsBySlug", {}).get(group["slug"], []) if slug in by_slug]
        if not members:
            continue
        scope = set(hierarchy.get("scopeSlugsBySlug", {}).get(group["slug"], [group["slug"]]))
        qbank_count = sum(
            (item.get("targetType") == "disease" and item.get("targetSlug") in scope)
            or bool(scope.intersection(item.get("relatedDiseaseSlugs", [])))
            for item in qbank
        )
        priority, reason = priority_for(group, members, qbank_count)
        path = ROOT / group["sourcePath"]
        raw = path.read_text(encoding="utf-8")
        already_generated = "document_role: group_overview" in raw and "## 하위 질환 감별 포인트" in raw
        tasks.append({
            "priority": priority, "reason": reason, "group": group, "members": members,
            "qbankCount": qbank_count, "path": path, "alreadyGenerated": already_generated,
        })

    tasks.sort(key=lambda item: (item["priority"], -item["qbankCount"], -len(item["members"]), item["group"]["title"]))
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(json.dumps({
        "generatedAt": date.today().isoformat(),
        "priorityRules": {"P1": "응급·고빈도 또는 Tier 1", "P2": "핵심 질환군", "P3": "소규모 보완"},
        "groups": [{
            "priority": task["priority"], "reason": task["reason"], "title": task["group"]["title"],
            "specialty": task["group"]["specialty"], "memberCount": len(task["members"]),
            "qbankCount": task["qbankCount"], "sourcePath": str(task["path"].relative_to(ROOT)).replace("\\", "/"),
            "alreadyGenerated": task["alreadyGenerated"],
        } for task in tasks],
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    pending = [task for task in tasks if not task["alreadyGenerated"]]
    if args.only_title:
        pending = [task for task in pending if task["group"]["title"] == args.only_title]
        if not pending:
            raise SystemExit(f"No pending group overview matched: {args.only_title}")
    if args.limit:
        pending = pending[:args.limit]
    if args.dry_run:
        print(json.dumps({"groups": len(tasks), "pending": len(pending), "report": str(REPORT_PATH.relative_to(ROOT))}, ensure_ascii=False))
        return

    client = None
    if args.provider == "gemini":
        client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    else:
        load_provider_env()
    written = 0
    failed: list[dict[str, str]] = []
    for index, task in enumerate(pending, start=1):
        group = task["group"]
        known_sources = [source for member in task["members"] for source in source_records(member)]
        try:
            if args.provider == "gemini":
                response = client.models.generate_content(
                    model=args.model,
                    contents=build_prompt(group, task["members"], known_sources),
                    config=types.GenerateContentConfig(temperature=0.1, max_output_tokens=7000, tools=[types.Tool(google_search=types.GoogleSearch())]),
                )
                body = clean(getattr(response, "text", ""))
                sources = grounded_sources(response, known_sources)
                provider = "gemini-grounded"
            else:
                body, provider = call_gpt_oss(build_prompt(group, task["members"], known_sources))
                sources = [source for source in known_sources if reliable(source["url"])][:5]
            if not body or "## 하위 질환 감별 포인트" not in body:
                raise ValueError("response did not contain a differential section")
            raw = task["path"].read_text(encoding="utf-8")
            frontmatter, _ = split_frontmatter(raw)
            included = "\n".join(f"- [[{member['title']}]]" for member in task["members"])
            rendered = render_frontmatter(frontmatter, group, sources) + "\n# " + group["title"] + "\n\n" + strip_generated_sections(body) + "\n\n## 포함 질환\n" + included + "\n"
            task["path"].write_text(rendered, encoding="utf-8")
            written += 1
            print(f"[{index}/{len(pending)}] wrote P{task['priority']} {group['title']} ({provider})", flush=True)
        except Exception as exc:  # keep later groups usable even if one source lookup fails
            failed.append({"title": group["title"], "error": str(exc)[:500]})
            print(f"[{index}/{len(pending)}] failed {group['title']}: {exc}", flush=True)
        time.sleep(args.sleep)

    print(json.dumps({"written": written, "failed": failed, "report": str(REPORT_PATH.relative_to(ROOT))}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
