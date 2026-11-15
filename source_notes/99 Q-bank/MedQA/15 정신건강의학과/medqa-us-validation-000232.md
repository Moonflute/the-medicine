---
type: qbank
schema_version: 1
id: medqa-us-validation-000232
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6f633bcee92a5592517e5744455a3a62c2709035cdc5ef0b4e4c4fc9d99d5b8d
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "범불안장애"
  - "과도한 걱정"
  - "불면"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uylCDrtojslYgg7J6l7JWgIChHZW5lcmFsaXplZCBBbnhpZXR5IERpc29yZGVyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 환자가 1년째 가족 건강, 돈, 업무처럼 여러 문제를 거의 매일 과도하게 걱정한다. 걱정을 멈추기 어렵고 근육 긴장과 불면, 집중력 저하로 일에 지장이 있다. 가장 가능성 높은 진단은?

## 선택지

A. 공황장애
B. 범불안장애
C. 사회불안장애
D. 질병불안장애

## 해설


범불안장애는 여러 영역에 대한 통제하기 어려운 걱정이 적어도 6개월 지속되고 일상 기능에 지장을 주는 양상이다. 짧은 발작이나 특정 상황에만 묶인 불안과 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000232
- https://www.nice.org.uk/guidance/cg113/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·모든 선지·답·해설 대조. 1년 여러 영역의 통제 어려운 걱정과 피로·불면·집중력 저하의 범불안장애 답 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
