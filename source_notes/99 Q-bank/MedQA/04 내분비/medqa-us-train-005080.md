---
type: qbank
schema_version: 1
id: medqa-us-train-005080
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9959c18810b72f3d6d7e93c97d3cd89ec9e91ded6ae8355f5f7fcb79db83a6f1
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "하시모토 갑상샘염"
  - "자가면역 갑상샘질환"
  - "항갑상샘과산화효소 항체"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 여성이 피로와 추위불내성을 호소한다. 갑상선이 아프지 않게 미만성으로 커져 있고 TSH는 높으며 유리 T4는 낮다. 일차성 갑상선기능저하의 자가면역 원인을 평가할 검사는?

## 선택지

A. TSH 수용체 항체
B. 칼시토닌
C. 갑상선글로불린 단독 측정
D. 갑상선 과산화효소 항체

## 해설


갑상선 과산화효소 항체는 하시모토 갑상선염을 지지한다. 항체만으로 현재 갑상선 기능을 판단하지 않고 TSH와 유리 T4를 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자가면역 동반·무통성 미만성 갑상선종·저하증은 Hashimoto 항체 D와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005080
- https://ekjm.org/journal/view.php?number=25889
