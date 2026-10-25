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

27세 일본인 남성이 외식할 때마다 복부팽만, 가스, 복부경련, 수양성 설사를 겪는다. 오늘은 프로즌 요구르트 후 증상이 시작되었고 진찰과 대변 잠혈검사는 정상이었다. 가장 적절한 처치는?

## 선택지

A. 수소 호기검사
B. 유당 제한식
C. 로페라미드
D. 대변 삼투성 간격 측정

## 해설


정답 B. 유제품 후 복부팽만·가스·수양성 설사는 유당불내증을 시사한다. 우선 유당을 줄이거나 제한해 증상 변화를 보는 것이 적절하다. 허용량에는 개인차가 있으며 저유당/무유당 제품이나 lactase 보충을 이용할 수 있어 모든 유제품을 평생 완전히 금지해야 하는 것은 아니다. 칼슘·비타민 D 등 영양 섭취도 유지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000213 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유당 제한 B 취지 유지하되 모든 유제품 평생 완전 금지가 항상 필요하다는 과장 완화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/eating-diet-nutrition

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000213
