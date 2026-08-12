---
type: qbank
schema_version: 1
id: medqa-us-train-000352
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3e8faa7060c3f28b2ee4f8e6f43babec16bccdf291d2d16ae037a2cb2945e67a
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Antiphospholipid syndrome"
  - "Gestational diabetes"
  - "Pre-eclampsia"
  - "Rubella infection"
question_type: diagnosis
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yEoOyynOyEsSDtko3sp4Qg7Kad7ZuE6rWwIChDb25nZW5pdGFsIFJ1YmVsbGEgU3luZHJvbWUpLm1k
difficulty: standard
answer: D
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

32세 임신 1회, 출산 경험 없는(G1P0) 여성이 산전 진찰을 위해 산부인과에 내원하였다. 임신 30주 차이다. 환자는 약간의 피로감을 호소하며 요절박(urinary urgency)을 호소한다. 이번 임신 전에는 특별한 과거력이 없었다. 매일 산전 비타민과 엽산 보충제를 복용하고 있다. 어머니는 당뇨병이 있고, 남자 형제는 관상동맥질환이 있다. 신체 검진에서 자궁저부 높이(fundal height)는 25cm이다. 태아 초음파상 머리 둘레, 몸통 크기, 사지 길이가 비례적으로 감소한 소견을 보인다. 이 환자의 증상에 대한 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 항인지질증후군(Antiphospholipid syndrome)
B. 임신성 당뇨병
C. 자간전증(Pre-eclampsia)
D. 풍진 감염

## 해설


임신 30주에 태아 성장 제한과 자궁저부 높이 저하가 보이며, 산모는 경미한 피로와 요절박만 있다. 이는 태아 감염 중 풍진에 의한 성장 제한이 가장 흔히 나타난다. 따라서 가장 가능성 높은 원인은 풍진 감염이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000352
