---
type: qbank
schema_version: 1
id: medqa-us-train-003162
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:099fd30f0e15431665b2185c5fbc3c6e5cff4a026b5ad368a877551d5e6b49d7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "central precocious puberty"
  - "precocious puberty"
  - "GnRH stimulation test"
  - "advanced bone age"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 여아의 유방 발달이 수개월 사이 진행하고 키가 빨리 자랐다. 골연령은 10세로 앞서지만 기저 LH는 낮다. 중추성 성조숙증을 확인할 다음 검사는?

## 선택지

A. 뇌 MRI
B. GnRH 자극검사
C. 골반 초음파만 시행
D. 혈청 DHEA-S만 측정

## 해설

기저 LH가 낮아도 임상 소견이 뚜렷하면 중추성 성조숙증을 배제할 수 없다. 국내 지침은 진행 양상과 골연령을 함께 보고 GnRH 자극에 대한 LH 반응으로 확인하도록 권고한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 낮은 기저 LH와 빠른 임상 진행에서 자극검사를 선택하는 이유를 2026 지침으로 확인. 모든 성조숙증의 필수검사라는 과잉 일반화를 교정.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003162
- https://pubmed.ncbi.nlm.nih.gov/37798893/
