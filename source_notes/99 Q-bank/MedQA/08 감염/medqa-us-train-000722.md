---
type: qbank
schema_version: 1
id: medqa-us-train-000722
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96e34142c4ebafff87090877fbc1d1befe2686c1a9bfaae14b9e48da1feee2a1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute alcohol intoxication"
  - "hypoglycemia"
  - "macrocytosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOyggO2YiOuLueymnSAoTmVvbmF0YWwgSHlwb2dseWNlbWlhKS5tZA
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
---

# MedQA US 임상문제

## 문제

영양 상태가 좋지 않고 과음력이 있는 환자가 의식을 잃은 채 이송됐다. 기도와 호흡을 평가하는 중 측정한 혈당은 20mg/dL이고 정맥로는 확보됐다. 포도당과 티아민 투여 순서에 대한 판단으로 맞는 것은?

## 선택지

A. 혈중 알코올 결과가 나올 때까지 포도당을 주지 않는다
B. 티아민 투여 후 충분히 기다린 다음에만 포도당을 준다
C. 정맥 포도당으로 저혈당을 즉시 교정하고 티아민도 지체 없이 투여한다
D. 의식이 없으므로 경구 주스로만 교정한다

## 해설


중증 저혈당에서는 정맥 포도당 투여를 티아민 때문에 지연하지 않는다. 영양결핍 위험이 큰 환자에게는 티아민을 동시에 또는 가능한 한 빨리 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000722 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 알코올성 대적혈구증을 반드시 B12/엽산 결핍 때문이라고 단순화한 기전을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000722
- https://doi.org/10.1097/ADM.0000000000000668
