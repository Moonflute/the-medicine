---
type: qbank
schema_version: 1
id: medqa-us-validation-000659
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2bde2977949c66dc161c05d82bdac2a50035cefc8c59e3a4876a945f958a736a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "손발톱밑 선상출혈"
  - "오슬러 결절"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: B
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

인공판막이 있는 환자가 2주 동안 열이 나고 새로운 심잡음이 들린다. 활력징후는 안정적이고 아직 항생제를 투여하지 않았다. 심초음파를 준비하며 항생제 투여 전에 우선 할 일은?

## 선택지

A. 혈액배양 한 세트만 채취하고 발열이 다시 나타날 때까지 기다린다
B. 각각 독립적으로 채취한 혈액배양 세 세트를 확보한다
C. 항생제부터 투여하고 다음 날 처음으로 혈액배양을 채취한다
D. 혈액배양은 심초음파에서 증식물이 확인된 뒤 채취한다

## 해설


안정적인 심내막염 의심 환자에서는 항생제 전에 여러 세트의 혈액배양을 채취한다. 불안정한 환자에서는 배양 준비가 필요한 치료를 지연시키지 않도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000659 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IE 의심 시 항생제 전 blood cultures C 유지. 심초음파가 배양 결과 뒤에만 가능하다는 잘못된 순서 강제 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107?searchresult=1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000659
- https://doi.org/10.1093/eurheartj/ehad193
