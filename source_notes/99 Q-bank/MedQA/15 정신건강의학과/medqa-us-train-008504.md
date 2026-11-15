---
type: qbank
schema_version: 1
id: medqa-us-train-008504
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:53ebacaad8ebfe7b2b92648ab74bfbd6c714f3b41da8bbf9ba7fbed76b6ec016
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "depressive pseudodementia"
  - "bereavement"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-ygleyDgSDslaDrj4Qg67CY7J2RIChCZXJlYXZlbWVudCkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 여성이 2개월간 지속된 우울감·흥미 저하와 함께 기억이 나빠졌다고 한다. 가족은 그전까지 뚜렷한 인지 저하가 없었다고 한다. 선별검사에서 일부 저하가 있고, 일상생활은 독립적으로 한다. 적절한 평가 방침은?

## 선택지

A. 우울증과 별개로 알츠하이머병으로 확정한다
B. 독립적으로 생활하므로 추가 평가 없이 종결한다
C. 우울증만으로 설명하고 인지평가를 하지 않는다
D. 인지와 기능의 기초 상태 및 다른 원인을 확인하고 우울증 치료 후 추적한다

## 해설

우울증은 인지기능에 영향을 주고 신경인지장애와 함께 있을 수도 있다. 초기 상태와 치료 뒤 변화를 비교해 인지 저하가 남거나 진행하는지 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008504
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12173843/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 우울증 답 유지. 67세/정상 신경검사만으로 치매를 배제하거나 가성치매를 확정한 해설 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
