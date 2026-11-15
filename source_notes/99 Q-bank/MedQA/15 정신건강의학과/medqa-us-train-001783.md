---
type: qbank
schema_version: 1
id: medqa-us-train-001783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4294b864b1b9b12824c55ac91489bda5604d17d07b41d8ebaa439bba07c7ff5d
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "impaired physician"
  - "physician health program"
  - "professional misconduct"
question_type: management
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

시술을 앞둔 동료 의사가 말이 어눌하고 몸을 제대로 가누지 못한다. 지금 환자에게 시술을 진행하려 한다. 가장 먼저 할 조치는?

## 선택지

A. 시술을 지켜본 뒤 이상이 있었는지 판단한다
B. 동료에게 나중에 건강검진을 권한다
C. 시술을 멈추고 책임자에게 즉시 알린 뒤 다른 의료진에 환자를 인계한다
D. 환자의 상태가 악화될 때만 안전사고 절차를 밟는다

## 해설

의료진이 안전하게 진료하기 어려운 상태라면 원인을 단정할 필요 없이 먼저 환자를 보호한다. 즉시 시술을 중단하고 책임자와 안전한 인계를 마련한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001783
- https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice/colleagues-culture-and-safety

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 의사건강프로그램 선택 유지. 프로그램 연락이 즉각 환자 안전 확보·업무 제한보다 항상 우선한다는 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://code-medical-ethics.ama-assn.org/sites/default/files/2023-02/9.3.2%20Physician%20responsibilities%20to%20impaired%20colleagues%20--%20background%20reports.pdf
