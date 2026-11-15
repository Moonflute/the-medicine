---
type: qbank
schema_version: 1
id: medqa-us-test-001193
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4938b8afcbeaa60ea12462a93ff01631ae703f4ed74ec42e237143797c7802f7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 식욕부진증"
  - "저체중 왜곡"
  - "인지행동치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
difficulty: standard
answer: B
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

15세 청소년이 신경성 식욕부진증으로 진단됐다. 초기 신체 평가에서 입원이 필요한 불안정은 없다. 보호자가 치료에 함께 참여할 수 있다. 영양·신체 상태를 추적하면서 우선 제안할 심리치료는?

## 선택지

A. 항우울제를 사용하며 일반 상담만 시행
B. 섭식장애에 초점을 맞춘 가족기반치료
C. 식사와 체중 회복은 다루지 않는 이완 훈련
D. 식욕촉진제 단독 치료

## 해설

청소년 신경성 식욕부진증에서는 보호자가 비난 없이 안전한 식사와 영양 회복을 돕는 가족기반치료가 일차 선택 중 하나다. 신체와 영양 상태는 함께 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001193
- https://www.nice.org.uk/guidance/ng69/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/36722117/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 장기 CBT 정답 유지. 불안정한 활력징후에서 즉각적 신체 안정화·영양 치료가 불필요하다는 인상을 제거하고 단일 최우수 단정 완화.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng69/chapter/Recommendations
