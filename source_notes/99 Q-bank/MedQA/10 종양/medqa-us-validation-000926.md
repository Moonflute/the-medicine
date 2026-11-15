---
type: qbank
schema_version: 1
id: medqa-us-validation-000926
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:31c1dbd0ce6a34556a53c2f25185f5adc07adba672bcda729179083f72092413
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "대장 선암"
  - "철결핍성 빈혈"
  - "암배아항원"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: monitoring
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

3기 결장암으로 근치절제와 보조항암을 마친 환자다. 재발해도 치료를 받을 수 있는 상태이며 수술 전 CEA가 높았다가 치료 뒤 정상화됐다. 계획된 CT와 대장내시경에 더해 추적할 혈액검사는?

## 선택지

A. 혈청 CEA
B. 혈청 CA 125
C. 혈청 AFP
D. 혈청 CA 19-9만 정기 측정

## 해설


결장암 근치 치료 뒤에는 CEA 추이를 영상과 대장내시경에 더해 활용할 수 있다. CEA 상승만으로 재발을 확진할 수 없고 정상 수치가 영상 추적을 대신하지도 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000926 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대장암 절제 후 CEA A 유지하되 재발을 항상 민감하게 진단하는 단독검사라는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng151/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000926
- https://www.cancer.gov/types/colorectal/hp/colon-treatment-pdq
