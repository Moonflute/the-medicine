---
type: qbank
schema_version: 1
id: medqa-us-validation-000826
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b5fad0c8f8e8a1eeacc94acf43c6b15ef57a6653172ec764aa4b5d596facef6d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "후두연화증"
  - "흡기성 천명"
  - "소아 기도 연화"
  - "Laryngomalacia"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YGs66O5IChDcm91cCkubWQ
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 4개월 남아가 2개월간 점점 심해지는 흡기성 천명으로 진료를 받으러 왔다. 엎드리면 호전되고 보채거나 수유하거나 바로 누우면 악화되며 산소포화도는 98%이다. 가장 적절한 치료는?

## 선택지

A. 관찰
B. 수술적 절개
C. 세프트리악손 치료
D. 성문상부성형술

## 해설

위치·수유·보챔에 따라 변하는 흡기 협착음은 후두연화증에 부합한다. 산소화·수유·성장이 양호하면 관찰(A)하며 청색증·무호흡·성장부진 등 중증 소견 시 전문 평가·수술을 고려한다. 엎드릴 때 소리가 줄어든다는 병력은 엎드려 재우라는 권고가 아니며 수면은 바로 눕혀 안전하게 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 후두연화증 관찰의 조건과 엎드린 수면 권고로 오해할 위험을 보정.
- https://www.chop.edu/conditions-diseases/laryngomalacia
- https://doi.org/10.1542/peds.2022-057991

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000826
