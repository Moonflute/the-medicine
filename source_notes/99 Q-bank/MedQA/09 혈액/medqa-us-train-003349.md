---
type: qbank
schema_version: 1
id: medqa-us-train-003349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74504d60357d06d7291e8416fcf00b31ecdda5b0808466ddf4f6322ab5521f2c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "multiple myeloma"
  - "plasma cell proliferation"
  - "hypercalcemia"
  - "acute kidney injury"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

활동성 다발골수종 환자가 혼돈과 탈수로 왔다. 교정 칼슘은 14.7mg/dL이고 심부전으로 인한 울혈은 없다. 정맥 수액을 시작했다. 칼슘을 빠르게 낮추면서 지속 효과를 얻기 위한 추가 치료는?

## 선택지

A. 칼시토닌을 단기간 사용하고 신기능에 맞춰 골흡수억제제를 함께 투여한다
B. 부갑상샘 수술을 준비하고 약물 치료는 하지 않는다
C. 칼시토닌만 수주간 계속 투여한다
D. 탈수가 심해도 고리이뇨제만 먼저 투여한다

## 해설


중증 악성종양 관련 고칼슘혈증은 수액과 함께 단기간 칼시토닌 및 골흡수억제제로 치료한다. 칼시토닌은 빠르지만 효과가 오래가지 않아 비스포스포네이트나 데노수맙의 효과가 나타날 때까지 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003349 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: paraprotein=PTHrP라는 오류 및 MM이 모든 고칼슘·빈혈·신장손상의 최다 원인이라는 과장을 교정. 원문 골통·기저 Cr 복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003349
- https://www.endocrine.org/clinical-practice-guidelines/hypercalcemia-of-malignancy
