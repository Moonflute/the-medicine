---
type: qbank
schema_version: 1
id: medqa-us-train-008488
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6f829733132a037853d052cb5ae32df126a3430bc914bacfe5223720176070a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "alcoholic hallucinosis"
  - "alcohol withdrawal"
  - "alcohol-induced psychotic disorder"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsnKDrsJwg7KCV7Iug67OR7KCBIOyepeyVoCAoQWxjb2hvbC1JbmR1Y2VkIFBzeWNob3RpYyBEaXNvcmRlcikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

오래 과음한 환자가 음주를 끊은 다음 날 손이 떨리고 땀이 나며 실제로 없는 목소리가 들린다. 사람·장소·시간을 정확히 말하고 대화에 집중하며 의식 수준이 변동하지 않는다. 이 시점의 상태는?

## 선택지

A. 의식이 보존된 알코올 금단 관련 환각
B. 알코올 금단 섬망
C. 코르사코프 기억장애
D. 만성 알코올성 소뇌변성

## 해설

금단 중 환각이 있어도 주의력과 지남력이 보존되면 섬망과 구별한다. 이후 경과가 악화할 수 있어 활력·주의력과 금단 정도를 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008488

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 알코올성 환각증 답 유지. 12시간 이내가 필수·정상CT/혈역학이 진단 조건이라는 설명 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline
