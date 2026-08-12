---
type: qbank
schema_version: 1
id: medqa-us-train-001059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7905139c41ee48c434385f73b3d5c0e41abf1448ae1582214c4c66af0d83c731
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "chickenpox"
  - "pregnancy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
difficulty: complex
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

23세 여성이 수두(chickenpox) 백신 접종을 요청하며 내원하였다. 환자는 또한 오심, 권태감, 그리고 중등도의 체중 증가를 호소하고 있다. 이러한 증상은 지난 2주 동안 점진적으로 발생하였다. 호흡기나 심혈관계 질환은 없다고 보고하였다. 마지막 월경은 약 6주 전이었다. 성 파트너는 한 명이며 피임을 위해 자연 피임법을 사용하고 있다. 활력 징후는 혈압 110/70 mm Hg, 심박수 92회/분, 호흡수 14회/분, 체온 37.2℃이다. 신체 검진상 통증이 없는 유방 울혈과 유두 과색소침착이 관찰된다. 목의 비대나 갑상선 결절은 촉지되지 않는다. 소변 베타-hCG 검사는 양성이다. 이 환자에게 수두 백신 접종과 관련하여 적절한 권고는 무엇인가?

## 선택지

A. 백신 접종 일정을 잡는다.
B. 혈청 베타-hCG로 임신을 확인하고, 양성일 경우 임신 중절을 위한 일정을 잡는다.
C. 혈청 베타-hCG로 임신을 확인하고, 양성일 경우 임신이 끝날 때까지 백신 투여를 연기한다.
D. 혈청 베타-hCG로 임신을 확인하고, 양성일 경우 임신 3분기까지 백신 투여를 미룬다.

## 해설


임신 여부를 확인하기 위해 혈청 β‑hCG 검사가 필요하고, 양성일 경우 수두 백신(생백신)은 임신 중에 금기이므로 출산까지 연기한다. 따라서 임신 확인 후 양성 시 백신 투여를 연기한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001059
