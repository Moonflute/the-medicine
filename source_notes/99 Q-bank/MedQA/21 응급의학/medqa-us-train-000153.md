---
type: qbank
schema_version: 1
id: medqa-us-train-000153
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4ff6b3985632afe3ba63fbeb5a3de6ed8da9e8f253b8608cb0061b2b0e3835f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "diabetes"
  - "hypertension"
  - "osteoarthritis"
question_type: management
difficulty: complex
answer: A
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

65세 남성이 수술 전 평가를 위해 일차 진료 의사를 방문했다. 그는 3주 후에 백내장 수술이 예정되어 있다. 과거 병력으로는 당뇨병, 고혈압, 우측 무릎의 중증 골관절염이 있다. 복용 중인 약물은 메트포르민(metformin), 하이드로클로로티아자이드(hydrochlorothiazide), 리시노프릴(lisinopril), 아스피린(aspirin)이다. 외과 의사가 1개월 전에 시행한 혈액 검사 결과는 혈색소 14.2 g/dL, INR 1.2, 당화혈색소(HbA1c) 6.9%였다. 내원 당시 활력 징후는 혈압 130/70 mmHg, 맥박 80회/분, 호흡수 12회/분, 체온 37.2 C였다. 현재 환자는 호소하는 증상이 없으며 수술을 받기를 간절히 원하고 있다. 이 환자에게 현재 가장 적절한 조치는 무엇인가?

## 선택지

A. 환자의 수술을 의학적으로 승인한다
B. 심전도(EKG)를 시행한다
C. 부하 검사(stress test)를 예약하고 최소 6개월 동안 수술을 연기하도록 요청한다
D. 환자에게 최소 1년 동안 수술을 연기해야 한다고 말한다

## 해설


환자는 현재 혈압·심박동·혈액검사 모두 정상이며, 수술 전 평가에서 큰 위험 인자는 없었다. 추가 검사는 필요 없으며, 수술을 진행해도 된다. 따라서 정답은 수술을 의학적으로 승인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000153
