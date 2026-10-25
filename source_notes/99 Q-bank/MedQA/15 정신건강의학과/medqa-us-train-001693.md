---
type: qbank
schema_version: 1
id: medqa-us-train-001693
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ecdec954a18bebf86c7c2b1242848ce0ca74d0bebae852557b15db27f7380c5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "recurrent depression"
  - "electroconvulsive therapy"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 6주 동안 우울한 기분으로 내원했다. 잠들기 어렵고 식욕이 감소했으며 개인관계에 대한 강한 죄책감이 있다. 모든 것이 예전보다 느리게 느껴지고 지난해에도 4주 동안 비슷한 기간이 있었다. 자해나 타해 생각, 사고비약 또는 과대망상은 없다. 다음 중 1차 치료로 부적절한 것은 무엇인가?

## 선택지

A. 심리치료
B. 시탈로프람
C. 전기경련치료
D. 설트랄린

## 해설

이 사례에는 즉각적인 생명위험이나 빠른 반응이 필요한 심한 우울증의 특징이 제시되지 않아, 제시된 선택지 중 전기경련치료는 통상적인 초기 선택이 아니다. 심리치료나 SSRI를 고려한다. 다만 전기경련치료가 언제나 약물·심리치료 실패 후에만 가능한 것은 아니며, 심각한 자살위험·생명위협적인 섭취 거부 등 빠른 반응이 필요한 상황에서는 초기에도 고려할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001693

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 이 사례에서 ECT가 초기 선택이 아닌 것은 유지. 모든 상황에서 약물 실패 후 2차만 가능하다는 오류 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
