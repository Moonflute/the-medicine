---
type: qbank
schema_version: 1
id: medqa-us-train-006992
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6731f806914361f47063a802a2abb7f78d660429fe777a0d3aa12cb5ea3cf797
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemothorax"
  - "Hemothorax"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 왼쪽 흉부 관통 외상으로 이송됐다. 왼쪽 호흡음이 감소하고 타진 시 둔탁하다. 초기 수액·혈액제제 소생 후 혈압은 112/74 mmHg이고, 침상 초음파에서 왼쪽 흉막강에 많은 액체가 보인다. 흉막강의 혈액을 배액하고 출혈량을 확인하기 위한 초기 처치는?

## 선택지

A. 왼쪽 흉관 삽입
B. 동맥혈가스검사
C. 개흉술을 모든 경우 즉시 시행
D. 흉부 CT 촬영까지 배액을 미룸

## 해설

외상 후 한쪽 흉막강에 액체가 고이고 같은 쪽 호흡음이 줄면 혈흉을 의심한다. 흉관으로 혈액을 배액하고 양과 지속 출혈을 확인한다. 소생을 병행하며 순환 불안정이나 대량·지속 출혈이 있으면 외상외과에서 추가 처치를 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일측 타진 둔탁과 호흡음 감소를 혈흉의 임상 단서로 사용하되 누락된 X선에서 대량 혈흉을 보았다고 단정하지 않는다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006992
