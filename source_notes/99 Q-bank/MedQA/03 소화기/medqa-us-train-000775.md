---
type: qbank
schema_version: 1
id: medqa-us-train-000775
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:455f5d3210a31b5867ba1e4dd01fdb0fd142c2dc2f2871c06eb39d39827ce480
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "alcoholic liver disease"
  - "ischemic liver disease"
  - "acute renal failure"
  - "fulminant liver failure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_slYzsvZTsmKzshLEg6rCE7KeI7ZmYIChBbGNvaG9saWMgTGl2ZXIgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_soITqsqnshLEg6rCE7Je8IChGdWxtaW5hbnQgSGVwYXRpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

45세 노숙인 남성이 경찰에 의해 응급실로 이송되었습니다. 그는 도서관에서 술에 취해 의식을 잃은 채 발견되었습니다. 환자의 과거력상 정맥 약물 남용, 당뇨병, 알코올 남용, 영양실조가 있습니다. 환자는 이전에 췌장염과 패혈증으로 여러 차례 입원한 적이 있습니다. 현재 환자는 반응이 거의 없으며 통증 자극에 사지를 움츠리기만 합니다. 체온은 99.5°F(37.5°C), 혈압은 90/48 mmHg, 맥박은 150/min, 호흡은 17/min, 실내 공기에서 산소 포화도는 95%입니다. 신체 검진상 빈맥, 좌측 하부 흉골연의 확장기 잡음, 폐 검진상 양측 수포음이 관찰됩니다. 환자에게 정맥 수액, 반코마이신, 피페라실린-타조박탐 투여를 시작했습니다. 아래와 같이 검사 결과가 나왔습니다. 혈색소: 9 g/dL, 헤마토크릿: 30%, 백혈구 수: 11,500/mm^3(정상 감별 계산), 혈소판 수: 297,000/mm^3. 혈청: Na+: 139 mEq/L, Cl-: 100 mEq/L, K+: 4.0 mEq/L, HCO3-: 28 mEq/L, BUN: 33 mg/dL, 포도당: 60 mg/dL, 크레아티닌: 1.7 mg/dL, Ca2+: 9.7 mg/dL, PT: 20초, aPTT: 60초, AST: 1,010 U/L, ALT: 950 U/L. 환자는 내과 병동에 입원했습니다. 5일 후, 환자의 신경학적 상태는 호전되었습니다. 체온은 99.5°F(37.5°C), 혈압은 130/90 mmHg, 맥박은 90/min, 호흡은 11/min, 실내 공기에서 산소 포화도는 99%입니다. 아래와 같이 검사 결과가 다시 확인되었습니다. 혈색소: 10 g/dL, 헤마토크릿: 32%, 백혈구 수: 9,500/mm^3(정상 감별 계산), 혈소판 수: 199,000/mm^3. 혈청: Na+: 140 mEq/L, Cl-: 102 mEq/L, K+: 4.3 mEq/L, HCO3-: 24 mEq/L, BUN: 31 mg/dL, 포도당: 100 mg/dL, 크레아티닌: 1.6 mg/dL, Ca2+: 9.0 mg/dL, PT: 40초, aPTT: 90초, AST: 150 U/L, ALT: 90 U/L. 다음 중 이 환자의 현재 상태를 가장 잘 설명하는 것은 무엇입니까?

## 선택지

A. 급성 알코올성 간질환으로부터의 회복
B. 허혈성 간질환으로부터의 회복
C. 급성 신부전
D. 전격성 간부전

## 해설


PT가 40초로 크게 연장된 것은 급성 간부전(전격성 간부전)으로, 간 기능 회복이 아닌 급성 간부전이 진행 중임을 의미한다. 따라서 가장 잘 설명하는 것은 전격성 간부전이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000775
