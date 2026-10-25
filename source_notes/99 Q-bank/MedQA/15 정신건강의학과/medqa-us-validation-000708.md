---
type: qbank
schema_version: 1
id: medqa-us-validation-000708
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:69a7d9a7bb938fa4eb7320ff0bb107dd730760b55ace4002eb6968d8842fa8fb
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "정상 애도"
  - "사별 후 환각"
  - "병적 애도와의 감별"
question_type: diagnosis
related_disease_slugs: []
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

52세 남성이 5개월 전 교통사고로 딸을 잃은 뒤 대부분의 시간을 딸을 생각하고 수면 중 딸의 목소리를 듣거나 꿈을 꾸고 낮에는 가끔 짧게 딸을 본 듯한 경험이 있지만 일상생활은 유지하고 자살을 생각하지 않는다. 이 증상을 가장 잘 설명하는 것은?

## 선택지

A. 단기 정신병적 장애
B. 주요우울장애
C. 정상 애도 반응
D. 외상후스트레스장애

## 해설

사별 후 고인에 대한 꿈·수면 중 음성 경험이나 짧게 존재를 느끼는 경험은 애도 과정에서 나타날 수 있어 제시된 선택지 중 정상 애도 반응이 가장 가깝다. 이것만으로 정신병을 확정하지 않는다. 다만 일상기능이 일부 유지되고 자살사고를 부인한다는 이유만으로 모든 우울·외상 관련 질환이 배제되는 것은 아니며, 심한 기능저하·지속적 현실검증 손상·안전 위험 등을 추적 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000708

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 음성 경험이 수면 중·꿈이며 주간에는 짧게 본 듯한 경험이라는 원문 맥락 복원. 기능·자살사고만으로 병리 완전 배제는 하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
