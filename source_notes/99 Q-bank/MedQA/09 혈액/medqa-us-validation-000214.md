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
question_type: diagnosis
difficulty: complex
answer: D
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

29세 여성이 수개월간 피로, 어지러움, 반복적인 낙상으로 진료를 받았다. 하루 5~8잔의 술을 마시며, 혈색소는 9.0 g/dL, 메틸말론산은 1.0 μmol/L(정상 <0.40)였다. 가장 가능성 높은 원인은?

## 선택지

A. 알코올 사용
B. 엽산 결핍
C. 철 결핍
D. 비타민 B12 결핍

## 해설


빈혈과 낙상·균형 이상에 methylmalonic acid 상승이 동반되어 선택지 중 B12 결핍(D)이 가장 부합한다. 엽산 결핍이나 알코올 자체만으로는 보통 MMA가 상승하지 않는다. 다만 MMA는 신기능 저하 등에서도 증가할 수 있으므로 임상상과 B12·신기능을 함께 해석한다. Hb 9g/dL를 모든 상황에서 경미한 감소로 규정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000214 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MMA 증가·빈혈·낙상에서 B12결핍 D 유지. Hb9를 경미 감소로 일률 표현하거나 MMA를 신기능과 무관하게 완전 특이로 단정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000214
