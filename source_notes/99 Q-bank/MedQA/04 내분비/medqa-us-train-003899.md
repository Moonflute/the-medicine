---
type: qbank
schema_version: 1
id: medqa-us-train-003899
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa6a07b004b1b5356a3e8e8dba1a3b4acd45cda072ff787e92e016a50154052f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteoporosis"
  - "calcium supplementation"
  - "vitamin D supplementation"
  - "bone mineral density"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 폐경 여성이 대퇴경부 DXA T점수 -2.8이다. 골절 병력은 없고 신기능과 혈청 칼슘은 정상이다. 식도 질환이 없고 약을 복용한 후 앉아 있을 수 있다. 골절 예방을 위한 일차 약물로 적절한 것은?

## 선택지

A. 칼슘·비타민 D 보충제만 사용
B. 진통제만 사용
C. 경구 알렌드로네이트
D. 폐경 증상이 없는 상태에서 전신 에스트로겐을 새로 시작

## 해설

폐경 후 여성에서 대퇴경부 T점수 -2.5 이하는 골다공증이다. 금기가 없는 경우 알렌드로네이트는 골절 위험을 낮추는 일차 치료 선택지다. 칼슘·비타민 D 섭취를 보완하되 치료약을 대신하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 칼슘/vitD의 충분한 섭취와 일률적 보충제의 골절예방 효과를 구분. T-score-3의 치료를 영양만으로 대체하지 않음.
- https://ods.od.nih.gov/factsheets/Calcium-Healthprofessional/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003899
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11439573/
