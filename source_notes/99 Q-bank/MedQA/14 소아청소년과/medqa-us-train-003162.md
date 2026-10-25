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

7세 여아가 2일 동안 질 출혈로 내원했다. 키는 95백분위수, 체중은 90백분위수이고 진찰에서 유방이 커지고 유륜과 유두에 이차 융기가 형성되어 있으며 허벅지 안쪽까지 뻗지 않는 굵은 음모가 있다. 왼손과 손목 X선에서 골연령은 11세이고 혈청 LH는 0.1 mIU/mL이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 뇌 MRI
B. 골반 초음파
C. GnRH 자극검사
D. 혈청 디하이드로에피안드로스테론 수치

## 해설

7세의 진행한 유방 발달·출혈과 골연령 증가는 조기 사춘기 평가가 필요하다. 기저 LH가 낮더라도 중추성 성조숙증을 배제하지 못하므로, 임상 의심이 강한 이 경우 GnRH 자극검사(C)가 적절하다. 기저 LH만으로 충분히 확인되는 환자까지 모두 자극검사를 받아야 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 낮은 기저 LH와 빠른 임상 진행에서 자극검사를 선택하는 이유를 2026 지침으로 확인. 모든 성조숙증의 필수검사라는 과잉 일반화를 교정.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003162
