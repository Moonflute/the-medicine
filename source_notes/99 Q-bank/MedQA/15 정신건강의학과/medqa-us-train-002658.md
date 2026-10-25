---
type: qbank
schema_version: 1
id: medqa-us-train-002658
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4e694457228266e01b1c7b4abc0c4b327c60aaedc67b4aedbbd149e277a8dea
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "treatment-resistant schizophrenia"
  - "clozapine"
  - "antipsychotic failure"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 9개월간 청각환각과 피해망상을 경험해 조현병으로 진단받았다. 이후 1년 동안 올란자핀, 쿠에티아핀, 리스페리돈을 적절한 용량으로 각각 시도했지만 증상 호전이 없었다. 다음 중 가장 효과적인 치료는?

## 선택지

A. 아리피프라졸
B. 할로페리돌
C. 클로자핀
D. 인지행동치료

## 해설

적절한 용량과 기간, 복약 순응도를 확인한 서로 다른 항정신병약 치료에도 증상이 지속되면 치료저항성 조현병을 고려하며 클로자핀이 권고되는 선택이다. 이 사례에서는 여러 적정 용량 치료에 실패해 제시된 선택지 중 클로자핀이 적절하다. 아리피프라졸과 할로페리돌을 이미 시도해 실패했다는 정보는 없으며, CBT는 보조할 수 있지만 이 상황에서 클로자핀 약물치료를 대체하는 답은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002658

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 치료저항성 조현병에 클로자핀 정답 유지. 시도하지 않은 다른 선지 약물도 이미 실패했다고 한 오류 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/Guidance/CG178/chapter/recommendations
