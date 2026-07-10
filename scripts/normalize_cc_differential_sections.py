from __future__ import annotations

import argparse
import difflib
import sys
from pathlib import Path


ROOT = Path("source_notes") / "01 Chief Complaint"
SKIP_FILES = {"CC_index.md", "chief_complaints_master.md"}
SECTION_TITLE = "## 감별진단"


def normalize_value(text: str) -> str:
    return " ".join(text.strip().split())


def normalize_section(block: str) -> str:
    ends_with_newline = block.endswith("\n")
    lines = block.splitlines()
    if not lines:
        return block

    out = [lines[0].rstrip()]
    i = 1
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            if out[-1] != "":
                out.append("")
            i += 1
            continue

        if line[:1].isspace():
            out.append(normalize_value(line))
            i += 1
            continue

        values: list[str] = []
        j = i + 1
        while j < len(lines) and lines[j].strip() and lines[j][:1].isspace():
            values.append(normalize_value(lines[j]))
            j += 1

        if values:
            out.append(f"{normalize_value(line)} : {' / '.join(values)}")
            i = j
            continue

        out.append(normalize_value(line))
        i += 1

    normalized = "\n".join(out)
    if ends_with_newline:
        normalized += "\n"
    return normalized


def normalize_note(text: str) -> str:
    start = text.find(SECTION_TITLE)
    if start == -1:
        return text

    next_section = text.find("\n## ", start + len(SECTION_TITLE))
    if next_section == -1:
        section = text[start:]
        suffix = ""
    else:
        section = text[start:next_section]
        suffix = text[next_section:]

    body_lines = section.splitlines()[1:]
    first_content = next((line.strip() for line in body_lines if line.strip()), "")
    if first_content.startswith(":"):
        return text

    normalized = normalize_section(section)
    return text[:start] + normalized + suffix


def iter_notes() -> list[Path]:
    return sorted(p for p in ROOT.glob("*.md") if p.name not in SKIP_FILES)


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="show changed files without writing")
    parser.add_argument("--diff", action="store_true", help="print unified diffs")
    args = parser.parse_args()

    changed: list[Path] = []
    for path in iter_notes():
        original = path.read_text(encoding="utf-8")
        normalized = normalize_note(original)
        if normalized == original:
            continue

        changed.append(path)
        if args.diff:
            print(
                "".join(
                    difflib.unified_diff(
                        original.splitlines(keepends=True),
                        normalized.splitlines(keepends=True),
                        fromfile=str(path),
                        tofile=str(path),
                    )
                )
            )
        if not args.check:
            path.write_text(normalized, encoding="utf-8")

    print(f"{'Would change' if args.check else 'Changed'} {len(changed)} file(s).")
    for path in changed:
        print(path)
    return 1 if args.check and changed else 0


if __name__ == "__main__":
    raise SystemExit(main())

