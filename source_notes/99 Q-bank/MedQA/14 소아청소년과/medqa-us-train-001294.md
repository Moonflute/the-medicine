---
type: qbank
schema_version: 1
id: medqa-us-train-001294
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b303da48977fb7119ebdb9aa462d094f551615727a086326e5fdc7d6f6c2e55b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "intussusception"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8개월 영아의 장중첩증이 공기 관장으로 정복됐다. 이후 토하지 않고 편안해졌지만 집에서 소아 응급실까지 두 시간 넘게 걸리고, 밤에는 다시 올 수단이 없다. 가장 적절한 계획은?

## 선택지

A. 정복 확인 직후 귀가시킨다
B. 증상과 무관하게 관장을 반복한다
C. 재발을 막으려고 예방적 장절제술을 한다
D. 병원에서 관찰하며 수유와 증상 재발 여부를 확인한다

## 해설

정복 뒤 상태가 좋고 빠른 재내원이 가능하면 짧게 관찰한 뒤 퇴원을 검토할 수 있다. 이 사례처럼 응급 재내원이 어려우면 병원 관찰이 더 안전하다. 모든 아이에게 24시간 입원이 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정복 성공 후 먼 거주지 때문에 입원 관찰 C 유지. 모든 성공 정복에 24시간 입원이 필수라는 설명 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/intussusception_guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001294
- https://pubmed.ncbi.nlm.nih.gov/33158508/
