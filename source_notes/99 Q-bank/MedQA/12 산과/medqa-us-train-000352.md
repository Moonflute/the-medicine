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
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

머리·몸통·사지가 비례적으로 작아진 대칭성 태아 성장제한은 초기 태아 발달에 영향을 준 선천감염이나 염색체 이상을 고려하게 한다. 제시된 선택지 중 풍진 감염(D)이 이러한 양상을 설명할 수 있다. 자간전증 등 태반부전은 흔히 비대칭 성장제한과 연관되고 임신성 당뇨는 보통 과성장을 우려한다. 다만 이 소견만으로 풍진이 확진되거나 모든 선천감염 중 가장 흔한 원인이라는 뜻은 아니며 다른 원인도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 대칭성성장제한에서D선지추정은유지하되풍진이전체태아감염성성장제한의가장흔한원인이라는오류삭제.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000352
