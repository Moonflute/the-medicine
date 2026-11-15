---
type: qbank
schema_version: 1
id: medqa-us-train-007533
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:81dff02c0c6a6a1fdd15134f41e4ad37a813314fccdc909981cceed5103828d5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "외상후스트레스장애"
  - "전투 외상"
  - "인지행동치료"
  - "악몽"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yZuOyDgSDtm4Qg7Iqk7Yq466CI7IqkIOyepeyVoCAoUFRTRCkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVheuqvSAoTmlnaHRtYXJlKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

외상후스트레스장애 환자가 사고 기억과 악몽 때문에 운전과 외출을 피한다. 현재 급성 안전 문제는 없고 증상의 핵심을 다룰 치료에 참여할 수 있다. 우선 제안할 심리치료는?

## 선택지

A. 외상에 초점을 맞춘 인지행동치료
B. 일상 스트레스 관리만 하는 교육
C. 사고를 떠올리는 상황을 계속 피하는 행동 계획
D. 금주에만 초점을 맞춘 동기강화 면담

## 해설

외상 관련 의미와 기억, 회피를 다루는 외상 중심 치료는 PTSD의 일차 선택이다. 환자와 상의해 외상 중심 CBT나 안구운동 둔감화 및 재처리 등을 선택한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007533
- https://www.nice.org.uk/guidance/ng116/chapter/recommendations
- https://www.ptsd.va.gov/professional/treat/txessentials/cpg_ptsd_management.asp

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 자살사고 부인으로 위험이 없다는 단정 삭제. 초기 CBT를 외상 중심 치료로 명확히 하고 벤라팍신의 유효성도 인정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp
