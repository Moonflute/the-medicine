#!/usr/bin/env python3
"""Audit emergency-medicine Disease notes and cross-specialty metadata."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DISEASE_ROOT = ROOT / "source_notes" / "02 Diseases"
EM_ROOT = DISEASE_ROOT / "21 응급의학"
OUT_JSON = ROOT / "reports" / "emergency_disease_audit.json"
OUT_MD = ROOT / "reports" / "emergency_disease_audit.md"
EXPECTED_FILES = {
    "쇼크 (Shock).md",
    "다발외상 (Polytrauma).md",
    "창상 및 열상 (Wounds and Lacerations).md",
    "급성 중독 총론 (General Management of Acute Poisoning).md",
    "열질환 (Heat Illness).md",
    "한랭손상 (Cold Injury).md",
    "익수 (Drowning).md",
    "일산화탄소 중독 (Carbon Monoxide Poisoning).md",
}
EXPECTED_SECTIONS = ["1", "2", "3", "4", "5", "6"]
ALLOWED_CLASSIFICATIONS = {
    "소생 및 중증응급",
    "외상 및 창상",
    "중독",
    "환경응급",
    "주요 장기계 응급",
}


def yaml_list(text: str, key: str) -> list[str]:
    frontmatter = re.match(r"^---\r?\n([\s\S]*?)\r?\n---", text)
    if not frontmatter:
        return []
    match = re.search(rf"^{re.escape(key)}:\s*\r?\n((?:\s*-\s*.*\r?\n?)*)", frontmatter.group(1), flags=re.M)
    if not match:
        return []
    return [re.sub(r"^\s*-\s*", "", line).strip().strip("'\"") for line in match.group(1).splitlines() if line.strip()]


def main() -> None:
    failures = []
    for name in sorted(EXPECTED_FILES):
        path = EM_ROOT / name
        if not path.exists():
            failures.append({"file": name, "issues": ["missing"]})
            continue
        text = path.read_text(encoding="utf-8")
        issues = []
        sections = re.findall(r"^##\s+([1-6])\.\s+.+$", text, flags=re.M)
        if sections != EXPECTED_SECTIONS:
            issues.append(f"section sequence={sections}")
        priority = re.search(r"^clinical_priority:\s*(\S+)", text, flags=re.M)
        if not priority or priority.group(1) != "tier_2":
            issues.append("new emergency disease must start as tier_2")
        if not re.search(r"^content_updated_at:\s*['\"]?\d{4}-\d{2}-\d{2}", text, flags=re.M):
            issues.append("missing content_updated_at")
        if not re.search(r"^guideline_year:\s*['\"]?\d{4}", text, flags=re.M):
            issues.append("missing guideline_year")
        sources = yaml_list(text, "sources")
        if not sources or any(" | http" not in source for source in sources):
            issues.append("sources must contain label | URL")
        for number in EXPECTED_SECTIONS:
            section = re.search(rf"^##\s+{number}\.\s+.+?\r?\n([\s\S]*?)(?=^##\s+[1-6]\.|\Z)", text, flags=re.M)
            if not section or not section.group(1).strip():
                issues.append(f"section {number} empty")
        if issues:
            failures.append({"file": name, "issues": issues})

    related_count = 0
    related_failures = []
    for path in DISEASE_ROOT.rglob("*.md"):
        text = path.read_text(encoding="utf-8")
        related = yaml_list(text, "관련분과")
        if "응급의학" not in related:
            continue
        related_count += 1
        classification = yaml_list(text, "응급의학_분류")
        if not classification:
            related_failures.append({"file": str(path.relative_to(ROOT)).replace("\\", "/"), "issue": "missing 응급의학_분류"})
        elif classification[0] not in ALLOWED_CLASSIFICATIONS:
            related_failures.append({"file": str(path.relative_to(ROOT)).replace("\\", "/"), "issue": f"invalid top classification={classification[0]}"})

    report = {
        "ok": not failures and not related_failures,
        "expected_new_diseases": len(EXPECTED_FILES),
        "new_disease_failures": failures,
        "related_disease_count": related_count,
        "related_metadata_failures": related_failures,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = [
        "# Emergency Disease audit",
        "",
        f"- Result: {'PASS' if report['ok'] else 'FAIL'}",
        f"- Expected new Disease notes: {len(EXPECTED_FILES)}",
        f"- Related specialty notes: {related_count}",
        f"- New Disease failures: {len(failures)}",
        f"- Related metadata failures: {len(related_failures)}",
        "",
    ]
    if failures:
        lines.extend(["## New Disease failures", ""])
        lines.extend(f"- {item['file']}: {', '.join(item['issues'])}" for item in failures)
        lines.append("")
    if related_failures:
        lines.extend(["## Related metadata failures", ""])
        lines.extend(f"- {item['file']}: {item['issue']}" for item in related_failures)
        lines.append("")
    OUT_MD.write_text("\n".join(lines), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False))
    if not report["ok"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
