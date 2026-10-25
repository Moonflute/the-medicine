---
type: qbank
schema_version: 1
id: medqa-us-train-003367
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:190a36b150e9cde0af30c622872bc951324e66f1849d2225539c8a60d3ca465e
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "elder abuse"
  - "elder neglect"
  - "physical abuse"
  - "mandatory reporting"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
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

82세 여성이 1년 동안 비관적이고 조카를 지나치게 불신해 함께 사는 조카에게 진료를 받으러 왔다. 그녀는 조카와 자주 다투고 조카의 친구들 앞에서 조카를 창피하게 한다. 2개월 전 콜레스 골절이 있었고 18년간 고혈압을 앓았다. 처방대로 복용했다면 새로 처방받아야 할 약들이 2개월 전 방문 이후 그대로 남아 있었다. 외모는 단정하지 않았고, 질문에 중얼거리며 대답했다. 조카는 환자가 자신의 의사를 명확히 표현하지 못한다며 진료 내내 곁에 있었다. 좌골결절에 욕창이 있고 발목 주변에 멍이 들어 있다. 환자 돌봄에서 가장 적절한 조치는?

## 선택지

A. 사전의료의향서에 대해 논의한다
B. 약물 복용과 1개월 후 추적관찰의 중요성을 강조한다
C. 호스피스 진료를 의뢰한다
D. 노인학대 의심 사례를 전화로 신고한다

## 해설

불결함·욕창·멍·투약 누락과 보호자의 면담 통제는 학대/방임을 의심하게 한다. 보기 중 성인보호기관 등에 의심사례를 신고하는 D가 적합하다. 동시에 환자를 따로 면담하고 즉각적인 안전·치료 필요성과 의사결정능력을 평가한다. 법적 의무·대상기관·신고 방식은 관할에 따라 확인하며, 의심 보고에 학대의 완전한 입증을 먼저 요구하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 노인학대 의심 D 유지. 신고 의무·경로를 관할별로 구별하고 안전 평가 보완.
- 공식/학회 근거: https://acl.gov/programs/protection-and-advocacy-systems/what-if-i-suspect-abuse-neglect-or-exploitation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003367
