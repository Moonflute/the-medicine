"""Synchronise group-overview member metadata from the generated hierarchy.

This is source maintenance, not a runtime inference: each overview's front
matter and ``## 포함 질환`` list are rewritten from its canonical hierarchy
membership so Q-bank scopes, page navigation and the visible differential
table cannot drift apart after a disease-note addition or move.
"""
from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "_webapp" / "data"
REPORT = ROOT / "reports" / "group-overview-membership-audit.json"


def split_frontmatter(raw: str) -> tuple[str, str]:
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, re.S)
    return (match.group(1), raw[match.end():]) if match else ("", raw)


def replace_list(frontmatter: str, key: str, values: list[str]) -> str:
    block = key + ":\n" + "\n".join(f"- {value}" for value in values)
    pattern = rf"^{re.escape(key)}:\s*(?:\n(?:[ \t]*-.*\n?)*)?"
    if re.search(pattern, frontmatter, re.M):
        return re.sub(pattern, block, frontmatter, count=1, flags=re.M).rstrip()
    return frontmatter.rstrip() + "\n" + block


def replace_included_section(body: str, values: list[str]) -> str:
    block = "## 포함 질환\n" + "\n".join(f"- [[{value}]]" for value in values) + "\n"
    pattern = r"(?ms)^## 포함 질환\s*\n.*?(?=^## |\Z)"
    if re.search(pattern, body):
        return re.sub(pattern, block + "\n", body, count=1).rstrip() + "\n"
    return body.rstrip() + "\n\n" + block


def main() -> None:
    diseases = json.loads((DATA / "diseases.json").read_text(encoding="utf-8"))
    hierarchy = json.loads((DATA / "disease-hierarchy.json").read_text(encoding="utf-8"))
    by_slug = {item["slug"]: item for item in diseases}
    changed: list[dict[str, object]] = []
    missing: list[str] = []
    for group in diseases:
        if not group.get("groupOverview"):
            continue
        member_slugs = hierarchy.get("groupMemberSlugsBySlug", {}).get(group["slug"], [])
        members = [by_slug[slug]["title"] for slug in member_slugs if slug in by_slug]
        path = ROOT / group["sourcePath"]
        if not path.exists():
            missing.append(group["sourcePath"])
            continue
        raw = path.read_text(encoding="utf-8")
        frontmatter, body = split_frontmatter(raw)
        if not frontmatter:
            missing.append(group["sourcePath"])
            continue
        new_frontmatter = replace_list(frontmatter, "group_members", members)
        new_body = replace_included_section(body, members)
        rendered = ("---\n" + new_frontmatter + "\n---\n" + new_body).rstrip() + "\n"
        if rendered != raw:
            path.write_text(rendered, encoding="utf-8")
            changed.append({"title": group["title"], "sourcePath": group["sourcePath"], "members": len(members)})
    REPORT.write_text(json.dumps({
        "groupOverviewCount": sum(1 for item in diseases if item.get("groupOverview")),
        "changedCount": len(changed),
        "changed": changed,
        "missingSourcePaths": missing,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"changed": len(changed), "missing": len(missing), "report": str(REPORT.relative_to(ROOT))}, ensure_ascii=False))


if __name__ == "__main__":
    main()
