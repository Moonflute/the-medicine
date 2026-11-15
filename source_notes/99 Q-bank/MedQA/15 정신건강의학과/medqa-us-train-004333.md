---
type: qbank
schema_version: 1
id: medqa-us-train-004333
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50d607437407e64ac05f0ea7d4b8a2b4f412c5041da794e6fad4e61dc8264bf4
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 I형 장애"
  - "조증"
  - "리튬 유지치료"
  - "Bipolar I disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

반복 조증이 있는 양극성 I형 장애 환자가 리튬 치료로 호전됐다. 부작용이 없고 혈중농도와 신기능은 적정하다. 퇴원 뒤 가장 적절한 계획은?

## 선택지

A. 증상이 없어졌으므로 퇴원할 때 리튬을 끊는다
B. 조증 조짐이 있을 때에만 간헐적으로 리튬을 먹는다
C. 유지 용량을 쓰되 혈중농도나 신기능은 더 검사하지 않는다
D. 리튬 유지치료를 이어 가면서 혈중농도, 신장·갑상샘 기능과 부작용을 정기 확인한다

## 해설

반복 조증 뒤에는 재발을 줄이기 위한 유지치료가 필요하다. 리튬은 효과와 선호를 정기적으로 검토하고, 혈중농도와 신장·갑상샘 기능 등을 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004333
- https://pubmed.ncbi.nlm.nih.gov/42947601/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 반복 조증의 장기 리튬 유지 원정답 유지. 양극성 I형이면 모든 환자가 예외 없이 평생 같은 약이라는 해설 단정 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations
