---
type: qbank
schema_version: 1
id: medqa-us-train-000253
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b10f609d989ee760830ebd4a8cd6fd3a0a73986f8fcaabbc0d27ddb5d9bdfdc
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "vertigo"
  - "hypertension"
  - "dyslipidemia"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ydtOyEneymnSAoQmVuaWduIHBhcm94eXNtYWwgcG9zaXRpb25hbCB2ZXJ0aWdvKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
difficulty: complex
answer: B
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 갑자기 심한 현훈과 구토로 똑바로 걷지 못해 내원했다. 의식과 언어 이해는 정상이었고 팔다리 근력은 유지된다. 소뇌 병변이 의심될 때 추가로 예상되는 진찰 소견은?

## 선택지

A. 명령을 이해하지 못함
B. 반복적인 교대 운동을 수행하지 못함
C. 우측 편측 무시(Right-sided neglect)
D. 우측 시야 결손

## 해설

급성 현훈과 구토에 뚜렷한 보행실조가 동반되면 소뇌 등 중추 병변을 의심한다. 빠른 교대 운동을 제대로 하지 못하는 운동교대장애는 소뇌 기능 이상을 시사한다. 갑작스러운 발병이면 뇌졸중을 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 보이지 않는 CT의 후두부/뇌간 출혈을 확정한 해설 제거. 급성 현훈·보행실조·구토로 소뇌 국소화하여 교대운동장애 B 판단 가능.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000253
