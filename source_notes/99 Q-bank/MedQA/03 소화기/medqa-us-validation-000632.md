---
type: qbank
schema_version: 1
id: medqa-us-validation-000632
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1850dd14da46a0307a5a6f6b851a41c9ef40f52795775a14a8fade3f32a39ac4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유당불내증"
  - "식이 유발 설사"
  - "유제품 제거"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jyg64u5IOu2iOuCtOymnSAoTGFjdG9zZSBJbnRvbGVyYW5jZSkubWQ
question_type: management
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

건강한 34세 남성이 4개월간 매일 정오 무렵 복부경련과 함께 무혈성 묽은 변을 한 번씩 본다. 아침을 먹지 않으면 설사가 없고 가스가 많지만 발열, 체중감소, 절박변은 없다. 초기 권고로 가장 적절한 것은?

## 선택지

A. 콜레스티라민
B. 모든 유제품 제거
C. 메트로니다졸 경험적 치료
D. 로페라미드

## 해설


정답 B. 식사를 거르면 사라지는 가스·경련성 복통과 묽은 변은 음식성 삼투성 설사를 고려하게 한다. 선택지 중 일시적인 유제품/유당 제한 시험으로 반응을 확인하는 것이 적절하다. 본문에는 실제 아침 유제품 섭취가 명시되지 않았으므로 유당불내증이 확진되었다고 하거나 유제품과의 관계가 이미 입증되었다고 쓰지 않는다. 호전이 없으면 다른 원인과 검사 필요성을 재평가하며 영양 섭취를 유지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000632 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 본문에는 유제품 섭취가 제시되지 않았으므로 확정 관계를 삭제하고 B를 제한식 시험으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/diagnosis
- https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/eating-diet-nutrition

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000632
