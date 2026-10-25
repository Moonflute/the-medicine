---
type: qbank
schema_version: 1
id: medqa-us-train-007124
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58895417c21058a6477b85c0f6e6a3eef8d08589886afc4e800f51d655bedc84
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "악성빈혈"
  - "비타민 B12 결핍"
  - "내인자 항체"
  - "거대적아구성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

65세 남자가 6개월 동안 반복되는 낙상, 자세성 어지럼, 점점 심해지는 피로와 전신 쇠약, 13.6kg(30lb)의 체중 감소로 병원에 내원했다. 채식주의자이다. 가족들은 지난 1년 동안 행동이 크게 변했다고 호소한다. 흡연, 음주, 불법 약물 사용은 부인한다. 특별한 가족력은 없다. 초기 진찰에서 창백하고 마른 체격의 남자가 보인다. 과민하고 편집증적이며 망상이 있지만 환각은 부인한다. 혈압은 100/60 mmHg, 심박수 92회/분, 호흡수 16회/분, 체온 36.1℃(97℉)이다. 불안정하고 보폭이 넓은 실조성 보행이 있다. 항-내인자 항체 검사는 양성이다. 검사 결과는 다음과 같다.
헤모글로빈 6.1 g/dL
평균 적혈구 용적 99 fL
혈소판 수 900,000/mm³
총 백혈구 수 3,000/mm³
망상적혈구 0.8%
말초혈액도말 사진이 제시되어 있다. 이 환자의 상태를 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 갑상선기능저하증
B. 엽산 결핍
C. 악성빈혈
D. 알코올중독

## 해설


신경인지/보행 이상과 anti-IF 항체 양성은 자가면역 위염 관련 B12 결핍(악성빈혈) C를 지지한다. B12/folate 결핍은 거대적아구성, 갑상선저하와 음주는 거대적혈구성 빈혈을 일으킬 수 있어 MCV 감소가 전형적이라고 설명하면 안 된다. 현재 MCV99는 경계 수준이며 원문 혈소판900,000/µL는 전형적 B12 결핍성 범혈구감소와 달라 별도 원인·수치 확인이 필요하다. 없는 도말을 관찰했다고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007124 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B12·folate·갑상선·알코올의 MCV 방향을 반대로 설명한 오류 교정; 원문900k 혈소판은 비전형임을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007124
