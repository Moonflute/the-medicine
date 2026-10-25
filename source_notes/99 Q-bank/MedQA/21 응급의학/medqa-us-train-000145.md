---
type: qbank
schema_version: 1
id: medqa-us-train-000145
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43604bdd9a2f87bab60336404fa8e2baa3619fc69b26b6d43ada44ad16602853
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Glasgow coma scale"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 자동차 사고 후 응급실에 내원하였다. 그는 정면충돌 사고 당시 안전벨트를 매지 않은 운전자였다. 체온은 99.2°F(37.3°C), 혈압은 90/65 mmHg, 맥박은 152/min, 호흡수는 16/min, 실내 공기 상태에서 산소 포화도는 100%이다. 신체 검진상 환자는 눈을 자발적으로 뜨고 주위를 둘러보고 있다. 질문에 대해 부적절한 대답을 하지만 알아들을 수 있는 단어를 사용한다. 통증 자극에 대해 회피 반응을 보이나 목적 있는 움직임은 없다. 이 환자의 글래스고 혼수 척도(Glasgow Coma Scale) 점수는 얼마인가?

## 선택지

A. 7
B. 11
C. 13
D. 15

## 해설

자발적 눈뜨기 E4, 알아들을 수 있는 부적절한 단어 V3, 통증에 대한 회피/정상 굴곡 M4로 총 GCS는 11점(B)이다. V2는 알아들을 수 없는 소리, M5는 자극 위치를 향한 목적 있는 국소화 반응이므로 이 사례와 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 총점11 B는 맞지만 E4/V2/M5로 더한 하위 항목 오류를 E4/V3/M4로 고치고 운전자를 조수석 탑승자로 바꾼 오역을 복원한다.
- 공식/학회 근거: https://www.glasgowcomascale.org/downloads/GCS-Assessment-Aid.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000145
