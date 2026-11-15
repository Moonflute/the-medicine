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
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

급성 골수성 백혈병 환자가 다우노루비신을 포함한 유도항암을 시작할 예정이다. 기저 심근병증은 알려져 있지 않다. 치료 전 좌심실 기능을 기록하는 데 우선 사용할 검사는?

## 선택지

A. 운동부하 심전도
B. 관상동맥 CT
C. 24시간 홀터검사
D. 좌심실 박출률을 포함한 경흉부 심초음파

## 해설


안트라사이클린은 좌심실 기능을 떨어뜨릴 수 있다. 치료 전에 심초음파로 기준 좌심실 기능을 확인하고 개별 심혈관 위험도에 맞춰 치료 중 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007036 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Anthracycline daunorubicin 관련 누적 심근 손상·좌심실 기능장애 D의 약물 부작용 연관을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007036
- https://doi.org/10.1093/eurheartj/ehac244
