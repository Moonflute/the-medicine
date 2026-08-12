---
type: qbank
schema_version: 1
id: medqa-us-train-000813
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0f4bc90b23cd34cb8d63ddf49106db15e1191a398097b91bf521614333b67e53
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "gestational diabetes mellitus"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
answer: B
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

23세 백인 여성(G2P1)이 임신 25주차 정기 산전 진찰을 위해 내원하였다. 환자는 특별한 호소 증상이 없으며 현재까지 임신 경과는 순조롭다. 이전 임신은 자간전증(pre-eclampsia)으로 합병증이 있었으며 임신 36주에 재태 연령 대비 작게(small-for-gestational-age) 태어난 여아를 분만하였다. 임신 전 체중은 73kg(161lb)이었고 현재 체중은 78kg(172lb)이다. 키는 155cm이다. 혈압은 120/80mmHg, 심박수는 분당 91회, 호흡수는 분당 14회, 체온은 36.7℃(98℉)이다. 신체 검진은 정상이며 부인과 검진상 임신 25주에 해당한다. 75g 경구 당부하 검사(OGTT) 결과 1시간 혈당이 189mg/dL로 비정상이었다. 다음 중 이 환자의 상태에 대한 위험 인자는 무엇인가?

## 선택지

A. 환자의 연령
B. 임신 전 체질량지수(BMI)
C. 자간전증(pre-eclampsia)의 과거력
D. 재태 연령 대비 작은(small-for-gestational-age) 아기 출산 과거력

## 해설


임신성 당뇨 위험 인자는 임신 전 BMI가 높을수록 증가한다. 이 환자는 과체중(BMI≈32)이며, 이는 주요 위험 요인이다. 따라서 위험 인자는 임신 전 BMI이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000813
