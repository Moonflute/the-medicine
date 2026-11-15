---
type: qbank
schema_version: 1
id: medqa-us-validation-000171
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7855f052c823366f14756cf798989a8fe221a70feb0e8be131eb805d4b60c047
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "신경모세포종"
  - "VMA"
  - "HVA"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK966qo7IS47Y-s7KKFIChOZXVyb2JsYXN0b21hKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

2세 아이의 복부 영상에서 중앙선을 가로지르는 불규칙한 부신 부위 종괴가 보인다. 신경모세포종을 의심할 때 초기 평가에 도움이 되는 소변 검사는?

## 선택지

A. 요 알부민/크레아티닌 비
B. 소변 유리 코르티솔 단독
C. 요중 빌리루빈
D. 요중 호모바닐산(HVA)과 바닐릴만델산(VMA)

## 해설


신경모세포종에서는 요중 카테콜아민 대사산물인 HVA와 VMA가 증가할 수 있다. 소변 수치는 초기 단서이며 영상·조직검사 및 병기 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000171 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 중앙선을 넘는 소아 복부 종괴·opsoclonus와 HVA/VMA 증가에 따른 신경모세포종 D 및 해설을 원문 대조하여 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000171
- https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq
