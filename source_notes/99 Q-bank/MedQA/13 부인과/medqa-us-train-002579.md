---
type: qbank
schema_version: 1
id: medqa-us-train-002579
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcb9a009696ad6c1c0353769a07a1ca1947d3752f4e82f47704bc96b304e6f4b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Rh-negative pregnancy"
  - "maternal alloimmunization"
  - "indirect Coombs test"
  - "Rh incompatibility"
question_type: investigation
related_disease_slugs:
  - MDkg7ZiI7JWhL1JoIOyaqe2YiOyEseyniO2ZmCAoUmgg7Jqp7ZiI7ISx7KeI7ZmYKS5tZA
difficulty: complex
answer: D
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

RhD 음성인 임신 12주 산모가 첫 산전 검사를 받는다. 이전 임신력은 있으나 동종항체 검사 기록은 없다. 모체가 항-D 등 적혈구 동종항체를 갖는지 확인할 검사는?

## 선택지

A. 모체 적혈구 표면 항체를 보는 직접항글로불린검사
B. 태아 염색체 선별검사
C. 신생아 혈액형을 확인할 때까지 기다림
D. 모체 혈청의 비예기항체 선별검사(간접항글로불린검사)

## 해설

임신 초기 모체 혈청에서 임상적으로 중요한 적혈구 동종항체를 선별한다. 양성이면 항체 특이성과 수치 등을 평가해 이미 감작된 상태와 예방이 필요한 상태를 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 간접쿰스의목적은태아Rh형이아니라모체동종항체선별.
- https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002579
- https://doi.org/10.1111/tme.13098
