---
type: qbank
schema_version: 1
id: medqa-us-train-001173
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a537a8dd2eca47d6f2b90d7ca5e50696a701d795c96e9eacd70a13783f2fc1a7
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetes"
  - "hypertension"
  - "hyperosmolar hyperglycemic state"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남성이 혼란(confusion)을 주소로 응급실에 내원하였다. 환자의 아내는 남편이 지난 며칠간 더 졸려 하더니 현재는 매우 혼란스러워한다고 진술하였다. 환자 본인은 호소하는 증상이 없으나 질문에 부적절하게 대답하고 있다. 환자의 과거력으로 당뇨병과 고혈압이 있다. 체온은 98.3°F(36.8°C), 혈압은 127/85 mmHg, 맥박은 138회/분, 호흡수는 14회/분, 실내 공기에서 산소 포화도는 99%이다. 신체 검진상 점막이 건조한 혼란 상태의 남성이 확인된다. 초기 검사 결과는 아래와 같다. 혈청: Na+: 135 mEq/L, Cl-: 100 mEq/L, K+: 3.0 mEq/L, HCO3-: 23 mEq/L, BUN: 30 mg/dL, 포도당: 1,299 mg/dL, 크레아티닌: 1.5 mg/dL, Ca2+: 10.2 mg/dL. 이 환자에게 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 인슐린
B. 인슐린 및 칼륨
C. 인슐린, 생리식염수 및 칼륨
D. 생리식염수 및 칼륨

## 해설


환자는 고혈당성 고삼투성 비케톤성 탈수( hyperosmolar hyperglycemic state)로 탈수와 저칼륨혈증을 보인다. 인슐린 투여는 혈당을 낮추지만, 저칼륨 상태에서 급히 투여하면 심각한 부정맥을 유발할 수 있다. 따라서 먼저 정맥으로 생리식염수로 수액 재수화하고, 칼륨을 보충하여 혈중 K⁺를 3.5 mEq/L 이상으로 교정한 뒤 인슐린을 시작한다. 초기 치료는 생리식염수와 칼륨 보충이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001173
