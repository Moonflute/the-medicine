---
type: qbank
schema_version: 1
id: medqa-us-train-008312
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e46fb68b74bb0b0c0fa3f08f21664dc2c7af5a0a4aa100683ed4a5083e735e0
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "alcohol use disorder"
  - "stages of change"
  - "preparation stage"
question_type: other
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남자가 술집 싸움에서 머리를 다친 후 응급실에 왔다. 다음 날 음주 습관에 대한 상담을 원해 정신과 팀이 호출되었다. 운전면허를 빼앗기고 음주 문제로 아내가 아이들을 데리고 부모 집으로 간 뒤 술집에서 화를 냈다고 한다. 평일 밤 맥주 4~6병, 주말에는 더 많이 마신다. 지금이라도 도움을 받을 수 있는지 묻는다. 중독 극복 단계는?

## 선택지

A. 숙고 전 단계
B. 숙고 단계
C. 준비 단계
D. 행동 단계

## 해설


환자는 음주 문제를 인식하고 행동 변화를 준비하려는 단계에 해당하므로, 준비 단계가 가장 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008312

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·행동변화 단계 선지·답·해설 대조. 음주 문제를 인식하고 직접 치료 도움을 요청하는 준비 단계 선택은 타당하며 이미 절주 행동을 시작했다고 가정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
