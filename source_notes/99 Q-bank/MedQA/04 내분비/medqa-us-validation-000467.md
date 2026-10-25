---
type: qbank
schema_version: 1
id: medqa-us-validation-000467
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dd566064cc657a143b641577853601edb6cf3ed05d68b7c86d0b139a9183d172
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선기능항진증"
  - "그레이브스병"
  - "베타차단제"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: complex
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
---

# MedQA US 임상문제

## 문제

45세 여성이 체중감소와 불안으로 진료를 받으러 왔다. 6개월 동안 식욕이 증가했는데도 10파운드가 빠졌고, 심장이 가슴 밖으로 뛰쳐나올 듯한 두근거림이 3회 있었다. 맥박 106회/분, 경미한 양측 안구돌출과 양측 3+ 심부건반사 항진이 있다. 상태의 초기 치료로 가장 적절한 것은?

## 선택지

A. 아데노신
B. 요오드화칼륨
C. 프로프라놀롤
D. 갑상선절제술

## 해설


정답 C. 빈맥·심계항진과 불안이 있는 갑상선중독증 의심 환자에서 금기가 없다면 propranolol로 교감신경 증상을 우선 완화할 수 있다. 이는 Graves의 호르몬 과다 생성 원인을 제거하는 치료가 아니므로 갑상선 기능 확인과 원인별 치료를 별도로 계획한다. 즉시 수술이나 adenosine을 선택할 임상 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000467 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: propranolol C는 초기 증상조절이며 질병 원인치료 자체와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1089/thy.2016.0229

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000467
