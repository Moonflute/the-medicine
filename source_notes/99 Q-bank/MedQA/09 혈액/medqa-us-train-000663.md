---
type: qbank
schema_version: 1
id: medqa-us-train-000663
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:adf18b4285d0fbc923d7133b1e7af2bb0f00b01e80ed3c14921adffe4faf25df
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "rheumatoid arthritis"
  - "diabetes"
  - "hypertension"
  - "hyperlipidemia"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: adverse_effect
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

류마티스관절염 환자가 주 1회로 처방받은 메토트렉세이트를 실수로 매일 복용했다. 잇몸이 헐고 열이 나며 호중구와 혈소판이 크게 줄었다. 가장 적절한 초기 대응은?

## 선택지

A. 메토트렉세이트를 매일 유지하고 엽산만 늘린다
B. 다음 외래까지 기다렸다 혈구를 확인한다
C. 류마티스 악화로 판단해 메토트렉세이트를 증량한다
D. 메토트렉세이트를 중단하고 즉시 입원 평가와 폴린산 구제치료를 검토한다

## 해설


염증성 질환에서 메토트렉세이트를 매일 잘못 복용하면 점막염과 중증 골수억제가 생길 수 있다. 약을 중단하고 폴린산 구제와 발열성 호중구감소 등 응급 합병증을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000663 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Hb12·MCV110만으로 골수억제성 빈혈이 확정됐다고 한 과도한 단정을 약물 관련 대적혈구증의 의심으로 수정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000663
- https://www.ema.europa.eu/en/news/new-measures-avoid-potentially-fatal-dosing-errors-methotrexate-inflammatory-diseases
