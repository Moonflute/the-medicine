---
type: qbank
schema_version: 1
id: medqa-us-train-003595
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f81eb1336978e829edf5332c13804fffa14ab894b3821485cbbeb626783ba819
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "primary hyperparathyroidism"
  - "parathyroid adenoma"
  - "hypercalcemia"
  - "sestamibi localization"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성에서 반복 고칼슘혈증과 높은 PTH로 원발성 부갑상선기능항진증이 확인됐다. 신장결석이 있어 수술을 결정했다. 수술 전 병변 위치를 파악하려 할 때 적절한 검사는?

## 선택지

A. 경부 초음파와 99mTc-세스타미비 스캔
B. 골밀도검사와 척추 X선
C. 24시간 소변 칼슘과 혈청 PTH 재검
D. 경부 종괴 세침흡인만 시행

## 해설

원발성 부갑상선기능항진증은 생화학적으로 진단한다. 수술 계획을 세울 때 초음파와 세스타미비 등을 통해 위치를 평가한다. 위치가 확인되지 않는다고 수술 적응증이 사라지는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 생화학적으로 확인된 PHPT의 A는 수술 전 위치결정이지 진단 확정검사/양성 sestamibi 뒤 필수 순차 US라는 뜻 아님.
- https://asbmr.onlinelibrary.wiley.com/doi/full/10.1002/jbmr.4677

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003595
- https://doi.org/10.1002/jbmr.4677
