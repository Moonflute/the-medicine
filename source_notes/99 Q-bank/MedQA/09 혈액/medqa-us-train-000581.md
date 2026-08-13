---
type: qbank
schema_version: 1
id: medqa-us-train-000581
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf751bb4ed60c7f55d2132ea12b387ebf38282debd720ea79233d3f89ea4fef2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Acute lymphoid leukemia"
  - "Acute myeloid leukemia"
  - "Adult T cell leukemia"
  - "Chronic lymphocytic leukemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-unjOyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChDTEwpIChDaHJvbmljIEx5bXBob2N5dGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

69세 백인 남성이 정기 건강 검진을 위해 내원하였다. 환자는 건강하다고 느끼며, 유의미한 과거 병력은 없다. 수년간 가끔 발생하는 두통을 위해 아스피린을 복용하고 있다. 매일 운동하며 흡연은 하지 않는다. 환자의 아버지는 79세에 혈액암을 진단받았다. 환자의 활력 징후는 정상 범위 내에 있다. 신체 검진상 이상 소견은 없다. 검사실 검사 결과는 다음과 같다: 혈색소 14.5 g/dL, 백혈구 수 62,000/mm3, 혈소판 수 350,000/mm3. 말초 혈액 도말 검사를 시행하였다(이미지 참조). 다음 중 이 소견들을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 급성 림프구 백혈병
B. 급성 골수성 백혈병
C. 성인 T세포 백혈병
D. 만성 림프구 백혈병

## 해설


고령 남성의 백혈구 62,000/µL와 림프성 전형, 무증상인 경우는 만성 림프구 백혈병(CLL)과 일치한다. 다른 급성 백혈병은 증상이 심하고 혈소판 감소가 동반된다. 따라서 CLL이 가장 잘 설명한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000581
