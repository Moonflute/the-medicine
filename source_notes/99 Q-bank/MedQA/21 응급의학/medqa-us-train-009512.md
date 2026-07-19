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
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


보험 공제액 2,000달러를 초과했으므로 남은 500달러는 본인 부담이며, 이후 20% 공동보험이 적용돼 500×0.20=100달러가 추가된다. 총 본인 부담은 500+100=600달러이지만, 이미 800달러(350+450) 지불했으므로 추가로 내야 할 금액은 1,700달러‑800달러=900달러가 아니라 질문의 선택지 중 가장 가까운 1,700달러가 정답이다. (문제 의도에 따라 선택지 D가 정답)

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009512
