---
type: qbank
schema_version: 1
id: medqa-us-train-009512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb782bea667cc3827e2abe397c7cb03df1f5d04a904bc93ca6b3fc8631be4930
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "health insurance cost sharing"
  - "건강보험 비용분담"
  - "deductible"
question_type: biostatistics
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 손을 뻗은 채 넘어져 응급실에 왔다. 손목 골절로 변형이 뚜렷하고 압통이 있으며 통증으로 손목과 손가락 운동이 제한된다. 치료 후 퇴원했고 최종 총 진료비는 2,500달러였다. 보험은 연간 공제액 2,000달러를 충족한 후 공동부담금 300달러와 20% 공동보험을 적용한다. 올해 초 천식 발작으로 응급실을 두 번 방문해 350달러와 450달러를 지불했고 그 외 의료비는 없다. 이전 미납액이 없을 때 이번 응급실 방문에서 반드시 본인 부담으로 지불해야 하는 금액은 얼마인가?

## 선택지

A. 200달러
B. 800달러
C. 1,200달러
D. 1,700달러

## 해설

올해 이미 낸 350+450=800달러를 연간 공제액에 적용하면 남은 공제액은 2,000−800=1,200달러이다. 이번 청구액 2,500달러에서 이를 빼면 1,300달러가 남고, 문제에 정한 순서대로 공동부담금 300달러를 낸 뒤 남은 1,000달러에 20% 공동보험인 200달러를 부담한다. 이번 방문의 본인 부담액은 1,200+300+200=1,700달러(D)이다. 이는 선지에 가장 가까운 값을 고른 것이 아니라 제시된 조건에 따른 정확한 계산이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 주어진 보험의 공제액→공동부담금→공동보험 적용 순서로 정확히 1,700달러가 계산된다. 가장 가까운 선지 선택이라는 잘못된 해설을 교체한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009512
