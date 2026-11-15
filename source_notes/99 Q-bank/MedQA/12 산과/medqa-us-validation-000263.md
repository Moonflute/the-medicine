---
type: qbank
schema_version: 1
id: medqa-us-validation-000263
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3bdb400823e944d0475cec481cc17e4b1014e262b8d1ac87f341982f7d5201f1
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "당뇨병성 거대아"
  - "어깨난산"
  - "Erb 마비"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-qxsOuMgOyVhCAoTWFjcm9zb21pYSkubWQ
difficulty: complex
answer: A
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

임신 39주인 인슐린 치료 중 당뇨병 산모의 초음파에서 태아 예상 체중이 약 4,650 g이다. 태아는 두위이며 현재 진통은 없다. 분만 방법을 상담할 때 옳은 설명은?

## 선택지

A. 어깨난산 위험과 체중 추정 오차를 설명하고 계획 제왕절개를 고려한다
B. 당뇨병이 있으면 추정 체중 4,000 g 이상에서 모두 제왕절개한다
C. 태아가 두위이므로 예상 체중은 분만 계획에 반영하지 않는다
D. 어깨난산을 피하려면 예방적으로 흡입분만을 계획한다

## 해설

당뇨병 임신에서는 추정 태아 체중 4,500 g 이상일 때 어깨난산 위험 때문에 계획 제왕절개를 고려할 수 있다. 추정 오차와 수술의 이득·위해를 산모와 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 인슐린을 신생아 마비 치료로 오해하지 않도록 산모 혈당 관리의 예방 효과 설명.
- https://doi.org/10.2337/dc26-s002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000263
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/01/macrosomia
