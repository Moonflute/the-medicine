---
type: qbank
schema_version: 1
id: medqa-us-test-000962
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ba1fa5aa92fea609f77247d31d1521fbb4da471ea42f9b85bc230a7e4ff7a8e7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 장애"
  - "리튬"
  - "임신 중 약물 조절"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: standard
answer: A
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

리튬으로 안정된 양극성 I형 장애 환자가 임신을 계획한다. 이전에 약을 갑자기 중단했을 때 심한 조증이 재발했다. 임신 전 상담으로 적절한 것은?

## 선택지

A. 재발 위험과 태아 위험을 함께 논의하고, 계속 복용한다면 임신·산후 혈중농도와 신기능을 추적한다
B. 임신이 확인되는 날까지 복용하다 혼자 즉시 끊는다
C. 태아에게 더 안전하다며 발프로산으로 일률적으로 바꾼다
D. 리튬을 유지하되 임신 중 혈중농도는 측정하지 않는다

## 해설

약 중단 때 중증 재발 병력이 있으면 임신 전 정신건강의학과와 산과에서 위험을 함께 평가한다. 유지하기로 했다면 임신과 산후에 달라지는 리튬 농도와 신기능을 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000962
- https://pubmed.ncbi.nlm.nih.gov/37486661/
- https://www.nejm.org/doi/full/10.1056/NEJMoa1612222

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리튬을 임신 내내 무조건 감량한다는 인상을 교정. 재발 위험과 치료 범위 혈중농도·임신 중 약동학 변화에 따른 개별 조절로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
