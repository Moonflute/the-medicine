---
type: qbank
schema_version: 1
id: medqa-us-train-006472
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d13aa9249d3b791bca7777d07f6cc390a8d1c34914798c77ac2104a38564abb9
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "소수관절형 소아 특발성 관절염"
  - "포도막염"
  - "실명 위험"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM7JWE6riwIO2KueuwnOyEsSDqtIDsoIjsl7wgKEp1dmVuaWxlIElkaW9wYXRoaWMgQXJ0aHJpdGlzKS5tZA
question_type: prevention
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

3세 여아가 항핵항체 양성 소수관절형 소아 특발성 관절염으로 새로 진단됐다. 충혈이나 시력 저하는 없다. 만성 전방포도막염을 놓치지 않기 위한 관리는?

## 선택지

A. 눈이 충혈될 때만 안과에 의뢰한다
B. 연 1회 시력표 검사만 시행한다
C. 6개월마다 안저촬영만 시행한다
D. 약 3개월마다 안과 세극등검사를 받게 한다

## 해설


어린 나이에 발병한 ANA 양성 소수관절형은 무증상 전방포도막염 위험이 높다. 증상이 없어도 정기적으로 세극등검사를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006472 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANA 양성·어린 나이·소수관절 JIA에서 무증상 만성 전방포도막염으로 실명 D 위험이 증가한다. 원문·선지·해설의 연관을 직접 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006472
- https://doi.org/10.1002/acr.23871
