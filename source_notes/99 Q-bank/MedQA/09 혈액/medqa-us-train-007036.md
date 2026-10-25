---
type: qbank
schema_version: 1
id: medqa-us-train-007036
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f06be7e4d3389c9383e12ac39d7817d18073fd276bbe0904e7dd598812972245
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 골수성 백혈병"
  - "다우노루비신"
  - "안트라사이클린 심근병증"
  - "좌심실 기능장애"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: prognosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

이전에 건강했던 46세 여자가 3개월간 지속된 피로와 점점 심해지는 호흡곤란으로 내원했다. 복용 약물은 없다. 맥박은 93회/분, 혈압은 112/80 mmHg이다. 진찰에서 이상은 없다. 헤모글로빈은 8 g/dL, 백혈구 수는 22,000/mm³, 혈소판 수는 80,000/mm³이다. 말초혈액도말에서 순환하는 골수모세포가 증가되어 있다. 골수 생검으로 급성 골수성 백혈병이 확진되었다. 심전도, 흉부 X선, 심초음파는 정상이다. 환자는 시타라빈과 다우노루비신을 이용한 관해유도 화학요법을 시작할 예정이다. 이 환자에서 다음 중 어떤 장기 합병증의 위험이 증가하는가?

## 선택지

A. 양측 이명
B. 육안적 혈뇨
C. 폐의 이산화탄소 확산능 감소
D. 좌심실 기능장애

## 해설


다우노루비신은 심근에 축적되어 심근섬유증을 일으키며, 좌심실 기능장애 위험을 증가시킨다. 따라서 정답은 D이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007036 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Anthracycline daunorubicin 관련 누적 심근 손상·좌심실 기능장애 D의 약물 부작용 연관을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007036
