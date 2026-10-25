---
type: qbank
schema_version: 1
id: medqa-us-train-007134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eea54b6be03d86cb71604f174d0cc6e5f212cffdb6b71acd7da4b645c0032a16
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철적아구성 빈혈"
  - "소구성 빈혈"
  - "철 과다"
  - "고리 철적아구"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

그 외에는 건강한 42세 남자가 헌혈 전 정기검사를 받았다. 전혈구검사 결과는 다음과 같다.
헤모글로빈 9.3 g/dL
평균 적혈구 용적 71 µm³
평균 적혈구 혈색소량 21 pg/세포
백혈구 수 8,200/mm³
혈소판 수 317,000/mm³
철 검사:
혈청 철 210 μg/dL
혈청 페리틴 310 ng/mL
총 철결합능 290 μg/dL
트랜스페린 포화도 78%
가끔 술을 마시며 흡연과 불법 약물 사용은 부인한다. 형과 외삼촌에게 빈혈 가족력이 있다. 결막이 창백하지만 그 외 진찰은 정상이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 만성질환 빈혈
B. 혈색소침착증
C. 골수이형성증후군
D. 철적아구성 빈혈

## 해설


가족성 소구성 빈혈과 높은 iron/ferritin은 헴 합성 장애의 유전성 sideroblastic anemia D를 고려하게 한다. Hemochromatosis도 높은 철포화도를 보이지만 이 소구성 빈혈 자체를 더 잘 설명하는 것은 D다. 골수 철염색/유전 및 후천 원인 검사가 필요하고 수치만으로 확진하지 않는다. 원문210/290 계산 TSAT는 약72%여서 제시78%와 차이가 있음을 원자료에서 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007134 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철패널과 빈혈의 sideroblastic D 추론 유지; TSAT 계산 불일치 및 확진 필요를 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007134
