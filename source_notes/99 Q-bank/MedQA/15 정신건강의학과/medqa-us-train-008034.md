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
answer: B
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

14세 여아가 행동 문제로 소아과에 내원했다. 학교생활에 어려움이 있고 교실에 들어갈 때마다 자리에 앉기 전에 모든 벽을 만지고 싶은 충동을 느낀다. 이유를 묻자 “잘 모르겠어요. 각 벽을 만질 때까지 그 생각을 멈출 수 없어요”라고 한다. 부모는 집에서도 가끔 이런 행동을 보았지만 걱정하지 않았다. 그 외에는 건강하고 친구가 많으며 균형 잡힌 식사를 하고 흡연과 성생활은 하지 않는다. 활력징후는 정상이고 신체 및 신경학적 검사에서 이상은 없다. 진료실에서는 행동 이상이 관찰되지 않았다. 가장 적절한 초기 처치는?

## 선택지

A. 클로미프라민
B. 인지행동치료
C. 로라제팜
D. 리스페리돈

## 해설

억제하기 어려운 반복적 생각과 벽을 만지는 의례, 학교 기능장애는 강박장애를 시사한다. 제시된 선택지 중 노출 및 반응방지를 포함한 CBT가 적절한 초기 접근이며 가족 참여도 고려한다. 실제 약물 병합 여부는 연령·중증도·반응에 따라 판단하므로 모든 강박장애에서 약물이 언제나 단순 2차라고 일반화하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008034

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 청소년 강박 증상에 CBT 원정답 유지. 약물은 모든 상황에서 단순 2차라는 일반화를 사례별 중증도와 ERP를 포함한 CBT로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations
