---
type: qbank
schema_version: 1
id: medqa-us-train-009995
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6004de47dcbf509de495d7cab71f17366c35441127c41df9ffd449b70e4a389
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "강박장애"
  - "침투적 사고"
  - "클로미프라민"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 환자가 가까운 사람을 해칠까 두렵다는 생각이 원치 않게 떠올라 몹시 괴롭다고 한다. 생각을 자기 마음에서 나온 것으로 인식하고 행동할 의도는 없으며, 반복해서 안심을 구하면 잠시 불안이 줄어든다. 안전 평가를 병행할 때, 이 경험을 가장 잘 설명하는 것은?

## 선택지

A. 위해 내용의 강박사고
B. 타인의 목소리로 들리는 명령 환청
C. 반증에도 흔들리지 않는 피해망상
D. 실제 위해를 실행하려는 구체적 의도

## 해설

생각을 원치 않고 불안을 줄이려 확인을 반복하는 양상은 위해 내용의 강박사고에 맞는다. 생각의 내용만으로 위험을 단정하지 않으며 의도·계획과 현실 판단은 따로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009995

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로미프라민을 2세대 항정신병약으로 오분류한 중대한 오류 교정. 원문 throughout day를 하루 동안 새발병으로 오해하지 않도록 번역 보완.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations
