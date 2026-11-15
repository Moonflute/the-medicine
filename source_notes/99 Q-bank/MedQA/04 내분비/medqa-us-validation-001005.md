---
type: qbank
schema_version: 1
id: medqa-us-validation-001005
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:cd528c51381895bdd6933b61dea3576dc78d10f8fbd9aacfd8c9c729b349c4e5
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "중추성 성조숙증"
  - "GnRH 자극검사"
  - "류프로라이드"
  - "Central precocious puberty"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7세 여아의 유방 발달이 4개월 만에 빠르게 진행했고 키 성장 속도와 골연령도 앞선다. GnRH 자극검사에서 사춘기 수준의 LH 반응이 확인됐다. 예상 성인 키가 감소하고 있다. 어떤 치료를 고려하는가?

## 선택지

A. 지속 작용 GnRH 작용제
B. 박동성 GnRH 투여
C. 성장호르몬 단독 투여
D. 치료 없이 월경이 시작될 때까지 관찰

## 해설


빠르게 진행하는 중추성 성조숙증에서 지속 작용 GnRH 작용제를 써 생식샘자극호르몬 분비를 억제한다. 진행 속도와 예상 성인 키를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001005 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지속GnRH agonist의 수용체 탈감작 기전으로 펌프 혼동 교정, 7세 CPP 모두 의무치료라는 과장 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001005
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10556443/
