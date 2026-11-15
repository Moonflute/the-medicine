---
type: qbank
schema_version: 1
id: medqa-us-train-000620
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca7960aafbdd9cef733b345d2acb5e8e83a844f5fc4dee845bf3db6f2a5929a9
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "blunt abdominal trauma"
  - "hypovolemic shock"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

복부 둔상 직후 도착한 환자의 혈압은 62/40 mmHg, 맥박은 142회/분이다. 피부가 차갑고 FAST에서 복강 내 액체가 보이지만, 혈색소는 14 g/dL다. 이 수치는 어떻게 해석하는가?

## 선택지

A. 이 정도 혈색소면 출혈성 쇼크가 아니다
B. 수액을 주지 않고 혈색소가 떨어지는지 먼저 본다
C. 급성 출혈 초기에는 정상일 수 있으므로 소생과 출혈 통제를 지연하지 않는다
D. 복강 내 액체는 출혈이 아니라 복수로 판단한다

## 해설

급성 출혈 직후에는 혈장과 적혈구가 함께 빠져 혈색소 농도가 아직 정상일 수 있다. 혈역학과 손상 소견으로 판단하며 정상 혈색소만으로 중증 출혈을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 대량출혈 직후 정상 Hb/Hct는 혈액희석 때문이 아니라 적혈구와 혈장이 함께 소실되어 농도가 즉시 변하지 않기 때문으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000620
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/
