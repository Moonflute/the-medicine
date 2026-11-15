---
type: qbank
schema_version: 1
id: medqa-us-train-000084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0ea845c42f5d1d4c2d0b8e45547abc36641e2f140ef87bab8c00fff0a4e8db23
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "asthma"
  - "hypertension"
  - "anxiety"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 적절한 용량의 혈압약 세 가지를 복용해도 혈압이 165/95 mmHg이다. 복약을 지키고 가정혈압도 높다. 상복부 옆쪽에서 혈관잡음이 들리며 콩팥기능은 안정적이다. 숙련된 검사가 가능한 곳에서 신동맥 협착을 비침습적으로 평가할 검사는?

## 선택지

A. 운동부하 심전도
B. 신장 단순 X선
C. 신동맥 이중 도플러 초음파
D. 정맥 신우조영술

## 해설


젊은 환자의 조절되지 않는 고혈압과 옆구리 혈관잡음은 섬유근이형성증 등을 포함한 신혈관성 고혈압을 의심하게 한다. 경험 있는 검사실에서 도플러 초음파로 혈류를 평가할 수 있다. 상황에 따라 CT·MR 혈관조영도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은 여성의 잘 조절되지 않는 혈압과 복부 bruit는 신동맥 질환 의심. 무조건 약 증량보다 Doppler C로 이차 원인 평가가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000084
