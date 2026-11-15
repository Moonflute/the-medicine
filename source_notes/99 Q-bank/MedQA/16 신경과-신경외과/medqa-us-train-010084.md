---
type: qbank
schema_version: 1
id: medqa-us-train-010084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:587f77eff8219988c3803365f8945bb53a1ce204ae3cf8c680d2ca5be7b879cf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "손목터널증후군"
  - "정중신경병증"
  - "신경전도검사"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 여성이 밤에 엄지·검지·중지가 저려 깬다. 손목을 굽히면 재현되고 손을 흔들면 줄어든다. 엄지 힘과 무지구는 정상이다. 증상이 가벼운 전형적 손목터널증후군에서 우선 시도할 처치는?

## 선택지

A. 밤에 손목을 중립으로 유지하는 보조기
B. 밤에 손목을 굽혀 고정하는 보조기
C. 즉시 손목터널 감압술
D. 장기간 경구 스테로이드

## 해설

운동 약화나 무지구 위축이 없는 가벼운 손목터널증후군에는 야간 중립 손목 보조기를 먼저 시도할 수 있다. 전형적 소견에서 모든 환자에게 신경전도검사가 필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NCS B는 필요한 경우 확인검사지만 모든 전형적 CTS에 필수라는 단정 교정.
- 공식/학회 근거: https://www.aaos.org/globalassets/quality-and-practice-resources/carpal-tunnel/carpal-tunnel-2024/cts-cpg.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010084
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11928260/
