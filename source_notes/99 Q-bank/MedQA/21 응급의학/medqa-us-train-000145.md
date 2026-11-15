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
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

두부 외상 환자가 자발적으로 눈을 뜬다. 질문에는 문장이 아닌 상황과 무관한 단어만 말한다. 통증 자극에 팔을 빼지만 자극 위치로 손을 가져가지는 않는다. 글래스고 혼수척도(GCS) 점수는?

## 선택지

A. 8점
B. 9점
C. 11점
D. 13점

## 해설

자발 눈뜨기 E4, 부적절한 단어 V3, 통증 회피 M4로 총 11점이다. 자극 위치로 손을 가져가는 국소화 반응은 M5다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 총점11 B는 맞지만 E4/V2/M5로 더한 하위 항목 오류를 E4/V3/M4로 고치고 운전자를 조수석 탑승자로 바꾼 오역을 복원한다.
- 공식/학회 근거: https://www.glasgowcomascale.org/downloads/GCS-Assessment-Aid.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000145
