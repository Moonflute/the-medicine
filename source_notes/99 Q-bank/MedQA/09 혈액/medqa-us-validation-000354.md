---
type: qbank
schema_version: 1
id: medqa-us-validation-000354
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3f083878ad23fa2b092646cb67de3ff59237d43fe805635bdd30b641d161f845
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "헤파린 유발 혈소판감소증"
  - "혈소판인자 4"
  - "혈전증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: mechanism
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

비분획 헤파린 투여 6일째 혈소판이 19만에서 8만/μL로 감소하고 새 대퇴정맥혈전이 생겼다. 헤파린 유발 혈소판감소증에서 혈소판 감소와 혈전이 함께 생기는 기전은?

## 선택지

A. 비타민 K 의존 응고인자 합성 저하
B. 헤파린-혈소판인자 4 복합체에 대한 IgG가 혈소판을 활성화
C. 활성화 단백질 C 저항성에 의한 응고인자 V의 분해 장애
D. 제VIII인자에 대한 항체가 지혈을 억제

## 해설


면역성 헤파린 유발 혈소판감소증에서 항체가 혈소판과 응고계를 활성화한다. 혈소판이 줄어도 임상적으로 출혈보다 혈전 위험이 중요한 이유다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000354 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Heparin5일 뒤 혈소판 >50% 감소와 혈전확장은 면역 HIT B. 전혀 무관한 poison ivy/clobetasol 해설을 PF4-heparin 항체 기전으로 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000354
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/
