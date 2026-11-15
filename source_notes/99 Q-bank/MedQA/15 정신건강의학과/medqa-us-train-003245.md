---
type: qbank
schema_version: 1
id: medqa-us-train-003245
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4f3e782b453901bec58ca43c9b18ca2db793af4eaa67736a1c42a166ed6e6ea
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "attention-deficit/hyperactivity disorder"
  - "methylphenidate adverse effect"
  - "appetite suppression"
  - "atomoxetine"
  - "Attention-deficit hyperactivity disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOydmOugpSDqsrDtlY0g6rO864ukIO2WieuPmSDsnqXslaAgKEFESEQpLm1k
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BdG9tb3hldGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZXRoeWxwaGVuaWRhdGUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 청소년이 ADHD로 메틸페니데이트를 사용하던 중 식사를 조정하고 용량도 낮췄지만 식욕 저하와 체중 감소가 지속된다. 주치의와 함께 비자극제로 변경하기로 했다. 적절한 약은?

## 선택지

A. 덱스메틸페니데이트
B. 아토목세틴
C. 이미프라민
D. 디아제팜

## 해설

아토목세틴은 자극제를 견디기 어려운 ADHD 환자에게 고려하는 비자극제다. 아토목세틴도 식욕이나 심박수에 영향을 줄 수 있으므로 효과와 부작용을 계속 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003245
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200610632

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 아토목세틴을 비정신과 약으로 부른 오류와 식욕 부작용이 없는 듯한 설명 교정. 자극제 불내약 시 비자극성 선택 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng87/chapter/recommendations
