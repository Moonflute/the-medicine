---
type: qbank
schema_version: 1
id: medqa-us-train-009383
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:000b88d0b78102040c30ced8312f7cd1320bb2d953a5e6a3d48e07c407f54405
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "actinic keratosis"
  - "광선각화증"
  - "premalignant skin lesion"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-q0keyEoCDqsIHtmZTspp0gKEFjdGluaWMgS2VyYXRvc2lzKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성의 오래 햇빛에 노출된 정수리에 거친 사포처럼 만져지는 작은 인설성 반점이 여러 개 있다. 단단한 결절이나 궤양은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 지루각화증
B. 편평세포암
C. 광선각화증
D. 기저세포암

## 해설

만성 광노출 부위의 작고 거친 인설성 반점은 광선각화증에 전형적이다. 두꺼워지거나 궤양이 생기고 단단해지는 병변에서는 편평세포암을 따로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광선각화증 B는 맞으나 두피 병변을 전신 소견으로 잘못 적은 해설을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009383
