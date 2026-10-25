---
type: qbank
schema_version: 1
id: medqa-us-train-005623
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c18cc678352683bd9ad6ec6e897c6805aea47e03592e3b73d13983f0baba103e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 B12 결핍"
  - "거대적아구성 빈혈"
  - "크론병"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

42세 여성이 지난 2개월 동안 점점 심해지는 피로와 업무 집중 곤란으로 내원했다. 고혈압이 있고 22년간 크론병을 앓았다. 과거 협착을 동반한 급성 악화로 여러 차례 입원 치료를 받았으나, 1년 넘게 의미 있는 위장관 증상은 없었다. 현재 메살라민, 티아지드 및 비소프롤롤을 복용 중이다. 체온은 37.2°C(99°F), 맥박은 분당 72회, 혈압은 140/90 mmHg이다. 복부는 부드럽고 결막이 창백하다. 직장검사는 정상이다. 검사에서 혈색소 9.4 g/dL, 평균 적혈구 용적 112 fL, 평균 적혈구 혈색소 37.2 pg/cell, 백혈구 8,700/mm³, 혈소판 150,000/mm³, 적혈구침강속도 42 mm/h, 혈청 페리틴 88 ng/mL, 철 117 μg/dL, 갑상선자극호르몬 3.2 μU/mL, 티록신 7 μg/dL가 확인되었다. 이 환자를 추가로 평가하면 다음 중 어떤 소견이 가장 잘 나타나는가?

## 선택지

A. 검은색 타르변
B. 설명되지 않는 체중 증가
C. 짙은 색 소변
D. 진동감각 저하

## 해설


Crohn병에서 회장 침범/절제 등에 따른 B12 흡수장애가 가능하고 거대적혈구성 빈혈과 신경증상의 연관으로 선택지 D의 진동감각 저하가 가장 부합한다. 엽산 부족·약물 등 다른 원인도 가능하므로 실제 B12/엽산을 확인한다. 모든 Crohn의 거대적혈구 빈혈이 B12 결핍이라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005623 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Crohn의 모든 거대적아구성 빈혈이 B12라는 일반화를 교정; 회장성 흡수장애와 진동감각 D 연결 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005623
