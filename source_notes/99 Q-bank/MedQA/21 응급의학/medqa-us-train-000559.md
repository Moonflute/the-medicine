---
type: qbank
schema_version: 1
id: medqa-us-train-000559
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:edea9a6f999772cc59257dee633eb69eaf6a7dcaa89ccfbb847f3c1ad89f6196
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "fractured distal femur"
  - "dyspnea"
  - "confusion"
  - "purpura"
  - "Fat embolism"
question_type: diagnosis
difficulty: complex
answer: B
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

대퇴골 원위부 골절로 입원한 지 3일째 되는 33세 남성이 호흡곤란과 혼란을 보입니다. 심각한 질환의 과거력은 없습니다. 환자는 질문에 대답하거나 지시를 따를 수 없습니다. 혈압은 145/90 mm Hg, 맥박은 120/min, 호흡수는 36/min, 체온은 36.7°C입니다. 80% FiO2에서 산소 포화도는 90%입니다. 진찰 결과, 앞가슴, 머리, 목 부위에 자색반(purpura)이 관찰됩니다. 양측 폐야에서 흡기 시 수포음(crackles)이 들립니다. 80% FiO2에서의 동맥혈 가스 분석 결과는 다음과 같습니다: pH 7.54, PCO2 17 mm Hg, PO2 60 mm Hg, HCO3− 22 mEq/L. 흉부 X-선 사진이 제시되었습니다. 다음 중 이 소견들의 원인을 가장 잘 설명하는 것은 무엇입니까?

## 선택지

A. 급성 호흡곤란 증후군(Acute respiratory distress syndrome)
B. 지방 색전증(Fat embolism)
C. 병원 획득 폐렴(Hospital-acquired pneumonia)
D. 폐 혈전색전증(Pulmonary thromboembolism)

## 해설


대퇴골 골절 후 24–72시간 내에 나타나는 급성 호흡곤란, 혼란, 그리고 앞가슴·머리·목에 나타나는 피로성 반점은 지방 색전증의 전형적인 삼중증상이다. 지방 색전이 폐 모세혈관을 막아 저산소증과 양측성 흡음음(크랙클) 및 급성 저산소성 호흡부전을 일으킨다. 따라서 제시된 임상양상과 영상소견은 지방 색전증에 가장 부합한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000559
