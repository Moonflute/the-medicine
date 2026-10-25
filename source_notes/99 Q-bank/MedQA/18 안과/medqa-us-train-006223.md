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
answer: A
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

32세 남성이 급성 좌측 눈 통증으로 응급실에 왔다. 아침에 이물감으로 깨어났고 전날 밤 콘택트렌즈를 빼는 것을 잊었다. 렌즈를 제거하자 통증, 불편감 및 눈물이 즉시 생겼으며 물로 씻어도 지속된다. 4년 동안 렌즈를 사용했고 가끔 밤에 빼는 것을 잊는다. 검사에서 좌측 눈의 통증과 눈부심이 있으나 국소마취제로 통증이 완화되고 양안 시력은 20/20이다. 다음 중 진단을 확립하는 데 가장 유용한 검사는 무엇인가?

## 선택지

A. 플루오레세인 검사
B. 안구 초음파
C. 전방각경검사
D. 안와 CT

## 해설

렌즈 제거 후 이물감·눈물·눈부심이 생기고 국소마취제로 통증이 감소하여 각막 표면의 상피 손상을 의심한다. A, fluorescein 염색은 상피 결손을 시각화하여 진단에 도움이 된다. 렌즈 착용자의 감염성 각막염도 감별해야 하므로 염색 하나만으로 원인이나 감염 유무까지 확정하는 것은 아니다. 초음파·CT·전방각경검사는 이 표면 손상 평가의 우선 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Fluorescein A는 유지하되 모든 각막 찰과상에 대한 최민감·최특이 검사라는 근거 없는 과장을 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006223
