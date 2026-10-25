---
type: qbank
schema_version: 1
id: medqa-us-train-002044
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:efb71eca5997dde1889754aa41f05106b950365ba7d6d3a57945bb73d9d93c6c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "restless legs syndrome"
  - "iron deficiency"
  - "complete blood count"
question_type: investigation
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 여성이 남편의 권유로 수면장애 진료를 받으러 왔다. 대부분의 밤에 반복해서 침대에서 일어나 집안을 서성이다 다시 눕는다. 침대에 누우면 다리에 소름이 기어가는 듯한 불쾌감이 생겨 일어나야만 완화된다. 다음 중 가장 이상할 가능성이 높은 검사 결과는 무엇인가?

## 선택지

A. 전혈구검사
B. 헤모글로빈 A1c
C. 간기능검사
D. 요추천자

## 해설

휴식·야간에 심해지고 움직이면 완화되는 다리 불쾌감과 움직이고 싶은 충동은 하지불안증후군을 시사한다. 철결핍 및 철결핍빈혈과 연관되므로 주어진 선지 중 CBC(A)에서 빈혈이 발견될 수 있다. CBC가 혈청 철을 직접 측정하는 검사는 아니며 정상 CBC도 철결핍을 배제하지 않는다. 실제 평가에서는 혈청 페리틴과 트랜스페린 포화도를 확인한다. HbA1c·간기능·요추천자는 이 임상양상에서 우선적으로 이상을 예상하는 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 하지불안증후군에서 CBC로 저철혈증을 직접 검출한다는 오류를 교정했다. 선지 A는 동반 철결핍빈혈을 찾는 검사지만 실제 철 평가는 페리틴·트랜스페린 포화도가 필요하다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC11701286/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002044
