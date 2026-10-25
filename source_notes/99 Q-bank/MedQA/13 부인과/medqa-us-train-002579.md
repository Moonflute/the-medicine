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
answer: C
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

26세 G2P1 여성이 임신 12주에 내원했다. 이전 임신은 합병증 없이 39주 1일에 건강한 남아를 질식분만했다. 이번 산전검사에서 태아 심박수는 180회/분이고 혈액형은 A 음성이다. 다음 중 이 환자에게 필요한 검사는?

## 선택지

A. 직접 쿰스 검사
B. 백혈구 감별검사
C. 간접 쿰스 검사
D. 혈청 비타민 B12 측정

## 해설

간접 항글로불린검사(C)는 모체 혈청의 항적혈구 동종항체를 선별한다. 태아가 RhD 양성인지 직접 확인하는 검사가 아니다. 감작 여부와 태아·신생아 Rh형에 따라 예방 및 감시를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 간접쿰스의목적은태아Rh형이아니라모체동종항체선별.
- https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002579
