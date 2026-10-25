---
type: qbank
schema_version: 1
id: medqa-us-train-005436
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2601029b5e654bd4eb3a104debd987f906493bf571cecbf37b50488b1d03ed82
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "메켈 게실"
  - "소아 위장관 출혈"
  - "테크네튬-99m 스캔"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

철결핍성 빈혈이 철분치료에 반응하지 않는 14개월 남아가 반복적으로 대변잠혈 양성이고 혈변이 있어 내원했다. 가장 가능성 높은 질환의 진단 표준검사는?

## 선택지

A. 조영 복부 CT
B. 표지 적혈구 검사
C. 테크네튬-99m 퍼테크네테이트 스캔
D. 대장내시경

## 해설

영유아의 반복 하부 위장관 출혈·불응 철결핍빈혈은 Meckel 게실을 시사한다. 보기 중 Tc-99m pertechnetate 스캔(C)은 이소성 위점막에 섭취되는 성질을 이용한다. 표지 적혈구 검사와 달리 단순히 활동성 출혈 부위만 추적하는 검사가 아니며, 이소성 위점막이 없는 게실에서는 음성일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Pertechnetate가 출혈 자체가 아니라 이소성 위점막을 검출한다는 기전으로 교정.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005436
