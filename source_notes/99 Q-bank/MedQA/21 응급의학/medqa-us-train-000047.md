---
type: qbank
schema_version: 1
id: medqa-us-train-000047
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:537e1d2d6571b66eaff386a266ea37993f41772653d65f7e7d253622439510c5
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "목 자상"
  - "열상"
  - "Traumatic carotid artery injury"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 지역 농산물 시장에서 목에 자상을 입은 후 응급실에 내원했습니다. 환자는 그 외에는 건강하며 통증을 호소하고 있습니다. 환자는 스스로 병력을 진술할 수 있습니다. 체온은 97.6°F (36.4°C), 혈압은 120/84 mmHg, 맥박은 90회/분, 호흡수는 15회/분, 실내 공기에서 산소포화도는 98%입니다. 신체 검진상 우측 유양돌기(mastoid process) 1cm 아래에 3cm 열상(laceration)이 관찰됩니다. 환자의 호흡음은 깨끗하며 기도(airway)를 보호하고 있습니다. 협착음(stridor)이나 호흡 곤란은 관찰되지 않습니다. 이 환자의 관리에서 다음으로 가장 적절한 단계는 무엇입니까?

## 선택지

A. CT 혈관조영술
B. 기관삽관
C. 관찰 및 혈압 모니터링
D. 수술적 탐색

## 해설

안정된 혈역학·보존된 기도와 명백한 즉시 수술 징후가 없는 경부 관통상에서는 혈관과 손상 경로를 평가하는 CTA(A)가 적절하다. 혈관 손상이 기도 손상 때문에 발생한다는 뜻은 아니다. 기도 악화·활동성 대량출혈 등 hard sign이 생기면 기도 확보·수술적 처치를 우선한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안정된 경부 관통상 CTA A의 이유를 존재하지 않는 기도 손상 증상 대신 혈관 평가로 수정하고 stridor 번역을 명확히 한다.
- 공식/학회 근거: https://www.facs.org/media/oxdjw5zj/imaging_guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000047
