---
type: qbank
schema_version: 1
id: medqa-us-train-003432
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6cf17f64a34b5cf3e64a2842f39bf8eaf4dd8af5a7db75ded254e74220c9493
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pituitary macroadenoma"
  - "prolactinoma"
  - "hyperprolactinemia"
  - "bitemporal hemianopia"
related_disease_slugs:
  - MDQg64K067aE67mEL-2UhOuhnOudve2LtCDrtoTruYQg7KKF7JaRIChQcm9sYWN0aW5vbWEpLm1k
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
question_type: investigation
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 여성이 무월경과 양측 유즙 분비에 이어 양옆 시야가 점점 좁아졌다고 한다. 진찰에서 양귀쪽 반맹이 확인됐고 임신 검사는 음성이다. 프로락틴 등 호르몬 채혈과 함께 우선 시행할 영상검사는?

## 선택지

A. 안장부 조영 MRI
B. 유방촬영술
C. 골반 초음파
D. 경동맥 초음파

## 해설

양귀쪽 반맹은 시신경교차 압박을 시사한다. 안장부 조영 MRI로 병변을 평가하며 영상만으로 프로락틴종과 줄기 압박을 구별할 수 없어 호르몬 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MRI A는 구조적 sellar 병변 확인에 적절하나 prolactinoma 확정에는 PRL 등 기능검사가 필요.
- https://www.nature.com/articles/s41574-023-00886-5

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003432
- https://www.nature.com/articles/s41574-025-01134-8
