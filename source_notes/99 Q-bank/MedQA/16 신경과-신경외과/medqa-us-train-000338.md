---
type: qbank
schema_version: 1
id: medqa-us-train-000338
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4089effe54d9a4eb4e8d4ad91d4e44c1af6b0485a12a19ffd35196f7041e9ae9
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "anxiety"
  - "schizophrenia"
  - "seizure"
  - "carpopedal spasm"
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

불안과 적절히 치료된 조현병(schizophrenia)의 과거력이 있는 23세 환자가 첫 발작으로 응급실에 내원하였다. 환자는 집에서 저녁 식사를 하던 중 비정상적인 움직임을 보이기 시작했고 어머니의 부름에 반응하지 않아 응급실로 이송되었다. 증상은 응급실에서도 지속되었으나 diazepam으로 성공적으로 치료되었다. 환자는 퇴원 후 다음 날 신경과 외래 진료를 예약하였다. 1개월 후 환자가 검진을 위해 신경과를 다시 방문하였다. 신체 검진상 혈압 측정 시 손발가락 연축(carpopedal spasm)이 관찰되는 것이 특징적이다. 뇌신경 II-XII는 정상이며 보행은 안정적이다. 이 환자의 현재 상태에 대한 설명으로 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 약물의 혈중 농도 상승
B. 수분 섭취 증가
C. P450 유도
D. 치료적 농도 미만의 용량

## 해설


환자는 조현병 치료에 사용되는 항정신병제(예: 클로자핀) 복용 후 간질 발작을 겪었으며, 이후 카르포페달 경련이 관찰된다. 클로자핀은 강력한 CYP450 유도제로, 혈중 농도를 감소시켜 치료용량 이하가 되기 쉽다. 따라서 P450 유도가 가장 가능성 높은 설명이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000338
