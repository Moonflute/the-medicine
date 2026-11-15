---
type: qbank
schema_version: 1
id: medqa-us-test-001023
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bc1877915b21608b94453916bfe63acd4a191e005c36c7b4eb59b22c891e999e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 오피오이드 금단"
  - "신생아 금단 증후군"
  - "코데인"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yLoOyDneyVhCDquIjri6gg7Kad7ZuE6rWwIChOZW9uYXRhbCBBYnN0aW5lbmNlIFN5bmRyb21lKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 중 오피오이드에 노출된 신생아가 떨림·발한과 심한 보챔을 보였다. 감염과 저혈당 등은 평가했다. 조용한 환경과 부모 동실, 포대기와 잦은 수유에도 충분히 먹거나 잠들지 못하고 달래기 어렵다. 다음 처치는?

## 선택지

A. 저자극·수유 지원을 중단하고 격리
B. 날록손으로 금단을 치료
C. 비약물 지원만 같은 방식으로 하고 기능은 재평가하지 않음
D. 신생아 금단 평가에 따라 경구 모르핀 등 약물 치료를 고려

## 해설

오피오이드 금단은 수유·수면·달래기 등 기능을 보면서 비약물 지원을 먼저 최적화한다. 그래도 기능 저하가 지속되면 평가에 따라 오피오이드 제제를 사용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중증 신생아 오피오이드 금단의 경구 모르핀 A 유지. 모든 노출아 즉시 약물이라는 해석을 방지.
- https://cps.ca/en/documents/position/nas-nows

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001023
- https://www.nejm.org/doi/full/10.1056/NEJMoa2214470
