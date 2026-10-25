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

57세 여성이 독성 다결절성 갑상선종으로 수술을 받았다. 수술 13시간 후 입술 주위가 저리고 호흡곤란을 호소한다. 혈압을 측정하는 동안 사진처럼 손이 변했다. 불안해 보이고 양측 흉부에서 천명이 들린다. 다음 중 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 경구 칼슘과 칼시트리올
B. 재조합 인간 부갑상선호르몬(PTH)
C. 경구 마그네슘
D. 정맥 내 칼슘 글루콘산

## 해설

갑상선수술후 입주위저림·호흡증상·혈압커프 유발 손경련은 증상성 저Ca를 의심해 IV calcium gluconate D가 적절하다. 기도위험을 즉시 평가하고 ECG감시하에 조심스럽게 투여하며 Ca/Mg/PTH 등 원인을 확인한다. 사진 자체는 누락되어 실제 손모양을 판독한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술후 증상성 저Ca D의 IV투여를 ECG·기도평가와 함께 시행하도록 보완.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005944
