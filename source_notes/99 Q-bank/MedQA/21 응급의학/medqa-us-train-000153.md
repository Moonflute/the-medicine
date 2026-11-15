---
type: qbank
schema_version: 1
id: medqa-us-train-000153
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4ff6b3985632afe3ba63fbeb5a3de6ed8da9e8f253b8608cb0061b2b0e3835f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "diabetes"
  - "hypertension"
  - "osteoarthritis"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
---

# MedQA US 임상문제

## 문제

혈압과 당뇨병이 안정된 65세 남성이 국소마취로 백내장수술을 받는다. 흉통이나 호흡곤란이 없고 평소 활동에 제한이 없다. 수술 전 심장 부하검사는 어떻게 할까?

## 선택지

A. 당뇨병이 있으므로 모두 시행한다
B. 부하검사 대신 모든 경우 관상동맥 CT를 한다
C. 심장검사를 위해 수술을 무조건 6개월 미룬다
D. 저위험 수술 전 일률적인 심장 부하검사는 하지 않는다

## 해설


백내장수술은 심장 위험이 낮다. 증상이 없고 안정적인 환자에게 결과가 처치를 바꾸지 않는 부하검사를 일률적으로 시행하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000153
- https://professional.heart.org/en/science-news/2024-guideline-for-perioperative-cardiovascular-management-for-noncardiac-surgery
