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

24세 남성이 자동차 사고 후 응급실에 내원하였다. 그는 정면충돌 사고 당시 안전벨트를 매지 않은 조수석 탑승자였다. 체온은 99.2°F(37.3°C), 혈압은 90/65 mmHg, 맥박은 152/min, 호흡수는 16/min, 실내 공기 상태에서 산소 포화도는 100%이다. 신체 검진상 환자는 눈을 자발적으로 뜨고 주위를 둘러보고 있다. 질문에 대해 부적절한 대답을 하지만 알아들을 수 있는 단어를 사용한다. 통증 자극에 대해 회피 반응을 보이나 목적 있는 움직임은 없다. 이 환자의 글래스고 혼수 척도(Glasgow Coma Scale) 점수는 얼마인가?

## 선택지

A. 7
B. 11
C. 13
D. 15

## 해설


눈을 뜨고 말은 할 수 있으나 비목적적 움직임만 보이고, 언어 반응은 부적절하다. 이는 눈(4점)+언어(2점)+운동(5점)으로 GCS 11점에 해당한다. 따라서 정답은 11점이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000145
