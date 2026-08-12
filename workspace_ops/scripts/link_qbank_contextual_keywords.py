from __future__ import annotations

"""Link non-disease QBank keywords when their existing question context agrees.

The main tag linker deliberately avoids mapping tests, drugs and risk factors:
``ACE inhibitor`` does not have one globally correct disease target.  This
follow-up resolves only the safe subset.  A raw keyword receives a canonical
slug when *every* question using it already has that same single disease link.
The mapping records why it was accepted; no model/API call is involved.
"""

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SOURCE_ROOT = ROOT / "source_notes" / "99 Q-bank" / "MedQA"
STATE_PATH = ROOT / "workspace_ops" / "qbank" / "tag_linking" / "disease_tag_mappings.json"
AUDIT_PATH = ROOT / "reports" / "qbank-disease-tag-full-audit.json"
REPORT_PATH = ROOT / "reports" / "qbank-contextual-keyword-links.json"


def parse_frontmatter(path: Path) -> dict[str, list[str] | str]:
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"^---\r?\n([\s\S]*?)\r?\n---", raw)
    if not match:
        return {}
    result: dict[str, list[str] | str] = {}
    active = ""
    for line in match.group(1).splitlines():
        key_match = re.match(r"^([^:]+):\s*(.*)$", line)
        if key_match:
            active = key_match.group(1).strip()
            value = key_match.group(2).strip()
            result[active] = value if value else []
            continue
        if active and re.match(r"^\s*-\s+", line):
            current = result.setdefault(active, [])
            if not isinstance(current, list):
                current = result[active] = []
            current.append(re.sub(r"^\s*-\s+", "", line).strip().strip('"'))
    return result


def as_list(value: list[str] | str | None) -> list[str]:
    return value if isinstance(value, list) else []


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    state_doc = json.loads(STATE_PATH.read_text(encoding="utf-8"))
    mappings: dict[str, dict[str, object]] = state_doc["mappings"]
    audit_doc = json.loads(AUDIT_PATH.read_text(encoding="utf-8"))
    audit_rows = audit_doc.get("tags", audit_doc)
    eligible = {
        f"{row['specialty']}\0{row['tag']}"
        for row in audit_rows
        if row["status"] in {"non-disease-keyword", "non-disease-clinical-keyword"}
        and not row.get("slug")
    }

    # For each raw keyword, retain the intersection of established disease
    # links across all its occurrences. An empty set means different diseases
    # use the same keyword, so it must remain a context-only label.
    candidate_sets: dict[str, list[set[str]]] = defaultdict(list)
    occurrence_ids: dict[str, list[str]] = defaultdict(list)
    for path in sorted(SOURCE_ROOT.rglob("*.md")):
        frontmatter = parse_frontmatter(path)
        specialty = str(frontmatter.get("specialty", ""))
        question_id = str(frontmatter.get("id", ""))
        slugs = {slug for slug in as_list(frontmatter.get("related_disease_slugs")) if slug}
        if not specialty or not question_id or not slugs:
            continue
        for tag in as_list(frontmatter.get("related_diseases")):
            key = f"{specialty}\0{tag}"
            if key in eligible:
                candidate_sets[key].append(slugs)
                occurrence_ids[key].append(question_id)

    accepted: list[dict[str, object]] = []
    skipped_multiple = 0
    for key in sorted(eligible):
        per_question = candidate_sets.get(key, [])
        if not per_question:
            continue
        shared = set.intersection(*per_question)
        if len(shared) != 1:
            skipped_multiple += 1
            continue
        slug = next(iter(shared))
        specialty, tag = key.split("\0", 1)
        mappings[key] = {
            "slug": slug,
            "confidence": "question-context-consensus",
            "provider": "deterministic-context",
        }
        accepted.append({
            "specialty": specialty,
            "tag": tag,
            "slug": slug,
            "occurrences": len(per_question),
            "question_ids": occurrence_ids[key],
        })

    report = {
        "schema_version": 1,
        "eligible_unlinked_keywords": len(eligible),
        "contextually_linked": len(accepted),
        "skipped_ambiguous_context": skipped_multiple,
        "links": accepted,
    }
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if args.apply:
        STATE_PATH.write_text(json.dumps(state_doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: report[key] for key in report if key != "links"}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
