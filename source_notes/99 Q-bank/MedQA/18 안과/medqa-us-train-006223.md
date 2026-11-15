---
type: qbank
schema_version: 1
id: medqa-us-train-006223
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:674a1623c20af587a0f2315dda508318d20f46dbd136bb9f0a9da4e86277800f
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "각막 찰과상"
  - "콘택트렌즈 관련 손상"
  - "플루오레세인 염색"
question_type: investigation
related_disease_slugs:
  - MTgg7JWI6rO8L-yEuOq3oOqwgeunieq2pOyWkSAoYmFjdGVyaWFsIGNvcm5lYWwgdWxjZXIpLm1k
difficulty: standard
answer: D
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

소프트 콘택트렌즈를 끼고 자고 난 환자가 렌즈를 뺀 뒤 이물감과 눈물을 호소한다. 시력은 유지되고 각막에 흰 침윤은 보이지 않는다. 각막 상피 결손을 확인할 검사는?

## 선택지

A. 안구 초음파
B. 안와 CT
C. 전방각경검사
D. 플루오레세인 염색과 세극등검사

## 해설

플루오레세인 염색과 세극등검사는 각막의 상피 결손을 확인한다. 렌즈 착용자에서 침윤·시력 저하가 있으면 감염성 각막염을 응급 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Fluorescein A는 유지하되 모든 각막 찰과상에 대한 최민감·최특이 검사라는 근거 없는 과장을 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006223
- https://www.aaojournal.org/article/S0161-6420%2824%2900007-1/fulltext
