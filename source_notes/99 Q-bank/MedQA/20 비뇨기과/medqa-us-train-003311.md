---
type: qbank
schema_version: 1
id: medqa-us-train-003311
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be4801e1a8dabfa4acf7f7f784ccd2177ea9491fdd103a1c36259aafdad58c24
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "overactive bladder"
  - "urge urinary incontinence"
  - "bladder training"
  - "behavioral therapy"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: complex
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

66세 여성이 갑작스러운 요의 뒤 화장실에 닿기 전에 소변이 샌다고 한다. 요검사와 잔뇨는 정상이고 약을 쓰지 않고 먼저 치료해 보고 싶다. 적절한 초기 처치는?

## 선택지

A. 처음부터 요도 슬링 수술을 한다
B. 매번 요의가 오기 전에 최대한 자주 소변을 보게 한다
C. 배뇨일지와 방광 훈련으로 배뇨 간격을 서서히 늘린다
D. 유치도뇨관을 삽입한다

## 해설

절박성 요실금에서 방광 훈련은 우선 선택할 수 있는 비침습적 치료다. 배뇨일지로 패턴을 확인하고 요의를 조절하며 배뇨 간격을 점차 늘린다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 방광훈련 B 유지. 약물/신경자극을 반드시 순차적 2·3차로만 적용한다는 고정 단계 해설을 현행 공동결정 원칙으로 수정.
- 공식/학회 근거: https://www.auanet.org/documents/Guidelines/PDF/2024%20Guidelines/OAB%202024%20Unabridgedv2.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003311
- https://www.nice.org.uk/guidance/ng123/chapter/recommendations
