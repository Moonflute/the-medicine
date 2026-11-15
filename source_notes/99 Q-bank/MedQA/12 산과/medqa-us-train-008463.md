---
type: qbank
schema_version: 1
id: medqa-us-train-008463
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9dbf4ab4165da582b99aa3004f8997802443e9b6978109a6a62ce514fe6cf0d2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "vaccination in pregnancy"
  - "Tdap"
  - "influenza vaccine"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주 산모가 이전 임신 때 백일해 포함 Tdap을 맞았다. 이번 임신에서는 아직 맞지 않았다. 국내 권고에 따른 설명으로 적절한 것은?

## 선택지

A. 이전 임신 때 맞았으면 이번에는 필요 없다
B. 출생 초기 아기를 보호하기 위해 이번 임신에도 27–36주에 Tdap을 권한다
C. 생백신이므로 이번 임신 중에는 맞을 수 없다
D. 접종 대신 신생아가 첫 접종할 때까지 기다리는 것이 같은 효과다

## 해설

임신 27–36주 Tdap 접종은 모체 항체가 태반을 통해 전달돼 아기가 첫 백신을 접종하기 전 백일해 위험을 줄인다. 이전 임신 접종과 별도로 이번 임신의 접종을 권한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 28주 Tdap은 3분기이며 HBV백신은 임신 금기가 아님.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008463
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6953
