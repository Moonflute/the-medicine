#!/usr/bin/env python3
"""Audit Chief Complaint ER sections and their Disease wiki links."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CC_ROOT = ROOT / "source_notes" / "01 Chief Complaint"
DISEASE_ROOT = ROOT / "source_notes" / "02 Diseases"
OUT_JSON = ROOT / "reports" / "cc_er_structure_audit.json"
OUT_MD = ROOT / "reports" / "cc_er_structure_audit.md"
EXPECTED = [
    "1. 즉시 평가 및 안정화",
    "2. 놓치면 안 되는 질환",
    "3. 초기 검사",
    "4. 초기 처치 및 재평가",
    "5. Disposition",
    "6. ER 함정",
]
EXCLUDED_NEW = {"음낭 통증／붓기.md", "요폐.md"}


def frontmatter_aliases(text: str) -> set[str]:
    match = re.match(r"^---\r?\n([\s\S]*?)\r?\n---", text)
    if not match:
        return set()
    aliases: set[str] = set()
    active = False
    for line in match.group(1).splitlines():
        if re.match(r"^aliases\s*:", line):
            active = True
            continue
        if active and re.match(r"^\s*-\s+", line):
            aliases.add(re.sub(r"^\s*-\s+", "", line).strip().strip("'\""))
        elif active and line.strip():
            active = False
    return aliases


def main() -> None:
    disease_terms: set[str] = set()
    for path in DISEASE_ROOT.rglob("*.md"):
        if path.name == "_목차.md":
            continue
        disease_terms.add(path.stem)
        disease_terms.update(frontmatter_aliases(path.read_text(encoding="utf-8")))

    rows = []
    failures = []
    unresolved = []
    for path in sorted(CC_ROOT.glob("*.md")):
        if path.name in {"CC_index.md", "chief_complaints_master.md"}:
            continue
        text = path.read_text(encoding="utf-8")
        er_matches = list(re.finditer(r"^##\s+ER\s*$", text, flags=re.M))
        if not er_matches:
            continue
        start = er_matches[0].end()
        remainder = text[start:]
        next_h2 = re.search(r"^##\s+", remainder, flags=re.M)
        er_body = remainder[: next_h2.start()] if next_h2 else remainder
        headings = re.findall(r"^###\s+(.+?)\s*$", er_body, flags=re.M)
        row_failures = []
        if len(er_matches) != 1:
            row_failures.append(f"ER heading count={len(er_matches)}")
        if headings[:6] != EXPECTED:
            row_failures.append(f"headings={headings[:6]}")
        if any(not re.search(rf"^###\s+{re.escape(title)}\s*$[\s\S]*?^-\s+\S", er_body, flags=re.M) for title in EXPECTED[:5]):
            row_failures.append("one or more required sections are empty")
        if re.search(r"^###\s+(Hx|PEx)\b", er_body, flags=re.M | re.I):
            row_failures.append("Hx/PEx duplicated inside ER")
        for target in re.findall(r"\[\[([^\]|]+)", er_body):
            target = target.strip()
            if target not in disease_terms:
                unresolved.append({"cc": path.stem, "target": target})
        row = {"title": path.stem, "path": str(path.relative_to(ROOT)).replace("\\", "/"), "headings": headings, "failures": row_failures}
        rows.append(row)
        if row_failures:
            failures.append(row)

    unexpected_files = [name for name in EXCLUDED_NEW if (CC_ROOT / name).exists()]
    report = {
        "ok": not failures and not unresolved and not unexpected_files,
        "er_note_count": len(rows),
        "failures": failures,
        "unresolved_disease_links": unresolved,
        "unexpected_excluded_files": unexpected_files,
        "rows": rows,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = [
        "# CC ER structure audit",
        "",
        f"- Result: {'PASS' if report['ok'] else 'FAIL'}",
        f"- CC notes with ER: {len(rows)}",
        f"- Structure failures: {len(failures)}",
        f"- Unresolved Disease links: {len(unresolved)}",
        f"- Unexpected excluded files: {len(unexpected_files)}",
        "",
    ]
    if failures:
        lines.extend(["## Structure failures", ""])
        lines.extend(f"- {item['title']}: {', '.join(item['failures'])}" for item in failures)
        lines.append("")
    if unresolved:
        lines.extend(["## Unresolved Disease links", ""])
        lines.extend(f"- {item['cc']}: {item['target']}" for item in unresolved)
        lines.append("")
    OUT_MD.write_text("\n".join(lines), encoding="utf-8")
    print(json.dumps({k: v for k, v in report.items() if k != "rows"}, ensure_ascii=False))
    if not report["ok"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
