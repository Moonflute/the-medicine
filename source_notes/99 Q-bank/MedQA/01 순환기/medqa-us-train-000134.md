---
type: qbank
schema_version: 1
id: medqa-us-train-000134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6062a8c695ef2c26fcbb0fe0763aeec649d86eca6e514fcba2f8591bae5673f5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Situational syncope"
  - "situational syncope"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
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

53세 남성이 새벽에 일어나 소변을 본 직후 어지럽고 식은땀이 나더니 수 초간 쓰러졌다. 바로 의식을 회복했고, 기립혈압 및 심전도는 정상이다. 운동 중 실신, 심계항진이나 급사 가족력은 없다. 가장 가능성 높은 원인은?

## 선택지

A. 배뇨 유발 반사성 실신
B. 심실빈맥에 의한 실신
C. 저혈당에 의한 의식저하
D. 전신 강직간대발작

## 해설

배뇨 직후라는 뚜렷한 유발 상황, 자율신경 전구증상과 빠른 완전 회복은 배뇨 유발 상황성 실신을 지지한다. 상황성 실신은 반사성 실신의 한 종류다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 다른 반사성 실신은 유발인자가 없다는 오설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000134
- https://k-hrs.org/expert/guide/faint
