---
type: qbank
schema_version: 1
id: medqa-us-validation-000847
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3f39f90c5f41cde63bf60583de219aa62afa8da18d6dad1c1d3eb9f3290f2018
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병 보인자"
  - "상염색체 열성 유전"
  - "유전상담"
  - "Sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: prognosis
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

겸상적혈구병 보인자인 부부가 임신을 계획하고 있다. 두 사람 모두 증상이 없지만 겸상적혈구 유전자 사본 하나씩을 가지고 있다. 자녀가 겸상적혈구빈혈 없이 태어날 확률은?

## 선택지

A. 1/2
B. 3/4
C. 1/4
D. 2/3

## 해설


두 보인자(각각 1개의 돌연변이 대립유전자) 사이에서 자녀는 25% 정상, 50% 보인자, 25% 겸상빈혈이 된다. 따라서 겸상빈혈 없이 태어날 확률은 75%인 3/4이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000847
