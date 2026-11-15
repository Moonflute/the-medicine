---
type: qbank
schema_version: 1
id: medqa-us-train-007359
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ced53e285a90cfa40dd182c03b715a39d12a0380a03b7dc5074e03dcfff0e694
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "대장암"
  - "융모선종"
  - "철결핍성 빈혈"
  - "대장 용종"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Jqp7KKFIChDb2xvbmljIFBvbHlwKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: monitoring
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 충분한 장 정결 상태로 대장내시경을 받았다. 17 mm 크기의 관융모선종 1개를 완전히 절제했고 침윤암은 없다. 다른 병변이나 유전성 고위험 요인은 없다. 국내 권고에 따른 추적 대장내시경 시점은?

## 선택지

A. 6개월 뒤
B. 3년 뒤
C. 7년 뒤
D. 10년 뒤

## 해설

충분한 질의 내시경에서 완전히 절제한 경우라도 10 mm 이상이거나 융모성 성분이 있는 선종은 고위험 소견에 해당한다. 국내 지침은 이런 경우 3년 후 추적 대장내시경을 권고한다. 큰 병변의 분할 절제 등에서는 추적 시점이 달라진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Villous adenoma B의악성위험을이미발생한암의모양과혼동한설명교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007359
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9726446/
