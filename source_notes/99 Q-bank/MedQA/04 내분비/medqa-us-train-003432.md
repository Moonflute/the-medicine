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
question_type: diagnosis
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

44세 여성이 4개월 전부터 생긴 무월경으로 내원했다. 그전까지 월경주기는 정상이었다. 최근 유방에서 소량의 젖이 나오고 양쪽 측면 시야가 보이지 않는 것을 느꼈다. 진찰에서 양측 귀쪽 반맹이 확인되었다. 다음 중 진단을 확인할 가능성이 가장 높은 검사는?

## 선택지

A. 뇌 MRI
B. 혈청 에스트로겐과 프로게스테론 농도
C. 유방촬영술
D. 혈청 TSH와 유리 T4

## 해설

무월경·유즙분비·양귀쪽반맹은 PRL 과다와 시신경교차를 압박하는 뇌하수체/안장부 병변을 시사한다. 선택지 중 MRI A가 종괴를 확인하는 데 적절하다. 혈청 PRL, 임신·갑상샘/약물 및 다른 뇌하수체 기능을 함께 평가해야 하며 MRI만으로 prolactinoma와 stalk effect 등 모든 원인을 구분하지는 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MRI A는 구조적 sellar 병변 확인에 적절하나 prolactinoma 확정에는 PRL 등 기능검사가 필요.
- https://www.nature.com/articles/s41574-023-00886-5

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003432
