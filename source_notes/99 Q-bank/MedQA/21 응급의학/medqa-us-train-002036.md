---
type: qbank
schema_version: 1
id: medqa-us-train-002036
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09e206c1f668b1d44e4b64117c3296d3114a67cc2c1448ac04da10d07420b4a8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "citrate toxicity"
  - "hypocalcemia"
  - "massive transfusion"
question_type: adverse_effect
related_disease_slugs:
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 남성이 차에 치여 의식이 없고 GCS 3점으로 응급실에 왔다. 수액과 혈액제제로 소생했고 골반 불안정성이 있어 바인더를 적용했다. 한 시간 후 입 주위와 사지의 저림을 호소한다. 다음 중 현재 증상을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 저칼륨혈증
B. 약물 합병증
C. 수혈 합병증
D. 척수 외상

## 해설


대량 수혈 시 사용되는 시트레이트는 혈액 내 칼슘을 결합해 저칼슘혈증을 일으키며, 저칼슘은 신경근 전도 저하와 저림 증상을 초래한다. 이는 수혈 합병증에 해당한다. 따라서 현재 증상을 가장 잘 설명하는 것은 수혈 합병증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002036
