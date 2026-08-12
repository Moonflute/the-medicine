"""Fill missing group-overview comparison sections from canonical child notes.

This is deliberately a source-only enrichment pass.  It does not infer new
medical facts or send note contents to a third party: every row is distilled
from the already-reviewed child document that the overview represents.
"""
from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "_webapp" / "data"
REPORT = ROOT / "reports" / "group-overview-content-audit.json"


def split_frontmatter(raw: str) -> tuple[str, str]:
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, re.S)
    return (match.group(1), raw[match.end():]) if match else ("", raw)


def first_meaningful_line(item: dict[str, object]) -> str:
    definition = str(item.get("definition") or "").strip()
    if definition:
        return clean_cell(definition)
    overview = item.get("overview") or []
    if isinstance(overview, list):
        for line in overview:
            value = clean_cell(str(line))
            if value:
                return value
    return "개별 문서의 핵심 임상 단서와 진단 기준을 확인합니다."


def clean_cell(value: str) -> str:
    value = re.sub(r"\s+", " ", value.replace("|", "/")).strip(" -•")
    return value[:150].rstrip(" ,.;:") + ("…" if len(value) > 150 else "")


def insert_before_included(body: str, block: str) -> str:
    match = re.search(r"(?m)^## 포함 질환\s*$", body)
    if match:
        return body[:match.start()].rstrip() + "\n\n" + block.rstrip() + "\n\n" + body[match.start():]
    return body.rstrip() + "\n\n" + block.rstrip() + "\n"


def main() -> None:
    diseases = json.loads((DATA / "diseases.json").read_text(encoding="utf-8"))
    hierarchy = json.loads((DATA / "disease-hierarchy.json").read_text(encoding="utf-8"))
    by_slug = {item["slug"]: item for item in diseases}
    changed: list[dict[str, object]] = []
    already_complete: list[str] = []
    empty_groups: list[dict[str, str]] = []

    for group in diseases:
        if not group.get("groupOverview"):
            continue
        source = ROOT / str(group["sourcePath"])
        if not source.exists():
            continue
        raw = source.read_text(encoding="utf-8")
        _, body = split_frontmatter(raw)
        member_slugs = hierarchy.get("groupMemberSlugsBySlug", {}).get(group["slug"], [])
        members = [by_slug[slug] for slug in member_slugs if slug in by_slug]
        if not members:
            empty_groups.append({"title": str(group["title"]), "sourcePath": str(group["sourcePath"])})
            continue
        if re.search(r"(?m)^## 하위 질환 감별 포인트\s*$", body):
            already_complete.append(str(group["title"]))
            continue

        rows = ["| 하위 질환 | 구분에 유용한 단서 |", "| --- | --- |"]
        rows.extend(f"| [[{child['title']}]] | {first_meaningful_line(child)} |" for child in members)
        block = "\n".join([
            "## 공통 접근",
            "- 이 범주의 하위 질환은 증상 경과, 침범 부위, 유발 요인 및 검사 패턴을 함께 비교합니다.",
            "- 각 질환의 확진 기준과 처치는 아래 연결 문서에서 확인합니다.",
            "",
            "## 하위 질환 감별 포인트",
            *rows,
        ])
        source.write_text(raw.replace(body, insert_before_included(body, block)), encoding="utf-8")
        changed.append({"title": group["title"], "sourcePath": group["sourcePath"], "memberCount": len(members)})

    REPORT.write_text(json.dumps({
        "groupOverviewCount": sum(1 for item in diseases if item.get("groupOverview")),
        "contentAddedCount": len(changed),
        "alreadyHadComparisonCount": len(already_complete),
        "emptyGroupCount": len(empty_groups),
        "contentAdded": changed,
        "emptyGroups": empty_groups,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"contentAdded": len(changed), "alreadyComplete": len(already_complete), "emptyGroups": len(empty_groups)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
