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
answer: C
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

71세 남자가 정기 건강검진을 위해 내원했다. 특별한 증상은 없다. 고혈압과 위식도 역류질환이 있으며 메토프롤롤과 판토프라졸을 복용한다. 담배와 술은 하지 않는다. 체온은 37.3°C(99.1°F), 맥박은 75회/분, 혈압은 135/87 mmHg이다. 진찰에서 이상은 없다. 검사 결과는 다음과 같다.
헤마토크릿 43%
백혈구 수 32,000/mm³
분절 호중구 22%
호염기구 1%
호산구 2%
림프구 74%
단핵구 1%
혈소판 수 190,000/mm³
혈액도말에서 작고 성숙한 림프구와 여러 개의 스머지 세포가 보인다. 유세포분석 면역표현형검사에서 B세포가 CD19, CD20, CD23을 발현한다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 조혈모세포 이식
B. 전트랜스 레티노산
C. 관찰 및 추적관찰
D. 플루다라빈, 사이클로포스파미드, 리툭시맙

## 해설


무증상이며 빈혈·혈소판감소·큰 장기비대 등 활동성 질환 기준이 없는 CLL은 관찰/추적 C가 적절하다. 백혈구 수치만으로 항암을 시작하지 않는다. 치료는 B증상뿐 아니라 진행성 골수부전, 진행성/증상성 림프절·비장비대, 조절 안 되는 자가면역성 혈구감소 등 객관적 기준으로 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007027 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무증상 CLL의 관찰 C 유지; 치료 개시는 증상뿐 아니라 진행성 골수부전 등도 포함함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-acalabrutinib-venetoclax-chronic-lymphocytic-leukemia-or-small-lymphocytic-lymphoma

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007027
