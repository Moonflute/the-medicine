---
type: qbank
schema_version: 1
id: medqa-us-validation-001172
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:94658bf33944e60f61dae7c54e50dcb0082984e587f30f28cafa07d6164602af
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "종양융해증후군"
  - "급성신손상"
  - "고칼륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MTAg7KKF7JaRL-yiheyWkeuCtOqzvC5tZA
question_type: management
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

버킷 림프종 항암 직후 핍뇨, 급성 신손상과 인산·요산 상승이 나타났다. 고칼륨혈증 응급치료를 했는데도 칼륨이 6.7mEq/L로 유지되고 소변량이 매우 적다. 다음 처치는?

## 선택지

A. 요산 억제제를 바꾸고 다음 날 칼륨을 확인한다
B. 신대체요법을 긴급히 시작한다
C. 칼륨이 떨어질 때까지 정맥 수액만 계속 늘린다
D. 소변을 알칼리화하는 치료만 시행한다

## 해설


종양용해증후군에서 초기 응급처치에 반응하지 않는 고칼륨혈증이나 심한 핍뇨성 신손상이 있으면 신대체요법을 지연하지 않는다. 기다리는 동안 심전도 감시와 고칼륨혈증 치료를 지속한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001172 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Burkitt 항암 후 심한 핍뇨·K6.5·산증·증상성 저칼슘의 TLS에서 긴급 RRT A 유지. 투석만 기다리며 고칼륨 응급 처치를 생략하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/bjh.70092
- https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001172
- https://pubmed.ncbi.nlm.nih.gov/40903841/
