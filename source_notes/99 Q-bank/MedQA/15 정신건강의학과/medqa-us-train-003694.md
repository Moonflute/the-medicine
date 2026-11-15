---
type: qbank
schema_version: 1
id: medqa-us-train-003694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6edfd1be8a3ea9d32769c1aea94d6a6bc19df9c31309b2fdc66d3c577a7b036
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "acute mania"
  - "bipolar disorder"
  - "renal impairment"
  - "valproate and quetiapine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

리튬을 복용 중인 양극성장애 환자가 새로운 조증으로 입원했다. 급성 신손상으로 크레아티닌이 평소보다 두 배 넘게 올랐다. 가장 먼저 리튬에 대해 취할 조치는?

## 선택지

A. 조증이므로 신기능과 관계없이 증량한다
B. 같은 용량으로 계속하고 한 달 뒤 농도를 측정한다
C. 리튬을 보류하고 농도와 신기능을 확인하며 별도의 급성 조증 치료를 계획한다
D. 티아지드 이뇨제를 추가해 리튬 배설을 촉진한다

## 해설

급성 신손상에서는 리튬 배설이 줄어 치료 중인 용량도 축적될 수 있다. 안전을 위해 투약을 보류하고 농도·전해질·신기능을 확인한다. 급성 조증의 치료를 미룬다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003694
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/25583292/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 현재 리튬·인슐린과 반복 입원 병력을 복원. 신기능 저하에서 대안 병합 선택 유지, 쿠에티아핀 무조건 안전 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec
