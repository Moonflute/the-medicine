from __future__ import annotations

import json
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
APP = ROOT / "apps" / "medicine-web"
SOURCE = ROOT / "source_notes" / "02 Diseases" / "08 감염" / "_data" / "infection-pathways.json"
OUTPUT = ROOT / "_webapp" / "data" / "infection-pathways.json"


def main() -> None:
    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    assert source["schemaVersion"] == 1
    assert len(source["pathways"]) >= 10
    assert len({item["id"] for item in source["pathways"]}) == len(source["pathways"])
    assert all(item["sourceIds"] for item in source["pathways"])
    assert all(len(set(item["sourceIds"])) >= 2 for item in source["pathways"] if item["reviewStatus"] == "verified")

    subprocess.run(
        ["node", "scripts/build-infection-pathways.mjs"],
        cwd=APP,
        check=True,
    )

    generated = json.loads(OUTPUT.read_text(encoding="utf-8"))
    assert all(item.get("diseaseSlug") and item.get("diseaseTitle") for item in generated["pathways"])
    assert sum(item["reviewStatus"] == "verified" for item in generated["pathways"]) >= 10
    snapshot = json.loads((ROOT / "reports" / "infection-structure-snapshot.json").read_text(encoding="utf-8"))
    assert snapshot["markdownCount"] == 83
    assert snapshot["tocHeadings"] == ["감염", "G(+)", "G(-)", "기타", "혐기성균", "바이러스", "진균", "원생동물", "기생충", "발열", "원내감염", "지역사회"]
    maintenance = json.loads((ROOT / "reports" / "infection-maintenance-audit.json").read_text(encoding="utf-8"))
    assert maintenance["clinicalAnchorAudit"] == {"missingAntibiotics": [], "missingOrganisms": []}
    assert maintenance["summary"]["reviewedQuizQuestions"] > 0
    print(json.dumps({"ok": True, "pathways": len(generated["pathways"])}, ensure_ascii=False))


if __name__ == "__main__":
    main()
