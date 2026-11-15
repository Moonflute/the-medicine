---
type: qbank
schema_version: 1
id: medqa-us-train-005389
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73cb067c30807dfe94df47a56041af2c9f3572d688f708a755c79eb49816462f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "전기경련치료"
  - "역행성 기억상실"
  - "우울장애"
  - "Major depressive disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

중증 우울증으로 식사와 수분 섭취를 거의 못 하는 환자가 있다. 신체 상태를 안정시키고 있으며 여러 적절한 치료에도 호전이 없어 신속한 효과가 필요하다. 고려할 치료와 중요한 상담 내용은?

## 선택지

A. 경두개 자기자극만 가능하며 기억에 영향은 전혀 없다
B. 약물에 반응하지 않으므로 치료를 보류하고 관찰한다
C. 전기경련치료를 고려하고 치료 전후 기억에 영향이 있을 수 있음을 설명한다
D. 전기경련치료를 하면 과거 기억이 모두 영구적으로 사라진다고 설명한다

## 해설

치료저항성 중증 우울증이나 빠른 효과가 필요한 위중한 상황에서는 전기경련치료를 고려한다. 마취와 신체 위험을 평가하고, 일시적인 혼란이나 치료 전후 기억의 어려움을 설명한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005389
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
- https://pubmed.ncbi.nlm.nih.gov/41139602/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문 at greatest risk를 가장 심각/위험한 합병증으로 오역한 질문과 해설 수정. 역행성 기억상실 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
