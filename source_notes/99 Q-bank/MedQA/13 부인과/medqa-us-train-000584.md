---
type: qbank
schema_version: 1
id: medqa-us-train-000584
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e01effc803691a54dda885d195772fe9f2ef7f38eaed8b9a67b57e8b2cd5dbea
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "breast cancer"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여성이 정기 건강검진을 위해 일차 진료 의사를 방문했다. 환자는 가끔 두통이 있고 자신의 체형에 대해 부끄러움을 느낀다고 말한다. 그 외에 환자는 특별한 호소 증상이 없다. 환자의 90세 된 어머니는 최근 유방암으로 사망했다. 환자는 하루에 담배 1갑을 피운다. 저녁 식사와 함께 레드 와인을 하루 2-3잔 마신다. 최근 더 많은 휴가와 더 높은 소득을 보장하는 직책으로 승진하여 아이를 가질 계획을 고려 중이다. 환자가 현재 복용 중인 약물은 lisinopril, metformin이며, 프로게스테론 자궁내장치(IUD)를 사용 중이다. 신체 검진에서 S1 및 S2 심음은 정상이다. 폐 청진상 양측 모두 깨끗하다. 환자의 복부, 근골격계 및 신경계 검사는 정상 범위 내에 있다. 환자는 유방암 위험에 대해 우려하고 있으며, 이 질환에 걸릴 확률을 줄이기 위해 무엇을 할 수 있는지 묻는다. 이 환자에게 가장 적절한 권고 사항은 무엇인가?

## 선택지

A. 모유 수유 시작
B. BRCA1 및 2 유전자 검사
C. 매월 유방 자가 검진 권고
D. 운동 및 알코올 섭취 감소

## 해설

현재 가능한 위험감소 조치는 신체활동과 음주 감소/중단(D)이다. 모유수유도 위험감소와 연관되지만 임신·출산하지 않은 현재 시작할 수 있는 처방은 아니다. 모친90세 발병 정보만으로BRCA검사를 자동 시행하지 않고 자세한 가족력으로 위험 평가한다. 자가검진은 암 발생 자체를 줄이지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 모유수유 예방 효과를 폄하한 설명 대신 현재 가능한 위험감소 선택 설명.
- https://www.cancer.gov/types/breast/causes-risk-factors/prevention

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000584
