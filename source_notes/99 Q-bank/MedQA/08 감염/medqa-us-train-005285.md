---
type: qbank
schema_version: 1
id: medqa-us-train-005285
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41b8ef3a258894869b81d7a2cc0cd132d457d674f20122f7ff54b8278cb1cdc0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "결핵"
  - "에탐부톨"
  - "시신경염"
related_disease_slugs:
  - MTgg7JWI6rO8L-yLnOyLoOqyveyXvCAob3B0aWMgbmV1cml0aXMpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rs7XsiJggKOqysO2VtSkgKEFzY2l0ZXMgKFR1YmVyY3Vsb3NpcykpLm1k
question_type: adverse_effect
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
---

# MedQA US 임상문제

## 문제

폐결핵으로 에탐부톨을 포함한 치료를 시작한 지 2개월 된 환자가 글자 중앙이 흐리고 빨강과 초록을 구별하기 어렵다고 한다. 가장 적절한 조치는?

## 선택지

A. 에탐부톨을 유지하고 피리독신만 추가한다
B. 에탐부톨을 유지하고 다음 달에 색각을 다시 확인한다
C. 에탐부톨을 유지하고 이소니아지드만 중단한다
D. 에탐부톨을 중단하고 신속히 안과 평가를 받게 한다

## 해설


시력 및 색각 변화는 에탐부톨 시신경병증을 의심할 소견이다. 회복 가능성을 높이려면 조기에 중단하고 신속히 평가하며, 나머지 결핵치료 조정은 진료팀과 상의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005285 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Ethambutol의 arabinan 합성 억제와 시신경 독성 D를 원문·공식 약물 안전성과 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005285
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMjI4MTc4JTJGYXJ0Y2xWaWV3LmRvJTNG
