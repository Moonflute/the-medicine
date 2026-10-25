---
type: qbank
schema_version: 1
id: medqa-us-train-001552
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c02a434d505c9ff1fc148acde61f3f05cfee70b1b573cd3e0026ce928f81f47e
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "transient proteinuria"
  - "orthostatic proteinuria"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4sOumveyEsSDri6jrsLHrh6ggKE9ydGhvc3RhdGljIFByb3RlaW51cmlhKS5tZA
question_type: investigation
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

신장질환 가족력이 없는 무증상 15세 고등학교 레슬링 선수가 시즌 전 신체검사를 받고 있다. 소변 시험지에서 단백질 양성이다. 다음 중 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 다른 날 소변 시험지 재검
B. 소변배양
C. 신장 초음파
D. 무작위 소변 단백질-크레아티닌 비율

## 해설

정답은 A이다. 무증상 청소년 운동선수의 단회 dipstick 단백양성은 운동·발열·기립성 요인으로 일시적일 수 있다. 격렬한 운동 등을 피한 다른 날 첫 아침 소변으로 재확인하고, 지속되면 첫 아침 단백/creatinine 비 등으로 정량한다. 같은 운동 조건을 반복해 확인하라는 뜻은 아니며 단회 양성만으로 영상이나 생검을 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 일시적/기립성 단백뇨를 구별하도록 같은 조건이 아니라 첫 아침 재검을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001552
