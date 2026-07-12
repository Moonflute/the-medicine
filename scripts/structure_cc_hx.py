from __future__ import annotations

import argparse
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1] / "source_notes" / "01 Chief Complaint"
SKIP = {"CC_index.md", "chief_complaints_master.md"}

COUNSELING_TITLES = {
    "가정폭력",
    "성폭력",
    "자살",
    "음주 상담",
    "흡연 상담",
}


def expand_terms(text: str) -> str:
    replacements = [
        (r"\bAVNCD\b", "AVNCD (Anorexia, Vomiting, Nausea, Constipation, Diarrhea)"),
        (r"\bFCCSR\b", "FCCSR (Fever, Chill, Cough, Sputum, Rhinorrhea)"),
        (r"\bFUND\b", "FUND (Frequency, Urgency, Nocturia, Dysuria)"),
        (r"\bHISR\b", "HISR (Hematuria, Incontinence, Hesitancy, Retention)"),
        (r"\bHIR\b", "HIR (Hematuria, Incontinence, Retention)"),
        (r"\bHIS\b", "HIS (Hematuria, Incontinence, Hesitancy)"),
        (r"\bBSS\b", "BSS (bloody stool, acid regurgitation)"),
        (r"\bJD\b", "JD (Jaundice)"),
        (r"(?<![A-Za-z.])D\.P(?![A-Za-z.])", "D.P (Dyspnea, Palpitation)"),
    ]

    result = text
    for pattern, replacement in replacements:
        result = re.sub(pattern, replacement, result)
    return result


def heading_for(line: str) -> tuple[str | None, str | None]:
    text = line.strip()
    normalized = re.sub(r"\s+", " ", text).strip()

    exact = {
        "O L D Co Ex": "O / L / D / Co / Ex (Onset, Location, Duration, Course, Experienced)",
        "L D Co Ex": "L / D / Co / Ex (Location, Duration, Course, Experienced)",
        "O L D Co": "O / L / D / Co (Onset, Location, Duration, Course)",
        "LDCoEx": "L / D / Co / Ex (Location, Duration, Course, Experienced)",
        "D Co Ex": "D / Co / Ex (Duration, Course, Experienced)",
        "Onset": "O (Onset)",
        "O": "O (Onset)",
        "Location": "L (Location)",
        "L": "L (Location)",
        "Character": "C (Character)",
        "Associated Sx": "A (Associated symptoms)",
        "Associated Sx ": "A (Associated symptoms)",
        "Factor": "F (Factor)",
        "FE": "F (Factor)",
        "F E": "F (Factor)",
        "E": "E (Event)",
        "Event": "E (Event)",
        "PPI": "PPI",
        "PPI 멘트": "PPI",
        "[PPI comment]": "PPI",
        "Female & Factor": "Female history / Factor",
    }

    if normalized in exact:
        return exact[normalized], None

    if normalized.startswith("Associated Sx"):
        return "A (Associated symptoms)", normalized.split(":", 1)[1].strip() if ":" in normalized else None

    for prefix, heading in (
        ("Onset", "O (Onset)"),
        ("Location", "L (Location)"),
        ("Duration", "D (Duration)"),
        ("Course", "Co (Course)"),
        ("Experienced", "Ex (Experienced)"),
    ):
        if re.match(rf"^{re.escape(prefix)}\s*:", normalized):
            return heading, normalized.split(":", 1)[1].strip()

    if normalized.startswith("Factor") and ":" in normalized:
        return "F (Factor)", normalized.split(":", 1)[1].strip()

    if normalized.startswith("외과약사가여"):
        suffix = normalized.split(":", 1)[1].strip() if ":" in normalized else None
        return "Background history (외과력)", suffix

    return None, None


def normalize_item(line: str) -> str:
    item = line.replace("\u00a0", " ").strip()
    item = re.sub(r"^(?:[-*]|•)\s+", "", item)
    item = re.sub(r"\s+", " ", item).strip()
    return expand_terms(item)


def deduplicate_exact_body(lines: list[str]) -> list[str]:
    cleaned = [line.rstrip() for line in lines]
    while len(cleaned) > 1 and len(cleaned) % 2 == 0:
        half = len(cleaned) // 2
        if cleaned[:half] == cleaned[half:]:
            cleaned = cleaned[:half]
        else:
            break
    return cleaned


def deduplicate_structured_body(lines: list[str]) -> list[str]:
    compact = [line.strip() for line in lines if line.strip()]
    if len(compact) % 2 != 0:
        return lines
    half = len(compact) // 2
    if compact[:half] != compact[half:]:
        return lines

    result: list[str] = []
    for line in compact[:half]:
        if line.startswith("### ") and result:
            result.append("")
        result.append(line)
    return result


def structure_hx(title: str, lines: list[str]) -> list[str]:
    lines = deduplicate_exact_body(lines)
    output: list[str] = []
    active_heading: str | None = None
    group_started = False

    def start_heading(heading: str) -> None:
        nonlocal active_heading, group_started
        if output and output[-1] != "":
            output.append("")
        output.append(f"### {heading}")
        active_heading = heading
        group_started = False

    def ensure_group() -> None:
        nonlocal group_started
        if group_started:
            return
        output.append("#### CC-specific")
        group_started = True

    def ensure_heading() -> None:
        if active_heading is not None:
            return
        start_heading("PPI / CC-specific opening" if title in COUNSELING_TITLES else "CC-specific assessment")

    for raw_line in lines:
        stripped = raw_line.strip()
        if not stripped:
            continue

        heading, inline = heading_for(stripped)
        if heading:
            start_heading(heading)
            if inline:
                output.append(f"- {expand_terms(inline)}")
            continue

        ensure_heading()
        if active_heading != "Background history (외과력)" and re.match(r"^(외상력|과거력|약물력|사회력|가족력|여성력)\s*:", stripped):
            start_heading("Background history (외과력)")
        item = normalize_item(raw_line)
        if item:
            ensure_group()
            output.append(f"- {item}")

    while output and output[-1] == "":
        output.pop()
    return output


def replace_hx_block(raw: str, title: str) -> str:
    match = re.search(r"(?m)^## Hx\s*$", raw)
    if not match:
        return raw

    body_start = match.end()
    next_section = re.search(r"(?m)^##\s+", raw[body_start:])
    body_end = body_start + next_section.start() if next_section else len(raw)
    old_body = raw[body_start:body_end]
    if re.search(r"(?m)^###\s+", old_body):
        cleaned = deduplicate_structured_body(old_body.splitlines())
        if cleaned == old_body.splitlines():
            return raw
        return raw[:body_start] + "\n\n" + "\n".join(cleaned) + "\n\n" + raw[body_end:]
    structured = structure_hx(title, old_body.splitlines())
    new_body = "\n\n" + "\n".join(structured) + "\n\n"
    return raw[:body_start] + new_body + raw[body_end:]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    parser.add_argument("--diff", action="store_true")
    args = parser.parse_args()

    changed: list[tuple[Path, str, str]] = []
    for path in sorted(ROOT.glob("*.md"), key=lambda item: item.name):
        if path.name in SKIP:
            continue
        old = path.read_text(encoding="utf-8")
        new = replace_hx_block(old, path.stem)
        if old != new:
            changed.append((path, old, new))

    if args.diff:
        import difflib

        for path, old, new in changed:
            print("".join(difflib.unified_diff(
                old.splitlines(keepends=True),
                new.splitlines(keepends=True),
                fromfile=str(path),
                tofile=str(path),
            ))
        )

    if args.check:
        print(f"Would change {len(changed)} file(s)")
        return 1 if changed else 0

    for path, _, new in changed:
        path.write_text(new, encoding="utf-8", newline="\n")

    print(f"Changed {len(changed)} file(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
