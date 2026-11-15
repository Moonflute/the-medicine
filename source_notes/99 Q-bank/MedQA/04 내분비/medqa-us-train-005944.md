---
type: qbank
schema_version: 1
id: medqa-us-train-005944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4dc14f8f039f79b145bc5fd59825ac18f7a621316495bd932b6d8d8f0d06d404
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "수술 후 저칼슘혈증"
  - "테타니"
  - "칼슘 글루콘산"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
question_type: management
difficulty: simple
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

갑상선 전절제술 13시간 뒤 57세 여성이 입 주위 저림과 손발 경련을 보인다. 보정 칼슘 6.7 mg/dL이고 심전도에서 QT가 늘어났다. 적절한 초기 치료는?

## 선택지

A. 경구 칼슘과 칼시트리올만 투여
B. 칼시트리올만 정맥 투여
C. 칼슘 투여를 미루고 마그네슘 결과만 기다림
D. 심전도 감시하 정맥 글루콘산칼슘

## 해설

테타니와 QT 연장을 동반한 중증 저칼슘혈증은 감시하에 정맥 칼슘으로 치료한다. 마그네슘과 PTH 등을 확인하고 이상이 있으면 함께 교정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술후 증상성 저Ca D의 IV투여를 ECG·기도평가와 함께 시행하도록 보완.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005944
