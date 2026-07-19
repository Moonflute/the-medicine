---
type: qbank
schema_version: 1
id: medqa-us-train-000425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96d12760f041be42ce4acaccaa3d0d8ad2a9250fbc3250f3ca2cab7b5e6bea43
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "asthma"
  - "proteinuria"
  - "microscopic hematuria"
  - "eosinophilia"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 남성이 악화되는 기침과 천식으로 일차 진료 의사를 방문했다. 환자는 1개월 전 감기에 걸리기 전까지는 평소 건강 상태였다고 보고했다. 그 이후 감기는 호전되었으나 기침과 천식 증상 악화가 지속되고 있다. 환자는 증상 완화 흡입기(rescue inhaler)를 하루 3회 사용하고 있으나 거의 호전이 없다고 말한다. 그는 회계 시험을 준비 중이며 천식 때문에 밤에 잠을 이루지 못하고 낮 동안 집중하기 어렵다고 한다. 환자는 흡연 사실을 인정했다. 흡연량은 17세부터 하루 반 갑이었으나, 시험 스트레스를 해소하기 위해 지난 한 달 동안 하루 1갑으로 증가했다. 환자의 체온은 99°F(37.2°C), 혈압은 110/74 mmHg, 맥박은 75회/분, 호흡수는 15회/분이며 실내 공기에서 산소 포화도는 97%이다. 신체 검진상 양측 폐에서 경미한 호기성 천명음(expiratory wheezes)이 관찰된다. 검사 결과는 다음과 같다: 혈청: Na+: 144 mEq/L, Cl-: 95 mEq/L, K+: 4.3 mEq/L, HCO3-: 23 mEq/L, 요소 질소(Urea nitrogen): 24 mg/dL, 포도당: 100 mg/dL, 크레아티닌: 1.6 mg/dL. 백혈구 수 및 감별 계산: 백혈구 수: 13,000/mm^3, 분엽핵 호중구: 63%, 호산구: 15%, 호염기구: < 1%, 림프구: 20%, 단핵구: 1.3%, 헤모글로빈: 13.5 g/dL, 헤마토크릿: 50%, 혈소판: 200,000/mm^3. 소변 검사에서 단백뇨와 현미경적 혈뇨가 확인되었다. 다음 중 이 환자의 가장 가능성 높은 진단과 관련된 것은 무엇인가?

## 선택지

A. c-ANCA 수치
B. IgA 침착
C. p-ANCA 수치
D. 흡연

## 해설


천식 환자에서 호산구 증가와 단백뇨·혈뇨가 동반될 경우 알레르기성 혈관염인 Churg‑Strauss(현재 eosinophilic granulomatosis with polyangiitis)와 연관된 p‑ANCA 양성이 흔히 나타난다. 따라서 p‑ANCA 검사가 가장 관련 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000425
