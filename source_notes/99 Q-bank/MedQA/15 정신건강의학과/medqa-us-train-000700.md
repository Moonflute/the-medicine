---
type: qbank
schema_version: 1
id: medqa-us-train-000700
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1a3fcbec4e415642e970ec820202a5fbfbde7c00a0f07deee61dc9c131bbd42
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "serotonin syndrome"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
---

# MedQA US 임상문제

## 문제

세로토닌 작용 약물을 함께 복용하던 환자가 간대성 경련, 심한 근육 경직과 40.4°C의 고체온을 보인다. 의심 약물을 중단했다. 다음 처치는?

## 선택지

A. 아세트아미노펜 투여 후 해열 반응을 기다린다
B. 경구 시프로헵타딘 단독으로 치료한다
C. 냉각 없이 정맥 수액의 효과를 기다린다
D. 즉시 능동 냉각·진정하고 기도 관리를 포함한 중환자 치료를 시행한다

## 해설


중증 세로토닌 독성의 고체온은 과도한 근육 활동 때문이다. 신속한 냉각·진정이 필요하고, 호흡이 위협받거나 경직이 심하면 조기에 기도 관리와 근이완을 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000700
- https://pubmed.ncbi.nlm.nih.gov/38926083/
