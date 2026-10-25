---
type: qbank
schema_version: 1
id: medqa-us-test-001001
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:21de5f6b89ddc2b84dafc494f4609d2cc91e7d23019b674256be118456333b03
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 B12 결핍"
  - "거대적아구성 빈혈"
  - "채식주의"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

65세 남성이 6개월간 반복되는 낙상, 자세성 어지러움, 점점 심해지는 피로와 전신 쇠약, 13.6 kg(30 lb) 체중 감소로 진료를 받으러 왔다. 채식주의자이며 가족은 과거 고기능적이었지만 지난 1년간 행동 변화가 컸다고 했다. 혈압 90/50 mmHg, 맥박 92회/분, 호흡 16회/분, 체온 37.0°C(98.6°F)였고 흐트러진 외모, 과민성, 편집증과 망상이 있었지만 환각은 부인했다. 불안정한 넓은 보폭 보행과 Hb 6.1 g/dL, MCV 109 fL, 혈소판 90,000/mm³, 백혈구 3,000/mm³, 망상적혈구 0.8%, 과분엽 호중구가 보였다. 내인자 항체는 음성이었다. 상태의 가장 가능성 높은 원인은?

## 선택지

A. 갑상선기능저하증
B. 엽산 결핍
C. 비타민 B12 결핍
D. 파보바이러스 감염

## 해설


거대적아구성 빈혈 소견에 보행실조·신경정신 증상과 채식 식이가 동반되어 B12 결핍(C)이 엽산 결핍보다 타당하다. 항내인자항체 음성은 식이성 B12 결핍을 배제하지 않으며 모든 거대적아구성 빈혈이 B12 때문인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001001 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경정신증상·거대적아구성 범혈구감소와 B12 C 유지. 모든 거대적아구성 빈혈이 B12 때문이라는 일반화 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001001
