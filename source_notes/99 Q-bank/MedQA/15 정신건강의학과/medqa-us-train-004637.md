---
type: qbank
schema_version: 1
id: medqa-us-train-004637
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6810d61ac75537f5838f41a89ee7a978cd69e5a79447ee22071a59738262c615
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "강박장애"
  - "오염 강박"
  - "노출 및 반응방지"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
difficulty: standard
answer: C
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

오염 강박이 있는 20세 환자가 외출 뒤 매번 한 시간씩 씻는다. 약물치료와 함께 강박을 직접 다루는 심리치료를 원한다. 가장 적절한 방법은?

## 선택지

A. 불안할 때 즉시 반복 세척하도록 돕는 행동 계획
B. 지지적 면담만 하고 강박 행동은 치료에서 다루지 않는다
C. 노출 및 반응방지를 포함한 인지행동치료
D. 이완 훈련만으로 불안이 없어질 때까지 노출을 피한다

## 해설


노출 및 반응방지는 환자와 합의한 단계에 따라 두려운 상황에 노출되면서 강박 행동을 하지 않는 연습이다. 현실의 위생을 무시하라는 뜻이 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004637
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·모든 선지·답·해설 대조. 오염 강박사고·시간 소모적 세척과 기능장애에 SSRI와 CBT 조합 선택 타당.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
