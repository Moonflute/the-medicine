---
type: qbank
schema_version: 1
id: medqa-us-train-001208
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b5cb907b2e6472b66a6055d56f35d84d29e2a013d8b5fe29ab614c6ce37bec0
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "fetal warfarin syndrome"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

산전 진찰을 받지 않은 26세 여성(임신 3회, 출산 1회)이 임신 37주에 남아를 출산하였다. 신생아의 아프가 점수(Apgar score)는 1분에 5점, 5분에 8점이었다. 체중은 2.1kg, 키는 47cm이다. 산모의 과거력상 만성 신우신염, 심방세동, 위식도역류질환이 있다. 산모는 5갑년의 흡연력이 있으며 임신 중 음주 사실도 보고하였다. 신생아 검진상 짧고 함몰된 콧대, 넓은 코, 단지증(brachydactyly), 짧은 목이 관찰된다. 안저 검사에서 양측 백내장이 확인된다. 신생아 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 오메프라졸(Omeprazole)
B. 젠타마이신(Gentamicin)
C. 알코올(Alcohol)
D. 와파린(Warfarin)

## 해설


신생아의 저체중, 안구·얼굴 기형, 백내장, 단지증은 와파린을 임신 중 복용한 경우 나타나는 와파린 증후군의 전형적인 특징이다. 와파린은 비타민 K 의존성 응고인자를 억제해 태아의 골격·시각 발달에 영향을 미친다. 따라서 가장 가능성 높은 원인은 와파린이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001208
