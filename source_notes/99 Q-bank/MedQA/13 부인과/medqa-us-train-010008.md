---
type: qbank
schema_version: 1
id: medqa-us-train-010008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:14f4bb4b32848691bddeb9ce7993d445cf5427684ea95580d79c08c15652f152
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "복압성 요실금"
  - "방광류"
  - "골반장기탈출"
  - "Stress urinary incontinence"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRm9zaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 여성이 기침·달리기 때만 소변이 샌다. 절박뇨나 감염 소견은 없고 배뇨 후 잔뇨도 정상이다. 복압성 요실금의 1차 치료는?

## 선택지

A. 지도하에 골반저근 운동을 시행한다
B. 항무스카린제를 정기 처방한다
C. 유치도뇨관을 장기간 넣는다
D. 보존치료를 건너뛰고 바로 수술한다

## 해설

복압성 요실금은 지도하 골반저근 운동을 우선 시행한다. 필요하면 체중이나 만성 기침도 관리하고, 보존치료에도 불편이 지속되면 다른 선택지를 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 복압성 요실금을 방광류에서만 또는 가장 흔하게 나타나는 현상으로 단정한 해설을 공통 골반저 지지 장애로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010008
- https://www.nice.org.uk/guidance/ng123/chapter/recommendations
