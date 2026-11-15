---
type: qbank
schema_version: 1
id: medqa-us-train-008034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f50240bb7bba40d3b3da88a377aec23d37f3a4f9d6395c3c2f805b5446fae3ed
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "obsessive-compulsive disorder"
  - "compulsions"
  - "cognitive behavioral therapy"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 환자가 강박장애로 노출 및 반응방지 치료를 받는다. 불안할 때마다 부모에게 문을 대신 확인해 달라고 하고 부모는 여러 차례 확인해 준다. 부모가 취할 행동은?

## 선택지

A. 증상이 줄 때까지 부모가 확인을 대신한다
B. 아이가 보는 앞에서 한 번만 확인해 안심시킨다
C. 치료팀과 상의하지 않고 모든 의례를 즉시 금지한다
D. 치료 계획에 맞춰 대신 확인하는 행동을 점차 줄이고 아이를 지지한다

## 해설

가족이 대신 확인하거나 반복해서 안심시키면 강박 의례가 유지될 수 있다. 치료팀과 계획을 세워 가족의 동참을 민감하게 줄이고 노출 연습을 지지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008034

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 청소년 강박 증상에 CBT 원정답 유지. 약물은 모든 상황에서 단순 2차라는 일반화를 사례별 중증도와 ERP를 포함한 CBT로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations
