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

49세 여성이 제2형 당뇨병으로 12년째 치료 중이다. 고혈압이 있고 현재 흡연한다. 심혈관질환 병력은 없으며 LDL 콜레스테롤은 130 mg/dL, 중성지방은 140 mg/dL이다. 생활습관 개선과 함께 심혈관질환의 일차예방을 위해 시작할 지질강하제는?

## 선택지

A. 페노피브레이트
B. 오메가-3 지방산 제제
C. 나이아신
D. 스타틴

## 해설

당뇨병 유병기간이 길고 고혈압·흡연 같은 위험인자가 있으면 국내 당뇨병 지침에서도 적극적인 LDL 저하가 필요하다. 스타틴이 우선이며, 페노피브레이트나 오메가-3 제제를 LDL 저하 목적의 첫 약제로 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 총콜레스테롤 등 없이 계산한 10년 위험률 단정을 제거하고 DM/연령에 따른 statin 근거로 교체.
- https://diabetesjournals.org/care/article/49/Supplement_1/S216/163933/10-Cardiovascular-Disease-and-Risk-Management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000571
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
