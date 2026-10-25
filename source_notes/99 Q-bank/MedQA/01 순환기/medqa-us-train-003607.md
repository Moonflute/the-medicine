---
type: qbank
schema_version: 1
id: medqa-us-train-003607
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a075361deb9f15368470d1cf9350686f4e64a38fb12617e9557ab4355824a9f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "infrarenal abdominal aortic aneurysm"
  - "small AAA"
  - "surveillance"
  - "smoking history"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 선별 초음파에서 직경 4 cm의 신장 아래 대동맥류가 발견되어 내원했다. 특별한 증상은 없고 흡연력은 100갑년이었다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 베타차단제
B. 추적관찰
C. 응급 수술
D. 안심시키기

## 해설


직경 4 cm의 복부 대동맥류는 작은(≤5 cm) AAA에 해당하며, 증상이 없을 경우 수술보다 정기 추적관찰이 권장된다. 위험도는 크기에 비례하므로 현재는 관찰이 적절하다. 따라서 추적관찰이 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무증상 남성의 신하부 AAA4cm는 정기 영상추적 B가 적절; 즉시 수술 크기/증상 조건 없음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003607
