---
type: qbank
schema_version: 1
id: medqa-us-train-000574
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c03128e81954bb36d9a1cd34b8e4cb49f6fc9190aba6f55be4eba550a336e48
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Takayasu arteritis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uLpOy5tOyVvOyImCDrj5nrp6Xsl7wgKFRha2F5YXN1J3MgQXJ0ZXJpdGlzKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

27세 여성이 몇 달간의 미열과 왼팔을 쓸 때 생기는 피로를 호소한다. 오른팔 혈압은 138/78 mmHg, 왼팔은 102/64 mmHg이다. 왼쪽 요골맥박은 약하고 쇄골 위에서 혈관잡음이 들린다. CRP가 상승했다. 타카야수동맥염이 의심될 때 대동맥과 주요 분지의 벽 및 내강을 평가할 적절한 영상검사는?

## 선택지

A. 경흉부 심장초음파
B. 비조영 뇌 CT
C. 대동맥 및 주요 분지 자기공명 혈관조영술
D. 측두동맥 생검

## 해설


젊은 여성의 상지 파행, 양팔 혈압 차이, 맥박 감소와 혈관잡음은 대혈관염인 타카야수동맥염을 시사한다. 자기공명 혈관조영을 포함한 MRI로 대동맥과 분지의 혈관벽 염증 및 협착 등을 평가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-000574` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 젊은 여성의 맥박 차이·전신 염증에서 Takayasu 초기 스테로이드 C 유지. 장기 단독 스테로이드가 완결치료라는 오해 방지.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000574
- EULAR 대혈관염 영상 권고(2023 개정): https://pubmed.ncbi.nlm.nih.gov/37550004/
