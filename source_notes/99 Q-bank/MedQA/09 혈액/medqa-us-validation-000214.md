---
type: qbank
schema_version: 1
id: medqa-us-validation-000214
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ce5349ca0599261dfb88ed4a434b70fcbca04e419e0f1daf33654b05d89c4acd
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 B12 결핍"
  - "거대적아구성 빈혈"
  - "메틸말론산"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

손발 저림과 대적혈구증이 있는 환자의 혈청 비타민 B12가 검사실 기준 경계 범위에 있다. 신기능은 정상이다. B12 결핍을 확인하는 데 도움이 되는 추가 검사는?

## 선택지

A. 혈청 엽산만 측정
B. 혈청 메틸말론산 측정
C. 혈청 저장철만 측정
D. 내인자 항체가 음성이면 B12 결핍을 배제

## 해설


초기 B12 결과가 경계일 때 메틸말론산을 추가해 기능적 결핍을 평가할 수 있다. 신장 기능 저하만으로도 메틸말론산이 오를 수 있어 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000214 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MMA 증가·빈혈·낙상에서 B12결핍 D 유지. Hb9를 경미 감소로 일률 표현하거나 MMA를 신기능과 무관하게 완전 특이로 단정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000214
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations
