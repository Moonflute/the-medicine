---
type: qbank
schema_version: 1
id: medqa-us-train-000386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e9ee4c58cbdccecbfe7c0c6b1e61f3bfe30aa2a62b825fd6eafb8bbd28a934a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "diabetes mellitus type II"
  - "hypertension"
  - "non-seminomatous testicular cancer"
  - "hypercholesterolemia"
  - "lymphadenopathy"
  - "splenomegaly"
  - "Acute lymphocytic leukemia"
  - "Acute myelogenous leukemia"
  - "Chronic lymphocytic leukemia"
  - "Hairy cell leukemia"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
  - MDQg64K067aE67mEL-qwgOyhseyEsSDqs6DsvZzroIjsiqTthYzroaTtmIjspp0gKEZhbWlsaWFsIEh5cGVyY2hvbGVzdGVyb2xlbWlhKS5tZA
  - MDkg7ZiI7JWhL-unjOyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChDTEwpIChDaHJvbmljIEx5bXBob2N5dGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

71세 남성이 피로와 권태감이라는 비특이적 증상으로 일차 진료 클리닉에 내원했다. 과거력상 제2형 당뇨병, 고혈압, 비정상피종성 고환암(non-seminomatous testicular cancer), 고콜레스테롤혈증이 있다. 현재 하루에 담배 1갑을 피우고, 하루에 와인 한 잔을 마시며, 현재 불법 약물 사용은 부인한다. 활력 징후는 체온 36.7°C, 혈압 126/74 mm Hg, 심박수 87회/분, 호흡수 17회/분이다. 진찰 결과, 양측 경부 및 서혜부 림프절병증과 비장비대가 관찰되었다. 환자는 지난 6개월 동안 식단이나 운동 변화 없이 18.1 kg의 체중이 감소했다고 언급했으며, 처음에는 이에 대해 걱정하지 않았다고 했다. 의사는 전혈구검사(CBC)를 처방하고 유세포분석(flow cytometry)을 추가했다. 환자의 연령과 전반적인 역학을 고려할 때, 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 급성 림프구 백혈병
B. 급성 골수성 백혈병
C. 만성 림프구 백혈병
D. 털세포 백혈병(Hairy cell leukemia)

## 해설


고령 환자의 림프절병증·비장비대와 체중 감소는 선택지 중 만성 림프구성 백혈병(C)을 지지한다. 확진에는 혈구검사와 유세포분석으로 클론성 B림프구를 확인한다. CLL을 모든 성인 림프구성 악성종양 중 가장 흔하다고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000386`와 직접 대조했다.
- 판정: 고령의 림프절병증·비장비대에서 CLL C 유지. 성인 전체 림프구성 악성종양 중 가장 흔하다는 잘못된 역학 일반화 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/cll-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000386
