---
type: qbank
schema_version: 1
id: medqa-us-train-000572
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d758246460fee34bf825fd37bc2c0e203e164b8ec172898d84b54d3fd60bfa66
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "anorexia nervosa"
  - "Vitamin K deficiency"
  - "Acute myelogenous leukemia"
  - "Missed miscarriage"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
  - MDkg7ZiI7JWhL-u5hO2DgOuvvCBLIOqysO2VjSAoVml0YW1pbiBLIERlZmljaWVuY3kpLm1k
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

신경성 식욕부진증(anorexia nervosa) 과거력이 있는 24세 여성이 과다 월경, 잇몸 출혈, 쉽게 멍이 드는 증상으로 내원하였다. 환자는 음식 섭취를 제한하여 체중을 감량하려고 노력 중이라고 한다. 지난 한 달 동안 재발성 부비동염으로 여러 차례 항생제 치료를 받았다. 다른 과거력이나 현재 복용 중인 약물은 없다. 성생활은 하지 않는다. 활력 징후는 체온 37.0°C, 혈압 90/60 mm Hg, 심박수 100회/분, 호흡수 16회/분이다. 체질량지수(BMI)는 16 kg/m2이다. 신체 검진상 사지의 반상출혈(ecchymosis), 건조한 점막, 잇몸 출혈이 관찰된다. 부인과 검진상 특이 소견은 없다. 검사실 검사 결과 프로트롬빈 시간(PT) 연장, 정상 부분 트롬보플라스틴 시간(PTT), 정상 출혈 시간(bleeding time)을 보였다. 전혈구검사(CBC)상 소구성 빈혈, 정상 혈소판 수, 정상 백혈구 수를 보였다. 소변 임신 검사는 음성이다. 이 환자의 상태에 대한 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 비타민 K 결핍
B. 급성 골수성 백혈병
C. 계류 유산
D. 신체적 학대

## 해설


섭취 제한과 반복 항생제 노출 뒤 출혈, 단독 PT 연장은 비타민 K 결핍(A)을 지지한다. 비타민 K는 II·VII·IX·X 및 protein C/S의 γ-carboxylation에 필요하다. 반감기가 짧은 VII 인자가 먼저 감소하면 초기에는 aPTT가 정상이어도 PT가 연장될 수 있다. 영양 공급 부족과 장내 세균 변화가 함께 기여할 수 있으며, 정상 혈소판과 출혈시간은 혈소판 수·기능 장애보다 응고인자 문제를 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000572 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비타민 K 의존인자를 외인성 경로에만 한정하는 표현을 초기 VII 인자 감소에 따른 PT 연장으로 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000572
