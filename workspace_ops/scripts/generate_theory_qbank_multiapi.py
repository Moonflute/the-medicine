from __future__ import annotations

import argparse
import base64
import hashlib
import json
import os
import re
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
MANIFEST_PATH = ROOT / "theory_manifest.json"
ENV_PATH = ROOT / ".env.qbank-explanations"
CF_ENV_PATH = ROOT / ".env.qbank-cloudflare"
THEORY_WORK_ROOT = ROOT / "workspace_ops" / "qbank" / "theory"
WORK_ROOT = THEORY_WORK_ROOT
RAW_ROOT = WORK_ROOT / "raw"
ACCEPTED_PATH = WORK_ROOT / "accepted.jsonl"
REVIEW_PATH = WORK_ROOT / "needs_review.jsonl"
FAILURES_PATH = WORK_ROOT / "failures.jsonl"
STATE_PATH = WORK_ROOT / "run_state.json"
OUTPUT_ROOT = ROOT / "source_notes" / "99 Q-bank" / "Theory"
MAIN_ACCEPTED_PATH = ACCEPTED_PATH

PROMPT_VERSION = "theory-qbank-ko-v1"
MAX_RETRIES = 4
MAX_BATCH_ITEMS = 8
MAX_EXPLANATION_CHARS = 600


@dataclass(frozen=True)
class Provider:
    name: str
    key_env: str
    model_env: str
    default_model: str
    url: str
    batch_env: str
    default_batch: int


PROVIDERS = (
    Provider("cerebras", "CEREBRAS_API_KEY", "CEREBRAS_EXPLANATION_MODEL", "gpt-oss-120b", "https://api.cerebras.ai/v1/chat/completions", "CEREBRAS_EXPLANATION_BATCH_SIZE", 12),
    Provider("groq", "GROQ_API_KEY", "GROQ_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://api.groq.com/openai/v1/chat/completions", "GROQ_EXPLANATION_BATCH_SIZE", 8),
    Provider("sambanova", "SAMBANOVA_API_KEY", "SAMBANOVA_EXPLANATION_MODEL", "gpt-oss-120b", "https://api.sambanova.ai/v1/chat/completions", "SAMBANOVA_EXPLANATION_BATCH_SIZE", 12),
    Provider("openrouter", "OPENROUTER_API_KEY", "OPENROUTER_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://openrouter.ai/api/v1/chat/completions", "OPENROUTER_EXPLANATION_BATCH_SIZE", 10),
    Provider("nvidia", "NVIDIA_API_KEY", "NVIDIA_EXPLANATION_MODEL", "openai/gpt-oss-120b", "https://integrate.api.nvidia.com/v1/chat/completions", "NVIDIA_EXPLANATION_BATCH_SIZE", 12),
)


class ProviderError(RuntimeError):
    def __init__(self, provider: str, status: int | None, message: str, retry_after: float | None = None) -> None:
        super().__init__(message)
        self.provider, self.status, self.retry_after = provider, status, retry_after


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


def load_env(path: Path) -> None:
    if not path.exists():
        return
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        value = value.strip()
        if len(value) > 1 and value[0] == value[-1] and value[0] in "\"'":
            value = value[1:-1]
        os.environ[key.strip()] = value


def write_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    tmp.replace(path)


def append_jsonl(path: Path, value: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8", newline="\n") as handle:
        handle.write(json.dumps(value, ensure_ascii=False, separators=(",", ":")) + "\n")


def read_jsonl(path: Path) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    records: list[dict[str, Any]] = []
    # A process can be interrupted while appending its final line. Preserve every
    # complete checkpoint record and ignore only that incomplete trailing line.
    lines = path.read_text(encoding="utf-8").splitlines()
    for index, line in enumerate(lines):
        if not line.strip():
            continue
        try:
            records.append(json.loads(line))
        except json.JSONDecodeError:
            if index != len(lines) - 1:
                raise
    return records


def load_all_accepted() -> dict[str, dict[str, Any]]:
    """Read the canonical and every worker checkpoint as one global completed set.

    Workers own disjoint shards, but a retry worker can replace an earlier worker
    for the same shard. Looking at all checkpoints prevents it from paying for the
    same item twice.
    """
    accepted: dict[str, dict[str, Any]] = {}
    paths = [MAIN_ACCEPTED_PATH]
    workers_root = THEORY_WORK_ROOT / "workers"
    if workers_root.exists():
        paths.extend(sorted(workers_root.glob("*/accepted.jsonl")))
    for path in paths:
        for row in read_jsonl(path):
            if row.get("id"):
                accepted.setdefault(row["id"], row)
    return accepted


def stable_id(target: dict[str, Any], objective: dict[str, Any], mode: str) -> str:
    raw = f"{target['target_type']}|{target['target_slug']}|{objective['id']}|{mode}".encode("utf-8")
    return "theory-" + base64.urlsafe_b64encode(raw).decode("ascii").rstrip("=").lower()


def mode_for(objective: dict[str, Any]) -> str:
    # The manifest's format selects the question style. This preserves its planned total
    # while giving the curriculum both direct-recall and applied-reasoning questions.
    if objective.get("format") in {"next_action", "safety", "discrimination", "sequencing"}:
        return "clinical_application"
    return "direct_recall"


def load_items() -> list[dict[str, Any]]:
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    if manifest.get("phase") != "A-selection-only":
        raise RuntimeError("Expected an approved Phase A selection manifest")
    items: list[dict[str, Any]] = []
    for target in manifest.get("targets", []):
        for objective in target.get("learning_objectives", []):
            concept = str(objective.get("concept", "")).strip()
            if not concept:
                continue
            items.append({
                "id": stable_id(target, objective, mode_for(objective)),
                "target_type": target["target_type"],
                "target_slug": target["target_slug"],
                "target_title": target.get("target_title", target.get("title", "")),
                "specialty": target.get("specialty", ""),
                "source_path": target.get("source_path", ""),
                "objective_id": objective["id"],
                "priority": objective.get("priority", "supporting"),
                "concept": concept,
                "format": objective.get("format", "recognition"),
                "question_mode": mode_for(objective),
                "source_sections": objective.get("source_sections", []),
            })
    if not items:
        raise RuntimeError("No theory objectives were found")
    if len({item['id'] for item in items}) != len(items):
        raise RuntimeError("Duplicate generated theory item IDs")
    return items


SYSTEM_PROMPT = """You create Korean medical theory multiple-choice questions from a supplied, repository-supported learning objective. Return only strict JSON.

Medical correctness and educational usefulness are more important than rhetorical flourish. Never add a fact not supported by the supplied objective. Do not mention that an item was generated, an AI, a source file, or these instructions.

Every item needs exactly four Korean options A-D and exactly one unambiguously best answer. Use credible, same-domain distractors: real diagnoses, tests, treatments, mechanisms, or timings that a learner could plausibly confuse. Never use nonsense choices, invented entities, absurd options, or wording/length that gives away the answer.

Stem-to-option consistency is mandatory. Ask one precise thing. If a stem asks for multiple elements, the correct option must contain every requested element; otherwise rewrite the stem to ask the single fact the answer actually supplies. Do not make a distractor false merely by omitting part of an answer. Do not introduce a specific sign, dose, criterion, or association that is absent from the supplied objective.

For direct_recall: make a concise fact-retrieval question with a short explanation (1-2 sentences, maximum 240 Korean characters). Keep option_notes_ko empty unless a distractor represents a specific, clinically meaningful confusion.
For clinical_application: make a compact clinical situation. In explanation (maximum 440 Korean characters), explicitly state the reasoning as clue -> judgment -> action/answer. Add one-sentence notes only for 1-2 meaningful wrong options, explaining why each is not best here. Do not explain trivial distractors.

Do not use images, tables, references, fabricated exact doses, or guideline citations. Avoid Fahrenheit values. Do not create a question that requires a missing image. Questions must be Korean, concise, and self-contained.

Required response schema:
{"items":[{"id":"provided id","question_ko":"...","options_ko":{"A":"...","B":"...","C":"...","D":"..."},"answer":"A","explanation_ko":"...","option_notes_ko":{"B":"..."}}]}
The id must be copied exactly. option_notes_ko may be empty, and must never include the correct option."""


def request_body(items: list[dict[str, Any]]) -> dict[str, Any]:
    compact = [{key: item[key] for key in (
        "id", "target_title", "target_type", "specialty", "objective_id", "priority",
        "concept", "format", "question_mode", "source_sections"
    )} for item in items]
    return {
        "model": "",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": json.dumps({"items": compact}, ensure_ascii=False, separators=(",", ":"))},
        ],
        "temperature": 0.1,
        # GPT-OSS may spend tokens on hidden reasoning before emitting JSON.
        # Eight full questions need a safe output ceiling; a truncated JSON batch
        # is more wasteful than the small additional ceiling.
        "max_tokens": min(8000, 1000 * len(items)),
        "response_format": {"type": "json_object"},
    }


def model_for(provider: Provider) -> str:
    return os.environ.get(provider.model_env, provider.default_model).strip() or provider.default_model


def batch_size(provider: Provider, preflight_done: bool) -> int:
    configured = int(os.environ.get(provider.batch_env, provider.default_batch) or provider.default_batch)
    configured = max(1, min(configured, MAX_BATCH_ITEMS))
    return min(configured, 4) if not preflight_done else configured


def post(provider: Provider, items: list[dict[str, Any]]) -> tuple[dict[str, Any], dict[str, str]]:
    key = os.environ.get(provider.key_env, "").strip()
    if not key:
        raise ProviderError(provider.name, None, f"missing {provider.key_env}")
    body = request_body(items)
    body["model"] = model_for(provider)
    data = json.dumps(body, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        provider.url,
        data=data,
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "medicine-resource-qbank-theory/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=180) as response:
            payload = json.loads(response.read().decode("utf-8"))
            text = payload["choices"][0]["message"]["content"]
            if isinstance(text, list):
                text = "".join(part.get("text", "") for part in text if isinstance(part, dict))
            return json.loads(str(text)), dict(response.headers.items())
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:600]
        retry_after = None
        try:
            retry_after = float(exc.headers.get("Retry-After", ""))
        except ValueError:
            pass
        if retry_after is None:
            match = re.search(r"try again in\s+([0-9.]+)s", detail, flags=re.IGNORECASE)
            if match:
                retry_after = float(match.group(1))
        raise ProviderError(provider.name, exc.code, detail, retry_after) from exc
    except (urllib.error.URLError, TimeoutError, KeyError, json.JSONDecodeError) as exc:
        raise ProviderError(provider.name, None, str(exc)) from exc


def normalize_option_notes(value: Any, answer: str) -> dict[str, str]:
    if not isinstance(value, dict):
        return {}
    notes = {str(key).upper(): str(text).strip() for key, text in value.items() if str(key).upper() in "ABCD" and str(key).upper() != answer and str(text).strip()}
    return dict(list(notes.items())[:3])


def validate_batch(requested: list[dict[str, Any]], response: dict[str, Any]) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    requested_by_id = {item["id"]: item for item in requested}
    returned = response.get("items") if isinstance(response, dict) else None
    if not isinstance(returned, list):
        return [], [{"id": item["id"], "reason": "response missing items array"} for item in requested]
    good: list[dict[str, Any]] = []
    bad: list[dict[str, Any]] = []
    seen: set[str] = set()
    for value in returned:
        item_id = str(value.get("id", "")) if isinstance(value, dict) else ""
        source = requested_by_id.get(item_id)
        if not source or item_id in seen:
            continue
        seen.add(item_id)
        options = value.get("options_ko") if isinstance(value, dict) else None
        answer = str(value.get("answer", "")).upper().strip() if isinstance(value, dict) else ""
        question = str(value.get("question_ko", "")).strip() if isinstance(value, dict) else ""
        explanation = str(value.get("explanation_ko", "")).strip() if isinstance(value, dict) else ""
        normalized = {key: str(options.get(key, "")).strip() for key in "ABCD"} if isinstance(options, dict) else {}
        texts = [re.sub(r"\s+", " ", text).casefold() for text in normalized.values()]
        if answer not in "ABCD" or not question or not explanation or len(explanation) > MAX_EXPLANATION_CHARS or len(normalized) != 4 or any(not text for text in normalized.values()) or len(set(texts)) != 4:
            bad.append({"id": item_id, "reason": "schema, empty, duplicate option, or overlong explanation"})
            continue
        good.append({**source, "question_ko": question, "options_ko": normalized, "answer": answer, "explanation_ko": explanation, "option_notes_ko": normalize_option_notes(value.get("option_notes_ko"), answer)})
    for item in requested:
        if item["id"] not in seen:
            bad.append({"id": item["id"], "reason": "item omitted from response"})
    return good, bad


def yaml(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def specialty_dir(value: str) -> str:
    clean = re.sub(r"[<>:\\/?*\"]", "-", value).strip()
    return clean or "00 기타"


def render(item: dict[str, Any]) -> str:
    lines = [
        "---", "type: qbank", "schema_version: 1", f"id: {item['id']}", "source: Internal-Theory",
        "source_split: theory", "source_meta: repository-notes", "exam: Theory", "language: ko",
        f"specialty: {item['specialty']}", f"target_type: {item['target_type']}", f"target_slug: {yaml(item['target_slug'])}",
        f"theory_objective_id: {item['objective_id']}", f"question_type: {item['format']}",
        f"question_mode: {item['question_mode']}", "difficulty: standard", f"answer: {item['answer']}",
        "translation_status: not-applicable", "explanation_status: machine-generated", "generation_model: gpt-oss-120b",
        f"generation_prompt_version: {PROMPT_VERSION}", f"generated_at: {now()[:10]}", "review_status: machine-generated", "---", "",
        "# 이론 문제", "", "## 문제", "", item["question_ko"], "", "## 선택지", "",
    ]
    lines.extend(f"{key}. {item['options_ko'][key]}" for key in "ABCD")
    lines.extend(["", "## 해설", "", item["explanation_ko"].strip()])
    if item["option_notes_ko"]:
        lines.extend(["", "## 오답 포인트", ""])
        lines.extend(f"- **{key}. {item['options_ko'][key]}:** {note}" for key, note in item["option_notes_ko"].items())
    lines.extend(["", "## 출처", "", f"- 내부 학습 노트: {item['target_title']}", f"- 원본 경로: `{item['source_path']}`", f"- 학습 목표: {item['concept']}", ""])
    return "\n".join(lines)


def save_markdown(item: dict[str, Any]) -> None:
    # IDs retain their descriptive, deterministic form in frontmatter. Windows
    # paths cannot safely use those long IDs as filenames, so use a stable hash.
    filename = "theory-" + hashlib.sha256(item["id"].encode("utf-8")).hexdigest()[:24] + ".md"
    path = OUTPUT_ROOT / specialty_dir(str(item["specialty"])) / filename
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(render(item), encoding="utf-8", newline="\n")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate internal theory QBank questions through GPT-OSS providers.")
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--progress-every", type=int, default=100)
    parser.add_argument("--max-retries", type=int, default=MAX_RETRIES)
    parser.add_argument("--provider", choices=[p.name for p in PROVIDERS] + ["cloudflare"])
    parser.add_argument("--worker", default="")
    parser.add_argument("--shard-index", type=int, default=0)
    parser.add_argument("--shard-count", type=int, default=1)
    parser.add_argument("--batch-size", type=int, default=0, help="Override provider batch size for targeted retries")
    return parser.parse_args()


def main() -> int:
    global WORK_ROOT, RAW_ROOT, ACCEPTED_PATH, REVIEW_PATH, FAILURES_PATH, STATE_PATH
    args = parse_args()
    if args.shard_count < 1 or not 0 <= args.shard_index < args.shard_count:
        raise ValueError("Invalid shard index/count")
    # The deploy repository contains generated content; keys remain in the
    # workspace-level ignored files and are never copied into this repository.
    load_env(ENV_PATH if ENV_PATH.exists() else ROOT.parent / ".env.qbank-explanations")
    load_env(CF_ENV_PATH if CF_ENV_PATH.exists() else ROOT.parent / ".env.qbank-cloudflare")
    cf_url = os.environ.get("CLOUDFLARE_BASE_URL", "").strip().rstrip("/")
    providers = list(PROVIDERS)
    if cf_url:
        providers.append(Provider("cloudflare", "CLOUDFLARE_API_TOKEN", "CLOUDFLARE_EXPLANATION_MODEL", "@cf/openai/gpt-oss-120b", cf_url if cf_url.endswith("/chat/completions") else cf_url + "/chat/completions", "CLOUDFLARE_EXPLANATION_BATCH_SIZE", 10))
    if args.provider:
        providers = [provider for provider in providers if provider.name == args.provider]
        if not providers:
            raise RuntimeError(f"Configured provider is unavailable: {args.provider}")
    if args.batch_size:
        if args.batch_size < 1:
            raise ValueError("batch size must be positive")
        for provider in providers:
            os.environ[provider.batch_env] = str(args.batch_size)
    if args.worker:
        WORK_ROOT = WORK_ROOT / "workers" / args.worker
        RAW_ROOT = WORK_ROOT / "raw"
        ACCEPTED_PATH = WORK_ROOT / "accepted.jsonl"
        REVIEW_PATH = WORK_ROOT / "needs_review.jsonl"
        FAILURES_PATH = WORK_ROOT / "failures.jsonl"
        STATE_PATH = WORK_ROOT / "run_state.json"
    items = load_items()
    main_accepted = load_all_accepted()
    worker_accepted = {row["id"]: row for row in read_jsonl(ACCEPTED_PATH) if row.get("id")}
    accepted = {**main_accepted, **worker_accepted}
    # Recreate Markdown deterministically from the checkpoint. This also heals
    # an interruption between accepting an API result and writing its note.
    for item in worker_accepted.values():
        save_markdown(item)
    pending = [item for item in items if item["id"] not in accepted and int(hashlib.sha256(item["id"].encode("utf-8")).hexdigest(), 16) % args.shard_count == args.shard_index]
    if args.limit:
        pending = pending[:args.limit]
    if args.dry_run:
        print(json.dumps({"total": len(items), "already_accepted": len(accepted), "pending": len(pending), "providers": [p.name for p in providers], "first": pending[:2]}, ensure_ascii=False, indent=2))
        return 0
    state = json.loads(STATE_PATH.read_text(encoding="utf-8")) if STATE_PATH.exists() else {"provider_index": 0, "preflight_done": [], "started_at": now()}
    index = int(state.get("provider_index", 0)) % len(providers)
    done, calls, run_good, run_bad = len(accepted), 0, 0, 0
    while pending:
        provider = providers[index]
        preflight = provider.name in state.get("preflight_done", [])
        current = pending[:batch_size(provider, preflight)]
        for attempt in range(args.max_retries + 1):
            try:
                response, headers = post(provider, current)
                calls += 1
                RAW_ROOT.mkdir(parents=True, exist_ok=True)
                raw_name = hashlib.sha256(current[0]["id"].encode("utf-8")).hexdigest()[:24]
                (RAW_ROOT / f"{raw_name}-{provider.name}.json").write_text(json.dumps(response, ensure_ascii=False, indent=2), encoding="utf-8", newline="\n")
                good, bad = validate_batch(current, response)
                for item in good:
                    append_jsonl(ACCEPTED_PATH, item)
                    save_markdown(item)
                    accepted[item["id"]] = item
                for issue in bad:
                    append_jsonl(REVIEW_PATH, {**issue, "provider": provider.name, "at": now()})
                pending = pending[len(current):]
                state.setdefault("preflight_done", []).append(provider.name) if not preflight else None
                state["provider_index"] = index
                state["updated_at"] = now()
                write_json(STATE_PATH, state)
                run_good += len(good)
                run_bad += len(bad)
                break
            except ProviderError as exc:
                calls += 1
                # OpenRouter exposes the remaining credit ceiling in a 402
                # response. Retry the same real items in a smaller batch first;
                # this consumes the remaining useful capacity instead of
                # abandoning it because the original batch was too large.
                if exc.status == 402 and provider.name == "openrouter" and len(current) > 1:
                    current = current[: max(1, len(current) // 2)]
                    continue
                # A short 429 reset is capacity that should be used on the same
                # provider; switching immediately wastes that provider's quota.
                if exc.status == 429 and exc.retry_after is not None and exc.retry_after <= 90 and attempt < args.max_retries:
                    time.sleep(max(1.0, exc.retry_after + 0.5))
                    continue
                if attempt < args.max_retries and exc.status not in {401, 403, 429}:
                    time.sleep(min(10 * (attempt + 1), 20))
                    continue
                append_jsonl(FAILURES_PATH, {"ids": [item["id"] for item in current], "provider": provider.name, "status": exc.status, "error": str(exc)[:600], "at": now()})
                index = (index + 1) % len(providers)
                state["provider_index"] = index
                state["last_failure"] = {"provider": provider.name, "status": exc.status, "at": now()}
                write_json(STATE_PATH, state)
                if index == 0:
                    raise RuntimeError("All providers failed for the current batch") from exc
                break
        if len(accepted) // args.progress_every > done // args.progress_every:
            print(json.dumps({"progress": f"{len(accepted)}/{len(items)}", "accepted_in_run": run_good, "needs_review_in_run": run_bad, "calls": calls, "provider": provider.name}, ensure_ascii=False), flush=True)
        done = len(accepted)
    print(json.dumps({"complete": len(accepted), "total": len(items), "accepted_in_run": run_good, "needs_review_in_run": run_bad, "calls": calls}, ensure_ascii=False), flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
