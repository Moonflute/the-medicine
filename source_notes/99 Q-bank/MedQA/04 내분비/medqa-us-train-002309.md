---
type: qbank
schema_version: 1
id: medqa-us-train-002309
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:abc97c57671593d8b158d4cc16ae36b21b224df35bda011c64dcd542ac6ab33f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 2 diabetes mellitus"
  - "diabetic retinopathy screening"
  - "fundus photography"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDrp53rp4nrs5Hspp0gKERpYWJldGljIFJldGlub3BhdGh5KS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

과체중인 57세 여성이 정기검진을 위해 내원했다. 현재 증상은 없고 약물도 복용하지 않는다. 어머니와 남동생이 제2형 당뇨병과 고혈압을 앓고 있다. 혈압 145/95 mmHg, 체온 37°C, 맥박 85회/분이다. 공복혈당 158 mg/dL, HbA1c 8.6%, LDL 210 mg/dL, HDL 27 mg/dL, 중성지방 300 mg/dL이다. 다음 중 이 환자에게 권장되는 검사는?

## 선택지

A. 5년 후 소변 알부민-크레아티닌 비율을 검사하고 매년 추적한다
B. 5년 후 모노필라멘트검사를 시행하고 매년 추적한다
C. 5년마다 공복 지질검사를 시행한다
D. 지금 안저 사진을 촬영하고 이후 매년 추적한다

## 해설


당뇨병 환자는 당뇨성 망막병증을 조기에 발견하기 위해 안저 촬영을 즉시 시행해야 한다. 5년 후가 아니라 현재 검사가 권장된다. 따라서 지금 안저 사진을 촬영하고 연간 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 새 T2D 진단 시 망막 선별검사 D; 5년 후 신장·신경병증 선별은 T1D 기준을 혼동한 오답.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prediabetes-and-type-2-diabetes-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002309
