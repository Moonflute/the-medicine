---
type: qbank
schema_version: 1
id: medqa-us-train-007607
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:23e716cab9aba642413531a637f537ccfc3ccab0758d5295eb6896401fdba646
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "피부근염"
  - "헬리오트로프 발진"
  - "쇼울 징후"
  - "항Jo-1 항체"
  - "Dermatomyositis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
---

# MedQA US 임상문제

## 문제

43세 여성이 근위부 근력저하, 레이노 현상과 비미란성 관절염으로 평가받고 있다. 손가락 옆 피부가 두껍게 갈라져 있고 흉부 CT에서 간질성 폐질환이 보인다. 항합성효소 증후군을 뒷받침할 항체는?

## 선택지

A. 항센트로미어 항체
B. 항히스톤 항체
C. 항아세틸콜린수용체 항체
D. 항Jo-1 항체

## 해설


근육염, 관절염, 간질성 폐질환과 기계공 손은 항합성효소 증후군의 단서다. 항Jo-1은 히스티딜 tRNA 합성효소에 대한 항체다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007607 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Jo-1을 가장 흔한 ANA·피부근염 보편항체라고 기술한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007607
- https://doi.org/10.1093/rheumatology/keac115
