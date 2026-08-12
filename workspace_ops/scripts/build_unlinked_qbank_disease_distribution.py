"""Summarise disease-tag frequency within QBank questions without a disease link.

This report intentionally counts question presence, not repeated tag mentions
inside a single question.  It keeps raw labels visible and also emits a
normalised-label view so spelling/case variants do not distort the histogram.
"""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
AUDIT_PATH = ROOT / "reports" / "qbank-empty-disease-link-audit.json"
TAG_AUDIT_PATH = ROOT / "reports" / "qbank-disease-tag-full-audit.json"
JSON_PATH = ROOT / "reports" / "qbank-unlinked-disease-frequency.json"
MD_PATH = ROOT / "reports" / "qbank-unlinked-disease-frequency.md"

# Only exact synonym decisions belong here.  Broader/narrower diseases remain
# separate even if they are clinically related, so this audit does not inflate
# a condition's frequency by collapsing different teaching scopes.
MANUAL_SYNONYM_CANONICAL = {
    "엘러스단로스증후군": "ehlersdanlossyndrome",
    "베크위드비데만증후군": "beckwithwiedemannsyndrome",
    "호흡기세포융합바이러스감염": "respiratorysyncytialvirusinfection",
    "고igm증후군": "hyperigmsyndrome",
    "세로토닌증후군": "serotoninsyndrome",
    "노로바이러스감염": "norovirusinfection",
    "norovirusgastroenteritis": "norovirusinfection",
    "파보바이러스b19감염": "parvovirusb19infection",
    "레트증후군": "rettsyndrome",
    "왈렌베르크증후군": "wallenbergsyndrome",
    "lateralmedullarysyndrome": "wallenbergsyndrome",
    "외측연수증후군": "wallenbergsyndrome",
    "thalamicpainsyndrome": "dejerineroussysyndrome",
    "echinococcosis": "hydatiddisease",
    "yersiniosis": "yersiniaenterocoliticainfection",
    "hereditaryhemochromatosis": "hemochromatosis",
    "칸나비스구토증후군": "cannabinoidhyperemesissyndrome",
    "선천성cmv감염": "congenitalcmvinfection",
    "취약x증후군": "fragilexsyndrome",
    "신생아금단증후군": "neonatalabstinencesyndrome",
    "태아모체출혈": "fetalhemorrhage",
    "임신중생리적빈혈": "physiologicanemiaofpregnancy",
    "비우발적손상": "nonaccidentalinjury",
    "식품매개보툴리눔중독": "보툴리눔중독",
    "성매개감염예방": "sexuallytransmittedinfectionprevention",
}


def normalise(value: str) -> str:
    value = re.sub(r"(?i)(?<=\w)['’]s\b", "", value)
    value = value.lower()
    value = value.translate(str.maketrans({"ö": "o", "ü": "u", "ä": "a", "é": "e"}))
    return re.sub(r"[\s\W_]+", "", value, flags=re.UNICODE)


def canonicalise(value: str) -> str:
    normalised = normalise(value)
    return MANUAL_SYNONYM_CANONICAL.get(normalised, normalised)


def histogram(counter: Counter[str]) -> list[dict[str, int | str]]:
    buckets = ((1, 1, "1회"), (2, 2, "2회"), (3, 3, "3회"), (4, 4, "4회"), (5, 9, "5–9회"), (10, 19, "10–19회"), (20, None, "20회 이상"))
    return [
        {"bucket": label, "tag_count": sum(1 for count in counter.values() if count >= low and (high is None or count <= high))}
        for low, high, label in buckets
    ]


def main() -> None:
    audit = json.loads(AUDIT_PATH.read_text(encoding="utf-8"))
    questions = [q for q in audit["questions"] if q["status"] == "no-current-canonical-document"]
    tag_audit = json.loads(TAG_AUDIT_PATH.read_text(encoding="utf-8"))
    tag_rows = tag_audit.get("tags") or tag_audit.get("items") or tag_audit
    unresolved_disease_keys = {
        (str(row["specialty"]), str(row["tag"]))
        for row in tag_rows
        if row.get("status") == "no-current-canonical-document"
    }

    raw = Counter(
        tag
        for q in questions
        for tag in set(q.get("tags") or [])
        if (str(q["specialty"]), tag) in unresolved_disease_keys
    )
    grouped: dict[str, dict[str, object]] = {}
    question_sets: dict[str, set[str]] = defaultdict(set)
    for question in questions:
        question_id = str(question.get("id", ""))
        for tag in set(question.get("tags") or []):
            if (str(question["specialty"]), tag) not in unresolved_disease_keys:
                continue
            key = canonicalise(tag)
            row = grouped.setdefault(key, {"canonical_tag": tag, "tag_variants": [], "question_count": 0})
            if tag not in row["tag_variants"]:
                row["tag_variants"].append(tag)
            question_sets[key].add(question_id)
            if len(tag) < len(str(row["canonical_tag"])):
                row["canonical_tag"] = tag
    for key, row in grouped.items():
        row["question_count"] = len(question_sets[key])

    normalised = Counter({str(row["canonical_tag"]): int(row["question_count"]) for row in grouped.values()})
    rows = sorted(grouped.values(), key=lambda row: (-int(row["question_count"]), str(row["canonical_tag"])))
    payload = {
        "description": "Disease-tag frequency among MedQA questions that currently have no canonical disease-document link. Counts are per question and include only tags classified as no-current-canonical-document; symptoms, tests, drugs, and other clinical keywords are excluded.",
        "unlinked_question_count": len(questions),
        "raw_tag_forms": {"unique_count": len(raw), "question_tag_occurrences": sum(raw.values()), "histogram": histogram(raw)},
        "normalised_tag_forms": {"unique_count": len(grouped), "question_tag_occurrences": sum(normalised.values()), "histogram": histogram(normalised)},
        "tags": rows,
    }
    JSON_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    def table(rows: list[dict[str, object]]) -> list[str]:
        return ["| 질환 태그 | 미연결 문항 수 | 표기 |", "| --- | ---: | --- |"] + [
            f"| {row['canonical_tag']} | {row['question_count']} | {', '.join(map(str, row['tag_variants']))} |"
            for row in rows[:50]
        ]

    lines = [
        "# 미연결 QBank 질환 태그 빈도",
        "",
        f"대상: 정본 질환 문서 링크가 없는 MedQA 문항 **{len(questions):,}개**. 한 문항 안에서 같은 태그가 반복되어도 1회로 계산했습니다.",
        "",
        "## 빈도 분포 (표기 정규화 후)",
        "",
        "| 문항 반복 수 | 질환 태그 수 |",
        "| --- | ---: |",
        *[f"| {row['bucket']} | {row['tag_count']:,} |" for row in payload['normalised_tag_forms']['histogram']],
        "",
        f"정규화 태그 {len(grouped):,}종, 질환 태그-문항 발생 {sum(normalised.values()):,}건입니다. 원문 표기 기준은 {len(raw):,}종입니다.",
        "",
        "## 상위 미연결 질환 태그",
        "",
        *table(rows),
        "",
        "## 해석",
        "",
        "- 1회성 태그가 대부분이라, 새 문서를 일괄 생성하기보다 반복 빈도와 임상 중요도를 함께 기준으로 정리하는 편이 적절합니다.",
        "- 이 보고서는 아직 문서가 없는 질환성 태그가 하나라도 있는 문항만 포함합니다. 증상·검사·약물 등 비질환 태그만 있는 문항은 제외했습니다.",
        "- 한·영 표기 및 약어가 명백히 같은 질환인 경우만 수동 동의어 표로 병합했습니다. 상위·하위 질환이나 관련 질환은 별도로 유지했습니다.",
    ]
    MD_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({"questions": len(questions), "raw_tags": len(raw), "normalised_tags": len(grouped), "report": str(MD_PATH)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
