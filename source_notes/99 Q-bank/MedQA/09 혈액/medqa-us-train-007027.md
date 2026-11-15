---
type: qbank
schema_version: 1
id: medqa-us-train-007027
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ee8f9e1f3c2ec1fd8340bc251a9fe6cb8e6bf110fc6c44f2f4b2586de0a3749
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성 림프구성 백혈병"
  - "스머지 세포"
  - "무증상 초기 CLL"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChDTEwpIChDaHJvbmljIEx5bXBob2N5dGljIExldWtlbWlhKS5tZA
question_type: management
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
---

# MedQA US 임상문제

## 문제

확진된 만성 림프구성 백혈병 환자의 백혈구가 32,000/μL다. 수개월간 수치가 안정적이며 빈혈, 혈소판감소, 큰 림프절이나 비장비대, 발열·야간발한·체중감소는 없다. 적절한 처치는?

## 선택지

A. 백혈구 수만 보고 표적치료를 시작한다
B. 정기 진찰과 혈구검사로 관찰한다
C. 장기 고용량 스테로이드를 예방적으로 투여한다
D. 조혈모세포이식을 즉시 시행한다

## 해설


치료가 필요한 활동성 질환 소견이 없는 만성 림프구성 백혈병은 정기적으로 관찰한다. 백혈구 수만으로 항암 치료를 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007027 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무증상 CLL의 관찰 C 유지; 치료 개시는 증상뿐 아니라 진행성 골수부전 등도 포함함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-acalabrutinib-venetoclax-chronic-lymphocytic-leukemia-or-small-lymphocytic-lymphoma

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007027
- https://doi.org/10.1002/hem3.70403
