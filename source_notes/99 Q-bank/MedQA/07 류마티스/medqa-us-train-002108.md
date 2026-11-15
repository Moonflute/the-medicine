---
type: qbank
schema_version: 1
id: medqa-us-train-002108
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1afe1efffacc866f94cfc9cdbfe7ea77b7a1117548b6412ba90757ffa0995948
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "oligoarticular juvenile idiopathic arthritis"
  - "ANA positive"
  - "anterior uveitis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM7JWE6riwIO2KueuwnOyEsSDqtIDsoIjsl7wgKEp1dmVuaWxlIElkaW9wYXRoaWMgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
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

4세 여아의 오른쪽 무릎과 왼쪽 발목 활막염이 3개월 동안 지속됐다. 감염과 다른 원인을 배제했고 나머지 관절은 정상이었다. 초기 6개월 동안 이 두 관절만 침범했다면 적절한 분류는?

## 선택지

A. 부착부염 관련 관절염
B. 소수관절형 소아 특발성 관절염
C. 일과성 엉덩관절 활막염
D. 혈청음성 다관절형 소아 특발성 관절염

## 해설


지속되는 소아 특발성 관절염에서 초기 6개월에 1~4개의 관절만 침범하면 소수관절형에 해당한다. 어린 나이와 ANA 양성은 전방포도막염 선별 계획에도 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002108 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 첫 6개월 내 양 무릎·오른발목·오른손목 총4관절의 만성 관절염과 ANA 양성 전방포도막염은 소수관절형 JIA B에 부합한다. 5관절 이상으로 잘못 세지 않고 직접 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002108
- https://doi.org/10.1002/acr.23871
