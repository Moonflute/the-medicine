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
---

# MedQA US 임상문제

## 문제

버킷 림프종으로 응급 화학요법을 받은 7세 남아가 손가락, 발가락과 얼굴의 이상감각이 생겼다. 혈압계 커프를 부풀리면 수근경련이 발생하고 6시간 동안 소변량은 20 mL이다. 칼륨 6.5 mEq/L, 칼슘 6.6 mg/dL, 요산 12 mg/dL, 크레아티닌 3.4 mg/dL이다. 페북소스타트를 시작했다. 가장 적절한 다음 처치는?

## 선택지

A. 혈액투석
B. 정맥 0.9% 생리식염수
C. 중탄산나트륨
D. 기관내 삽관

## 해설


항암 후 심한 핍뇨와 신손상, K 6.5mEq/L, 산증 및 증상성 저칼슘혈증은 중증 TLS를 시사한다. 선택지 중 신속한 혈액투석(A)이 필요한 상황이며 지속 신대체요법 등 구체 방법은 상태에 맞춘다. 동시에 심전도 감시와 고칼륨 응급 안정화·일시적 세포내 이동 치료를 진행한다. 소변이 거의 없는 상황에서 수액만 계속 늘리거나 소변 알칼리화로 해결하려 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001172 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Burkitt 항암 후 심한 핍뇨·K6.5·산증·증상성 저칼슘의 TLS에서 긴급 RRT A 유지. 투석만 기다리며 고칼륨 응급 처치를 생략하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/bjh.70092
- https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001172
