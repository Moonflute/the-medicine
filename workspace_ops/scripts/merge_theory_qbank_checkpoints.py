from __future__ import annotations

import json
from pathlib import Path

from generate_theory_qbank_multiapi import load_items


ROOT = Path(__file__).resolve().parents[2]
THEORY_ROOT = ROOT / "workspace_ops" / "qbank" / "theory"
CANONICAL = THEORY_ROOT / "accepted.jsonl"


def read_jsonl(path: Path):
    if not path.exists():
        return []
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def main() -> None:
    manifest_items = load_items()
    expected = {item["id"] for item in manifest_items}
    paths = [CANONICAL, *sorted((THEORY_ROOT / "workers").glob("*/accepted.jsonl"))]
    records = {}
    for path in paths:
        for record in read_jsonl(path):
            item_id = record.get("id")
            if item_id in expected:
                records.setdefault(item_id, record)

    missing = expected - records.keys()
    if missing:
        raise SystemExit(f"Cannot consolidate: {len(missing)} expected IDs are absent")

    backup = THEORY_ROOT / "accepted.pre-merge.jsonl"
    if CANONICAL.exists() and not backup.exists():
        backup.write_bytes(CANONICAL.read_bytes())
    ordered = [records[item["id"]] for item in manifest_items]
    temp = CANONICAL.with_suffix(".jsonl.tmp")
    temp.write_text("".join(json.dumps(item, ensure_ascii=False, separators=(",", ":")) + "\n" for item in ordered), encoding="utf-8", newline="\n")
    temp.replace(CANONICAL)
    print(json.dumps({"consolidated": len(ordered), "backup": str(backup.relative_to(ROOT))}, ensure_ascii=False))


if __name__ == "__main__":
    main()
