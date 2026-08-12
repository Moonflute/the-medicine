from __future__ import annotations

"""Add high-confidence primary-disease tags to MedQA items missing one.

The source tag list is preserved.  This runner only appends a small set of
model-extracted disease names for questions that currently have no persisted
disease link and no disease-like raw tag.  It is checkpointed per question so
provider failures or a stopped run never pay for an item twice.
"""

import argparse
import concurrent.futures
import json
import re
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import link_medqa_disease_tags as link


ROOT = Path(__file__).resolve().parents[2]
WORK = ROOT / "workspace_ops" / "qbank" / "tag_enrichment"
RESULTS = WORK / "empty_disease_tag_results.jsonl"
REVIEW = WORK / "empty_disease_tag_needs_review.jsonl"
FAILURES = WORK / "empty_disease_tag_failures.jsonl"
REPORT = ROOT / "reports" / "qbank-empty-disease-tag-enrichment.json"
PROMPT_VERSION = "medqa-primary-disease-tag-v1"


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


def qbank_section(body: str, heading: str) -> str:
    match = re.search(rf"^## {re.escape(heading)}\s*$([\s\S]*?)(?=^##\s|\Z)", body, re.M)
    return match.group(1).strip() if match else ""


def append_jsonl(path: Path, row: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8", newline="\n") as handle:
        handle.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")


def read_jsonl(path: Path) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    rows: list[dict[str, Any]] = []
    for index, line in enumerate(path.read_text(encoding="utf-8").splitlines()):
        if not line.strip():
            continue
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError:
            if index != len(path.read_text(encoding="utf-8").splitlines()) - 1:
                raise
    return rows


def completed_ids() -> set[str]:
    return {str(row["id"]) for row in read_jsonl(RESULTS) if row.get("id")}


def target_items() -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for question in link.read_questions():
        frontmatter, body = link.split_frontmatter(question["path"].read_text(encoding="utf-8"))
        if link.frontmatter_list(frontmatter, "related_disease_slugs"):
            continue
        tags = question["tags"]
        if any(link.looks_like_disease(tag) for tag in tags):
            continue
        items.append({
            "id": question["id"],
            "path": question["path"],
            "specialty": question["specialty"],
            "existing_tags": tags,
            "question": qbank_section(body, "문제"),
            "options": qbank_section(body, "선택지"),
            "answer": link.frontmatter_scalar(frontmatter, "answer"),
        })
    return items


def prompt_for(batch: list[dict[str, Any]]) -> str:
    compact = [
        {
            "id": item["id"],
            "specialty": item["specialty"],
            "question_ko": item["question"],
            "options_ko": item["options"],
            "answer": item["answer"],
            "existing_keywords": item["existing_tags"],
        }
        for item in batch
    ]
    return f"""You are adding controlled disease tags to Korean USMLE clinical questions.

For each item, infer only the primary diagnosis or directly tested disease from
the stem, choices, and supplied correct answer. Return 0 to 2 concise canonical
disease names in English. Never return symptoms, signs, laboratory abnormalities,
tests, imaging findings, organisms without an infection diagnosis, drugs,
treatments, risk factors, procedures, or broad differentials. If the disease is
not explicit enough, return an empty list with confidence \"none\". Use
confidence \"high\" only when the answer/stem supports the named condition.

Every input id must appear exactly once. Return JSON only:
{{"items":[{{"id":"...","tags":["disease name"],"confidence":"high|none"}}]}}

INPUT:
{json.dumps(compact, ensure_ascii=False, separators=(',', ':'))}"""


def run_batch(provider: link.Provider, batch: list[dict[str, Any]]) -> list[dict[str, Any]]:
    payload = {
        "model": __import__("os").environ.get(provider.model_env, provider.default_model),
        "messages": [
            {"role": "system", "content": "Return valid JSON only. Follow the controlled-vocabulary instructions exactly."},
            {"role": "user", "content": prompt_for(batch)},
        ],
        "temperature": 0,
        "seed": 17,
        "reasoning_effort": "low",
        "max_tokens": max(900, len(batch) * 110),
        "response_format": {"type": "json_object"},
    }
    response = link.post_json(provider, payload)
    content = response["choices"][0]["message"].get("content") or ""
    parsed = link.extract_json(content)
    by_id = {str(row.get("id")): row for row in parsed.get("items", []) if isinstance(row, dict)}
    if set(by_id) != {item["id"] for item in batch}:
        raise RuntimeError("response did not return every requested id exactly once")
    rows: list[dict[str, Any]] = []
    for item in batch:
        output = by_id[item["id"]]
        confidence = str(output.get("confidence") or "none").lower()
        raw_tags = output.get("tags") if isinstance(output.get("tags"), list) else []
        tags: list[str] = []
        if confidence == "high":
            for value in raw_tags[:2]:
                tag = str(value).strip()
                # Keep only concise disease labels; the linker will perform
                # all document mapping later and rejects non-disease tags.
                if 3 <= len(tag) <= 96 and "\n" not in tag and tag not in tags:
                    tags.append(tag)
        rows.append({
            "id": item["id"], "specialty": item["specialty"],
            "existing_tags": item["existing_tags"], "suggested_tags": tags,
            "confidence": "high" if tags and confidence == "high" else "none",
            "provider": provider.name, "model": payload["model"],
            "prompt_version": PROMPT_VERSION, "processed_at": now(),
        })
    return rows


def merge_tags(item: dict[str, Any], tags: list[str]) -> bool:
    text = item["path"].read_text(encoding="utf-8")
    frontmatter, body = link.split_frontmatter(text)
    existing = link.frontmatter_list(frontmatter, "related_diseases")
    merged = list(dict.fromkeys([*existing, *tags]))
    if merged == existing:
        return False
    block = "related_diseases:\n" + "\n".join(f"  - {json.dumps(tag, ensure_ascii=False)}" for tag in merged)
    pattern = r"^related_diseases:[^\r\n]*(?:\r?\n[ \t]+-\s+[^\r\n]*)*"
    updated_frontmatter = re.sub(pattern, block, frontmatter, count=1, flags=re.M)
    item["path"].write_text(f"---\n{updated_frontmatter.strip()}\n---\n{body}", encoding="utf-8", newline="\n")
    return True


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="append accepted high-confidence tags to source Markdown")
    parser.add_argument("--apply-only", action="store_true", help="apply checkpointed results without making any API request")
    parser.add_argument("--workers", type=int, default=5)
    parser.add_argument("--batch-size", type=int, default=8)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()
    if args.batch_size < 1 or args.batch_size > 16:
        raise ValueError("batch size must be 1..16")
    all_items = target_items()
    done = completed_ids()
    pending = [item for item in all_items if item["id"] not in done]
    if args.apply_only:
        pending = []
    if args.limit:
        pending = pending[:args.limit]
    batches = [pending[index:index + args.batch_size] for index in range(0, len(pending), args.batch_size)]
    accepted: dict[str, dict[str, Any]] = {row["id"]: row for row in read_jsonl(RESULTS) if row.get("id")}

    providers = link.available_providers() if batches else []
    if batches and not providers:
        raise RuntimeError("no configured tag-enrichment provider")

    def task(index: int, batch: list[dict[str, Any]]) -> list[dict[str, Any]]:
        # Each chunk has a designated first provider, then falls through only
        # after a concrete transport/rate-limit failure.
        errors: list[str] = []
        for offset in range(len(providers)):
            provider = providers[(index + offset) % len(providers)]
            try:
                return run_batch(provider, batch)
            except Exception as exc:
                errors.append(f"{provider.name}: {exc}")
        raise RuntimeError("; ".join(errors))

    if batches:
        with concurrent.futures.ThreadPoolExecutor(max_workers=min(args.workers, len(providers), len(batches))) as pool:
            futures = {pool.submit(task, index, batch): (index, batch) for index, batch in enumerate(batches)}
            for future in concurrent.futures.as_completed(futures):
                index, batch = futures[future]
                try:
                    rows = future.result()
                except Exception as exc:
                    for item in batch:
                        append_jsonl(FAILURES, {"id": item["id"], "error": str(exc), "at": now()})
                    continue
                for row in rows:
                    append_jsonl(RESULTS, row)
                    accepted[row["id"]] = row
                print(json.dumps({"completed_batches": index + 1, "total_batches": len(batches), "completed_items": len(accepted)}, ensure_ascii=False), flush=True)

    applied = 0
    target_by_id = {item["id"]: item for item in all_items}
    for item_id, row in accepted.items():
        tags = row.get("suggested_tags") or []
        if row.get("confidence") != "high" or not tags:
            append_jsonl(REVIEW, row)
            continue
        if args.apply and item_id in target_by_id and merge_tags(target_by_id[item_id], tags):
            applied += 1
    summary = {
        "target_questions": len(all_items), "checkpointed_questions": len(accepted),
        "high_confidence_with_tags": sum(1 for row in accepted.values() if row.get("confidence") == "high" and row.get("suggested_tags")),
        "no_tag_or_review": sum(1 for row in accepted.values() if row.get("confidence") != "high" or not row.get("suggested_tags")),
        "source_files_updated": applied, "pending_questions": len([item for item in all_items if item["id"] not in accepted]),
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False), flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
