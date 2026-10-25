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
question_type: ethics
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 의사가 선배 동료가 2주 동안 계속 지각하는 것을 알아차렸다. 그 동료는 최근 아내를 암으로 잃었고 어린 네 자녀를 돌보고 있다. 아내가 사망한 뒤 과장은 장기 휴가를 제안했지만 그는 거절했다. 전공의들은 최근 외래 예약 누락, 수술 중 실수 2회, 세 차례 다른 날에 술 냄새가 나는 것 등 변화를 관찰하고 논의했다. 이 동료에 대해 의사가 취할 가장 적절한 조치는 무엇인가?

## 선택지

A. 향후 비행동을 과장에게 보고하도록 전공의들에게 조언
B. 주 면허위원회에 알림
C. 동료와 개인적으로 대면
D. 지역 의사 건강 프로그램에 알림

## 해설

술 냄새와 수술 중 오류 등으로 진료 수행능력 저하가 의심되므로 제시된 선택지 중 지역 의사건강프로그램에 연계하여 평가·치료를 받도록 하는 것이 적절하다. 단순히 다음 문제를 기다리거나 개인 대면만으로 끝내지 않는다. 다만 프로그램 연락을 이유로 즉각적인 환자 안전 조치나 필요 시 진료 중단·기관 보고를 늦추어서는 안 된다. 비밀보장·보고 의무는 관할 규정과 위험 상황에 따라 달라진다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001783

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 의사건강프로그램 선택 유지. 프로그램 연락이 즉각 환자 안전 확보·업무 제한보다 항상 우선한다는 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://code-medical-ethics.ama-assn.org/sites/default/files/2023-02/9.3.2%20Physician%20responsibilities%20to%20impaired%20colleagues%20--%20background%20reports.pdf
