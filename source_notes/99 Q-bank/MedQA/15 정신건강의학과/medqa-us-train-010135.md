---
type: qbank
schema_version: 1
id: medqa-us-train-010135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b8f2db2d8604c3eaa7171403839d9e8a8368f10bd6c5ef178923a94352cc4c3
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "불면장애"
  - "수면 위생"
  - "자극 조절"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOuptCDsnqXslaAgKEluc29tbmlhIERpc29yZGVyKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 4개월 동안 잠들기 어려워 내원했다. 자세히 물어보니 밤 10시 30분에 잠자리에 들기 전 오후 8시 30분에 마지막 차를 마시고, 잠들 때까지 한 시간 동안 간헐적으로 휴대전화 시계를 확인한다고 한다. 아침에 피곤하고 직장에서 실수를 한다. 남편은 심한 코골이나 수면 중 이상 호흡을 본 적이 없다. 과거력은 특이사항이 없고 7년 동안 매일 담배 5~7개비를 피우며 과도한 음주는 부인한다. 신체검사는 정상이다. 다음 중 이 상태의 가장 적절한 초기 처치는?

## 선택지

A. 적절한 수면 위생
B. 모다피닐
C. 지속적 양압기도
D. 로피니롤

## 해설

늦은 카페인 섭취와 취침 중 반복적인 휴대전화 시계 확인은 조정할 수 있는 요인이다. 제시된 선택지 중 적절한 수면 습관을 논의하는 것이 타당하며, 기면증·수면무호흡·하지불안증후군 치료 약물을 바로 선택할 근거는 없다. 다만 4개월의 만성 불면에서는 수면위생 교육만으로 충분하다고 일반화하지 않고 CBT-I와 다른 원인 평가를 함께 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010135

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 불면의 가장 흔한 원인이 수면위생 불량이라는 단정 제거. 선택지 내 습관 조정과 만성 불면의 CBT-I 우선 원칙 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://doi.org/10.7326/M15-2175
