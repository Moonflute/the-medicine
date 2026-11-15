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
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
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

5개월 전 자녀를 잃은 환자가 가끔 고인의 목소리를 들은 것 같은 짧은 경험을 한다. 그 경험이 실제로 자녀가 돌아왔다는 뜻은 아니라고 생각한다. 슬픔은 오르내리지만 일을 하고 주변 사람과도 지낸다. 가장 적절한 해석은?

## 선택지

A. 목소리를 한 번 들으면 정신병적 장애로 확진한다
B. 사별 후 슬픔이 5개월이면 지속성 애도장애로 확진한다
C. 우울장애가 확인되지 않아도 항정신병약이 반드시 필요하다
D. 그런 경험만으로 정신병을 뜻하지 않으며, 기능과 안전을 함께 확인하며 애도를 돕는다

## 해설

사별 뒤 고인의 존재를 느끼는 짧은 경험이 나타날 수 있다. 경험을 어떻게 이해하는지, 슬픔의 경과와 일상 기능, 우울이나 안전 문제를 함께 살핀다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000708
- https://www.psychiatry.org/patients-families/prolonged-grief-disorder

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 음성 경험이 수면 중·꿈이며 주간에는 짧게 본 듯한 경험이라는 원문 맥락 복원. 기능·자살사고만으로 병리 완전 배제는 하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
