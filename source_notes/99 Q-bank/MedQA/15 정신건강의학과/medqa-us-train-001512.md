---
type: qbank
schema_version: 1
id: medqa-us-train-001512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee9948900276ab2d3a7a5d43b113803c00747bf86cf437d0fd6339c816bb9ca0
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "SSRI perioperative management"
  - "suicidal ideation"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 환자가 첫 주요우울삽화에서 항우울제에 반응해 지난달 관해에 들어갔다. 부작용은 없고 이제 약을 바로 끊어도 되는지 묻는다. 적절한 설명은?

## 선택지

A. 관해가 확인되면 당일 중단한다
B. 약효가 떨어지기 전에 다른 계열로 바꾼다
C. 효과가 있었던 용량을 관해 후 대개 최소 6개월 유지하며 재평가한다
D. 재발 위험을 보지 않고 저용량 약으로 즉시 바꾼다

## 해설

증상 소실 직후 중단하면 재발할 수 있다. 관해 후에도 약을 일정 기간 유지하고, 이전 삽화와 재발 위험 등을 평가해 감량 여부를 정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001512
- https://pubmed.ncbi.nlm.nih.gov/41139602/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 수술 당일 SSRI 지속 정답 유지. 무조건 안전·수술 후 4개월 자동 중단 설명 교정하고 관해 후 최소 6개월 유지로 선지의 공통 기간만 현행화.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://periop-handbook.ukclinicalpharmacy.org/drug/escitalopram/
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
