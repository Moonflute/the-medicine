---
type: qbank
schema_version: 1
id: medqa-us-train-005817
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09b3f0a817ccd8a9cded6fa951ec9a6797c5951f38ef3333c5306f017fa80d07
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "지중해빈혈"
  - "소구성 빈혈"
  - "정상 철 저장량"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 여성이 수개월째 지속되는 피로와 운동 시 숨참으로 내원했다. 아버지도 젊을 때부터 빈혈이 있었다. 혈색소 10.2 g/dL, 적혈구 5.7×10⁶/µL, MCV 60 fL, RDW 12%이다. 혈청 페리틴과 트랜스페린 포화도는 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 지중해빈혈
B. 철결핍빈혈
C. 만성 염증에 의한 빈혈
D. 비타민 B12 결핍빈혈

## 해설


MCV가 매우 낮은 데 비해 적혈구 수는 상대적으로 많고 철 저장 지표가 정상이다. 가족성 빈혈도 있어 지중해빈혈이 가장 가능성이 높다. 확진 및 아형 감별에는 혈색소 분석과 경우에 따라 유전자 검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005817 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 상대적으로 높은 RBC를 정상형이라 하고 없는 도말을 관찰한 오류 및 철패널 산술 불일치 명시; thalassemia A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005817
