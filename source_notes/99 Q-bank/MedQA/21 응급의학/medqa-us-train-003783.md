---
type: qbank
schema_version: 1
id: medqa-us-train-003783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c326e416402ff304ba4ed52733b6d71d55f09321dfa839e537ef3b387bc5136
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "severe hypoglycemia"
  - "hypoglycemic seizure"
  - "insulin therapy"
  - "intravenous dextrose"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제2형 당뇨병으로 인슐린과 메트포르민을 복용하는 47세 남성이 식이조절과 운동 후 의식저하와 경련을 보였다. 손가락 혈당은 35 mg/dL였다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 정맥 포도당 투여
B. 정맥 페녹시벤자민 투여
C. 정맥 로라제팜 투여
D. 뇌파검사

## 해설

혈당 35mg/dL와 의식소실·발작은 중증 저혈당이다. 기도·환기를 지지하며 정맥 포도당(A)을 즉시 투여하고 혈당을 반복 확인한다. 포도당 농도와 용량은 안전한 기관 프로토콜에 따른다. 원인이 교정되지 않은 채 진정제만 투여하거나 EEG를 먼저 시행해서는 안 된다. 이후 인슐린·운동·섭취를 검토하여 재발을 예방한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정맥 포도당 A 확인. 반드시 50%만 가장 빠른 치료라는 불필요한 농도 단정 제거.
- 공식/학회 근거: https://aci.health.nsw.gov.au/__data/assets/pdf_file/0007/196639/ACI-NSW-Adult-subcutaneous-insulin-prescribing-chart-user-guide.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003783
