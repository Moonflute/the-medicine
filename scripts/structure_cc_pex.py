from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1] / "source_notes" / "01 Chief Complaint"
SKIP = {"CC_index.md", "chief_complaints_master.md"}

SLOTS = (
    ("vitals", "V/S"),
    ("eyes", "Eyes"),
    ("mouth", "Mouth"),
    ("neck", "Neck"),
    ("chest", "Chest"),
    ("abdomen", "Abdomen"),
    ("extremities", "Extremities"),
    ("skin", "Skin"),
    ("neurologic", "Neurologic examination"),
    ("special", "Special examination"),
)

SLOT_LABELS = dict(SLOTS)

COMPOUND_PATTERN = re.compile(r"V/S|(?<!\S)(?:눈|입|목)(?:\([^)]*\))?")


def normalize_item(line: str) -> str:
    item = line.replace("\u00a0", " ").strip()
    item = re.sub(r"^(?:[-*]|•)\s+", "", item).strip()
    item = re.sub(r"\s+", " ", item)
    return item.strip(" /")


def split_compound_item(item: str) -> list[str]:
    matches = list(COMPOUND_PATTERN.finditer(item))
    if len(matches) < 2:
        return [item]

    result: list[str] = []
    cursor = 0
    for match in matches:
        before = normalize_item(item[cursor:match.start()])
        if before:
            result.append(before)
        result.append(match.group(0).strip())
        cursor = match.end()

    trailing = normalize_item(item[cursor:])
    if trailing:
        result.append(trailing)
    return result


def slot_key(item: str) -> str:
    normalized = item.lower()

    if re.search(r"\bv/s\b|vital signs|\uD608\uC555\uCE21\uC815", normalized):
        return "vitals"
    if re.search(
        r"\uB1CC|\uC2E0\uACBD|\uC18C\uB1CC|\uC218\uB9C9|dtr|mmse|\uBCF4\uD589|\uC2E0\uACBD\uD559|neurolog|spurling|lhermitte|slrt|patrick|schober|dix-hallpike|tinel|phalen",
        normalized,
    ):
        return "neurologic"
    if re.search(r"\uB208|eye|\uB3D9\uACF5|\uC548\uC9C4|\uC2DC\uC57C", normalized):
        return "eyes"
    if re.search(r"\uC785|mouth|\uAD6C\uAC15|\uC778\uB450|gag reflex", normalized):
        return "mouth"
    if re.search(r"\uC2DC\uD589\uD558\uC9C0|\uC2E0\uCCB4\uC9C4\uCC30\s*\uC5C6\uC74C|\uC0DD\uB7B5|\uD558\uC9C0\s*\uC54A\uC74C", normalized):
        return "special"
    if re.search(r"\uC0AC\uC9C0|\uD314\uB2E4\uB9AC|\uC0C1\uC9C0|\uD558\uC9C0|\uC190\uBAA9|\uC190\s*\(|extremit|limb|\uB9E5\uBC15", normalized):
        return "extremities"
    if re.search(r"\uBAA9|neck|\uACBD\uC815\uB9E5|\uAC11\uC0C1\uC0D8|\uAC11\uC0C1\uC120|\uB9BC\uD504\uC808", normalized):
        return "neck"
    if re.search(r"\uD754\uBD80|chest|\uC2EC\uC74C|\uD638\uD761\uC74C|\uC2EC\uC7A5|cardiac|respiratory", normalized):
        return "chest"
    if re.search(r"\uBCF5\uBD80|abdomen|\uC2E0\uB3D9\uB9E5|\uBC29\uAD11", normalized):
        return "abdomen"
    if re.search(r"\uD53C\uBD80|skin|\uBC1C\uC9C4|\uACE4\uBD09\uC9C0|\uCCAD\uC0C9\uC99D|\uAE34\uC7A5\uB3C4|\uBD80\uC885", normalized):
        return "skin"
    return "special"

def already_structured(body: str) -> bool:
    match = re.search(r"(?m)^## PEx[ \t]*$", body)
    if not match:
        return True
    next_section = re.search(r"(?m)^##\s+", body[match.end() :])
    pex_body = body[match.end() : match.end() + next_section.start()] if next_section else body[match.end() :]
    return bool(re.search(r"(?m)^###\s+", pex_body))


def structure_pex(raw: str) -> str:
    match = re.search(r"(?m)^## PEx[ \t]*$", raw)
    if not match:
        return raw

    body_start = match.end()
    next_section = re.search(r"(?m)^##\s+", raw[body_start:])
    body_end = body_start + next_section.start() if next_section else len(raw)
    old_body = raw[body_start:body_end]

    grouped: dict[str, list[str]] = {key: [] for key, _ in SLOTS}
    for line in old_body.splitlines():
        if line.strip().startswith("###"):
            continue
        item = normalize_item(line)
        if not item or item.startswith("###"):
            continue
        for split_item in split_compound_item(item):
            if split_item and split_item not in grouped[slot_key(split_item)]:
                grouped[slot_key(split_item)].append(split_item)

    chunks: list[str] = []
    for key, label in SLOTS:
        items = grouped[key]
        if not items:
            continue
        chunks.append(f"### {label}")
        chunks.append("#### CC-specific")
        chunks.extend(f"- {item}" for item in items)
        chunks.append("")

    if not chunks:
        return raw

    new_body = "\n\n" + "\n".join(chunks).rstrip() + "\n\n"
    return raw[:body_start] + new_body + raw[body_end:]


def main() -> int:
    changed = 0
    for path in sorted(ROOT.glob("*.md"), key=lambda item: item.name):
        if path.name in SKIP:
            continue
        old = path.read_text(encoding="utf-8")
        new = structure_pex(old)
        if old == new:
            continue
        path.write_text(new, encoding="utf-8", newline="\n")
        changed += 1

    print(f"Changed {changed} file(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
