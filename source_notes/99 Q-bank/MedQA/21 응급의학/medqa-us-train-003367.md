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
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

82세 여성에게 설명하기 어려운 멍과 욕창이 있고 돌봄을 맡은 가족이 환자의 답을 막는다. 안전한 장소에서 따로 면담했더니 반복적인 폭행과 방임을 진술했다. 의료인이 치료와 안전 평가에 더해 해야 할 일은?

## 선택지

A. 가족 돌봄이므로 진료기록에만 남긴다
B. 즉시 노인보호전문기관 또는 수사기관에 신고한다
C. 보호자의 동의를 얻을 때까지 신고를 보류한다
D. 한 달 뒤 재진 때 다시 판단한다

## 해설

국내 노인복지법에 따라 의료인이 직무상 65세 이상 노인의 학대를 알게 되면 즉시 노인보호전문기관 또는 수사기관에 신고한다. 동시에 환자의 치료와 안전한 보호를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 노인학대 의심 D 유지. 신고 의무·경로를 관할별로 구별하고 안전 평가 보완.
- 공식/학회 근거: https://acl.gov/programs/protection-and-advocacy-systems/what-if-i-suspect-abuse-neglect-or-exploitation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003367
- https://law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1029730589
