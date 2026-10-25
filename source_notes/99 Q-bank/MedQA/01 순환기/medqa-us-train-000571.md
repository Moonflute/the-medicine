---
type: qbank
schema_version: 1
id: medqa-us-train-000571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6837301110f263918bfe5cbe44425cbda9f03a944940855d79b7135b799554b4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "type II diabetes"
  - "breast cancer"
  - "obesity"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 여성이 정기 건강 검진을 위해 일차 진료 의사를 방문했다. 환자는 현재 건강 상태가 양호하며 건강상의 급격한 변화는 없다고 말한다. 일주일에 3번 운동을 하며 식단에 과일과 채소의 양을 늘리려고 노력해 왔다. 지난 20년 동안 하루에 약 0.5갑(1 pack every 2 days)의 담배를 피웠다. 마지막 자궁경부 세포검사(Pap smear)는 2년 전에 시행했으며 특이 사항은 없었다. 과거력상 고혈압과 제2형 당뇨병이 있다. 어머니는 62세에 유방암 진단을 받았다. 환자의 키는 165.1cm, 체중은 84kg이며 체질량지수(BMI)는 30.8kg/m^2이다. 혈압은 155/98mmHg, 맥박은 90회/분, 호흡수는 18회/분이다. 신체 검진상 특이 사항은 없다. 지질 검사 결과 LDL 콜레스테롤은 130mg/dL, HDL 콜레스테롤은 42mg/dL이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 흉부 X선 촬영
B. 대장내시경 검사
C. 유방 촬영술(Mammogram)
D. 스타틴(Statin) 요법

## 해설

정답은 D이다. 40–75세 당뇨병 환자이고 LDL130 및 HTN·흡연 등 추가 위험요인이 있어 statin 치료가 적합하다. 이 정보만으로 정확한 10년 ASCVD 위험률이 10% 이상이라고 계산해 제시하지 않는다. 유방암/대장암 검진도 나이와 기존 검진력에 따라 별도로 제공해야 하며 statin이 검진을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 총콜레스테롤 등 없이 계산한 10년 위험률 단정을 제거하고 DM/연령에 따른 statin 근거로 교체.
- https://diabetesjournals.org/care/article/49/Supplement_1/S216/163933/10-Cardiovascular-Disease-and-Risk-Management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000571
