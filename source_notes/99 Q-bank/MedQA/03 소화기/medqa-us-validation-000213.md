---
type: qbank
schema_version: 1
id: medqa-us-validation-000213
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:153a81ddff9c55281cc548413c61b1515a5a2ba46bb542ccf1439f369ed438e8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유당불내증"
  - "락타아제 결핍"
  - "유제품"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jyg64u5IOu2iOuCtOymnSAoTGFjdG9zZSBJbnRvbGVyYW5jZSkubWQ
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

27세 남성이 일반 우유를 마시면 복부팽만과 묽은 변이 생기는데, 같은 양의 무유당 우유를 마실 때는 괜찮다. 체중 감소나 혈변은 없다. 가장 적절한 첫 조치는?

## 선택지

A. 유제품을 종류와 양에 상관없이 모두 끊는다.
B. 증상을 유발하는 유당을 줄이고 칼슘 섭취는 유지한다.
C. 일반 우유를 계속 마시되 매일 지사제를 복용한다.
D. 밀가루를 먼저 제한하고 일반 우유는 유지한다.

## 해설


음식과 증상의 관계가 뚜렷하면 유당을 줄이고 반응을 본다. 무유당 유제품 등을 이용해 칼슘과 비타민 D를 보충할 수 있으며 유제품을 일률적으로 전부 끊을 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000213 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유당 제한 B 취지 유지하되 모든 유제품 평생 완전 금지가 항상 필요하다는 과장 완화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/eating-diet-nutrition

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000213
- https://doi.org/10.1002/ueg2.12133
