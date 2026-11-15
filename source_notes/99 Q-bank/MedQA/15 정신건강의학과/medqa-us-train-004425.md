---
type: qbank
schema_version: 1
id: medqa-us-train-004425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9039ac5dab8b8a3e7e73eebc263b4de68eb7adfdd8732b19966e933634de9ef7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 정신병"
  - "환청"
  - "피해망상"
  - "Schizophrenia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 환자가 이틀 전부터 목소리가 들리고 누군가 자신을 따라다닌다고 믿는다. 정신병적 증상은 처음이고 소변 약물 선별검사는 음성이다. 가장 적절한 초기 계획은?

## 선택지

A. 음성 선별검사로 물질 원인을 배제하고 조현병으로 확진한다
B. 증상이 한 달이 될 때까지 평가하거나 치료하지 않는다
C. 검사가 음성이므로 가족에게 관찰만 맡기고 경과를 본다
D. 안전·정신상태와 의학적·물질 관련 원인을 평가하고 초기 정신병 전문 진료를 연결한다

## 해설

첫 정신병적 증상에서는 안전과 기능, 신체·신경학적 상태, 약물·물질 노출과 기분 증상을 함께 평가한다. 증상 기간이나 선별검사 하나로 진단을 확정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004425
- https://www.nice.org.uk/guidance/cg178/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/32702217/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리스페리돈 1세대 오분류, 클로르프로마진은 장기만 효과라는 오류, 48시간 증상으로 조현병 확정 및 피해망상 오기 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
