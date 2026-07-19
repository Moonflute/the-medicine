---
type: qbank
schema_version: 1
id: medqa-us-train-000567
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55bb2bbe58c1c544641724db6c34326938ec49b99ea0e9af5855afdcff1c13f8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hypertension"
  - "emphysema"
  - "cachexia"
  - "hyponatremia"
  - "SIADH"
question_type: management
difficulty: complex
answer: C
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

고혈압과 폐기종 병력이 있는 59세 백인 남성이 점진적인 기면과 혼란으로 병원에 내원했다. 환자는 지난 3개월 동안 식욕 부진을 겪었으며 의도치 않게 9kg(19.8lb)의 체중이 감소했다. 35년간 하루 한 갑씩 흡연했으나 5년 전에 금연했다. 고혈압 치료를 위해 lisinopril과 bisoprolol을 복용 중이며 알레르기는 없다. 진찰 결과 환자는 악액질(cachectic) 상태로 보인다. 자극에는 반응하나 기면 상태이며 유의미한 병력을 제공할 수 없다. 혈압은 138/90 mmHg, 심박수는 분당 100회, 실내 공기에서의 산소 포화도는 90%이다. 점막은 촉촉하고 심음은 규칙적이며 잡음이나 S3/S4 말발굽 리듬은 들리지 않으며 사지에 부종은 없다. 폐 진찰에서 우하엽의 호흡음이 약간 감소해 있고 양측성 천명음이 들린다. 검사 결과는 다음과 같다: 나트륨 110 mEq/L, 칼륨 4.1 mEq/L, 염화물 102 mEq/L, CO2 41 mmHg, BUN 18, 크레아티닌 1.3 mg/dL, 포도당 93 mg/dL, 소변 삼투압 600 mOsm/kg H2O, 혈장 삼투압 229 mEq/L, 백혈구 8,200 cells/mL, 혈색소 15.5 g/dL, 동맥혈 가스 분석 pH 7.36/pCO2 60/pO2 285. 흉부 X-선 검사에서 우상엽의 종괴가 확인되었다. 환자의 저나트륨혈증을 해결하기 위한 가장 적절한 치료는 무엇인가?

## 선택지

A. 20 mEq/L KCl을 포함한 포도당 용액(Dextrose) 250 mL/h 투여
B. 0.45% 식염수 100 mL/h 투여
C. 3% 식염수 35 mL/h 투여
D. 30 mEq/L KCl을 포함한 0.45% 식염수 100 mL/h 투여

## 해설


저나트륨혈증이 저삼투성(플라즈마 삼투압 229 mOsm/kg)이며, 소변 삼투압이 높고 부피가 적은 경우 SIADH가 의심된다. 혈압을 급격히 올리지 않으면서 혈중 Na⁺를 올리기 위해 3% 식염수를 35 mL/h 투여한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000567
