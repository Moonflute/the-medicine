from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1] / "source_notes" / "01 Chief Complaint"
SKIP = {"CC_index.md", "chief_complaints_master.md"}

TERM_GROUPS = [
    ("AVNCD", ["Anorexia", "Vomiting", "Nausea", "Constipation", "Diarrhea"], r"(?<![A-Za-z])AVNCD(?![A-Za-z])"),
    ("ANVCD", ["Anorexia", "Nausea", "Vomiting", "Constipation", "Diarrhea"], r"(?<![A-Za-z])ANVCD(?![A-Za-z])"),
    ("FCCSR", ["Fever", "Chill", "Cough", "Sputum", "Rhinorrhea"], r"(?<![A-Za-z])FCCSR(?![A-Za-z])"),
    ("HISR", ["Hematuria", "Incontinence", "Hesitancy", "Retention"], r"(?<![A-Za-z])HISR(?![A-Za-z])"),
    ("FUND", ["Frequency", "Urgency", "Nocturia", "Dysuria"], r"(?<![A-Za-z])FUND(?![A-Za-z])"),
    ("BSS", ["bloody stool", "acid regurgitation"], r"(?<![A-Za-z])BSS(?![A-Za-z])"),
    ("D.P", ["Dyspnea", "Palpitation"], r"(?<![A-Za-z])D\.P(?![A-Za-z])"),
    ("HIR", ["Hematuria", "Incontinence", "Retention"], r"(?<![A-Za-z])HIR(?![A-Za-z])"),
    ("HIS", ["Hematuria", "Incontinence", "Hesitancy"], r"(?<![A-Za-z])HIS(?![A-Za-z])"),
    ("JD", ["Jaundice"], r"(?<![A-Za-z])JD(?![A-Za-z])"),
]

BACKGROUND_KEYS = (
    ("surgical", "외과력"),
    ("past", "과거력"),
    ("medication", "약물력"),
    ("social", "사회력"),
    ("family", "가족력"),
    ("female", "여성력"),
)


def split_known_terms(text: str) -> list[str]:
    matches = []
    for token, items, pattern in TERM_GROUPS:
        for match in re.finditer(pattern + r"(?:\s*\([^)]*\))?", text):
            matches.append((match.start(), match.end(), items))

    if not matches:
        return [text]

    matches.sort(key=lambda item: item[0])
    result = [item for _, _, items in matches for item in items]
    residual = text
    for start, end, _ in reversed(matches):
        residual = residual[:start] + " " + residual[end:]
    residual = re.sub(r"\s*[-+]\s*", " ", residual)
    residual = re.sub(r"(?<!\w)[.,]+(?!\w)", " ", residual)
    residual = re.sub(r"\s+", " ", residual).strip(" ,")
    if residual:
        result.append(residual)
    return result


def background_key(item: str) -> str:
    if re.match(r"^(외상력|외과력|외과약사가여)", item):
        return "surgical"
    if item.startswith("과거력"):
        return "past"
    if item.startswith("약물력"):
        return "medication"
    if item.startswith("사회력"):
        return "social"
    if item.startswith("가족력"):
        return "family"
    if item.startswith("여성력"):
        return "female"
    return "surgical"


def normalize_item(line: str) -> str:
    item = line.replace("\u00a0", " ").strip()
    item = re.sub(r"^(?:[-*]|•)\s+", "", item).strip()
    return "P" if item == ".P" else item


def refine_hx_body(lines: list[str]) -> list[str]:
    output: list[str] = []
    index = 0

    while index < len(lines):
        line = lines[index]
        stripped = line.strip()

        if stripped == "### Background history (외과력)":
            index += 1
            background_items = {key: [] for key, _ in BACKGROUND_KEYS}
            while index < len(lines) and not lines[index].strip().startswith("### "):
                item = normalize_item(lines[index])
                if item and not item.startswith("#### "):
                    background_items[background_key(item)].append(item)
                index += 1

            for key, label in BACKGROUND_KEYS:
                items = background_items[key]
                if not items:
                    continue
                output.append(f"### {label}")
                output.append("#### CC-specific")
                for item in items:
                    output.append(f"- {item}")
                output.append("")
            continue

        if stripped.startswith("-") or stripped.startswith("*") or stripped.startswith("•"):
            item = normalize_item(line)
            for split_item in split_known_terms(item):
                output.append(f"- {split_item}")
        else:
            output.append(line.rstrip())
        index += 1

    while output and not output[-1].strip():
        output.pop()
    while output and not output[0].strip():
        output.pop(0)
    return output


def refine_file(raw: str) -> str:
    match = re.search(r"(?m)^## Hx[ \t]*$", raw)
    if not match:
        return raw

    body_start = match.end()
    next_section = re.search(r"(?m)^##\s+", raw[body_start:])
    body_end = body_start + next_section.start() if next_section else len(raw)
    old_body = raw[body_start:body_end]
    new_body = "\n\n" + "\n".join(refine_hx_body(old_body.splitlines())) + "\n\n"
    return raw[:body_start] + new_body + raw[body_end:]


def main() -> int:
    changed = 0
    for path in sorted(ROOT.glob("*.md"), key=lambda item: item.name):
        if path.name in SKIP:
            continue
        old = path.read_text(encoding="utf-8")
        new = refine_file(old)
        if old == new:
            continue
        path.write_text(new, encoding="utf-8", newline="\n")
        changed += 1

    print(f"Changed {changed} file(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
