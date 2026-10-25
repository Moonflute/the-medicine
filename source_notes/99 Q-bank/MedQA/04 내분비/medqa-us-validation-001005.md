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

7세 여아가 또래보다 신체적으로 성숙해 보인다는 어머니의 걱정으로 진료를 받으러 왔다. 유방 발달과 치모가 있고, 성선자극호르몬방출호르몬(GnRH) 자극 후 황체형성호르몬(LH)이 증가한다. 갑상선 기능검사와 뇌 MRI는 정상이다. 이 상태에 대한 가장 적절한 치료는?

## 선택지

A. 류프로라이드
B. 피나스테리드
C. 옥트레오타이드
D. 아나스트로졸

## 해설


정답 A. GnRH 자극 후 LH 반응과 이른 유방발달은 중추성 성조숙증을 지지한다. 치료가 필요한 진행성 CPP에서는 지속 작용 GnRH agonist leuprolide가 수용체 탈감작을 통해 LH/FSH를 억제한다. 이는 생식축을 자극하는 박동성 GnRH pump와 다르다. 특히 7세의 서서히 진행하는 경우 이득이 제한될 수 있어 성장속도·골연령·예상성인키·선호를 평가해 치료 여부를 개별화한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001005 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지속GnRH agonist의 수용체 탈감작 기전으로 펌프 혼동 교정, 7세 CPP 모두 의무치료라는 과장 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001005
