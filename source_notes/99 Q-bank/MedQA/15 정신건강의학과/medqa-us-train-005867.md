---
type: qbank
schema_version: 1
id: medqa-us-train-005867
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94e198178b40f3930f35164afe23620048210e7aa466724e011762330043d36b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황장애"
  - "반복적 공황발작"
  - "인지행동치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
difficulty: complex
answer: D
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

공황장애 환자가 공황발작 재발이 두려워 대중교통을 피한다. 안전에 영향이 큰 동반 질환은 없고 환자는 약 대신 심리치료를 원한다. 적절한 치료는?

## 선택지

A. 계속 대중교통을 피하도록 하는 상담
B. 증상 재발을 대비한 벤조디아제핀 장기 복용
C. 불안을 다루지 않는 수면 위생 교육만 시행
D. 공황 증상과 회피 상황에 대한 점진적 노출을 포함한 인지행동치료

## 해설

공황 중심 인지행동치료는 신체 감각을 위험으로 해석하는 생각과 회피를 다룬다. 약을 원하지 않을 때도 근거 기반 일차 치료가 될 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005867
- https://www.nice.org.uk/guidance/cg113/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 약물 부작용·불순응 선호에서 CBT 정답 유지. 원문에 없는 회피행동 제거 및 초기 트로포닌 단회 음성만으로 심장 원인 배제 아님을 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
