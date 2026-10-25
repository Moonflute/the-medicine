---
type: qbank
schema_version: 1
id: medqa-us-train-007306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5a83ca81157ce4daf342990eba93850d0fe43a418083108a294eab7642879d5
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "다래끼"
  - "외맥립종"
  - "눈꺼풀 모낭 감염"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-qyieuLpOuemOuBvCAoZXh0ZXJuYWwgaG9yZGVvbHVtKS5tZA
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 여아가 왼쪽 눈 주위가 부어 어머니와 함께 응급실에 내원했다. 전날 아침 왼쪽 눈꺼풀에 아프고 따뜻하며 부드러운 덩어리가 생겼다. 눈을 움직여도 통증이 악화되지 않는다. 신체검사에서 모낭을 포함한 왼쪽 위 눈꺼풀의 발적과 부종이 보이고, 누르면 고름이 나온다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 다래끼
B. 안검염
C. 황색판종
D. 산립종

## 해설

모낭 부위를 포함한 급성 통증성 눈꺼풀 종괴, 발적과 농 배출은 A, 외다래끼(hordeolum)에 합당하다. 보통 속눈썹 모낭과 인접 샘의 세균성 감염으로 설명되며 안구 진균증을 뜻하지 않는다. 무통성·만성 마이봄샘 결절인 산립종과 구별된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 다래끼를 안구 마이코시스(진균증)로 잘못 표시한 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007306
