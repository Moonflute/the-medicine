---
type: qbank
schema_version: 1
id: medqa-us-train-003833
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5bf667569ec1ed07c237e5a85574e910598f52ee6d89e9e51bbd30655286704
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "chronic bronchitis"
  - "fixed airflow obstruction"
  - "productive cough"
  - "occupational exposure"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여성이 5년간 지속된 아침의 가래 동반 기침으로 내원했다. 흡연자는 아니지만 면화 공장에서 일하고, 지난 3년간 호흡곤란으로 6회 입원했다. 폐기능검사에서 FEV1/FVC 0.62, 기관지확장제 후 변화가 거의 없었다. 가장 가능성 높은 진단은?

## 선택지

A. 천식
B. 만성 기관지염
C. 폐기종
D. 특발성 폐섬유화증

## 해설


만성 기관지염은 고정된 기류 제한과 생산성 기침을 특징으로 하며, 직업성 먼지 노출이 위험인자이다. 따라서 만성 기관지염이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수년간 대부분 달의 객담성기침·고정 폐쇄패턴과 직업먼지노출은 만성기관지염 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003833
