---
type: qbank
schema_version: 1
id: medqa-us-train-003509
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10bc644691b280f99f6ec95b7f3e8db87209f1af86df47cee02705d9b0ecf23f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "elevated blood pressure"
  - "lifestyle modification"
  - "repeat blood pressure measurement"
  - "primary prevention"
  - "essential hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

48세 남성이 건강검진에서 처음으로 진료실 혈압 145/91 mmHg를 보였다. 증상은 없고 이전 혈압 기록도 없다. 고혈압을 확진하기 위한 다음 단계는?

## 선택지

A. 표준 방법으로 진료실 혈압을 반복 측정하고 가정혈압 또는 활동혈압을 확인한다
B. 진료실 혈압 한 번으로 고혈압을 확진한다
C. 고혈압을 확인하기 위해 운동부하검사를 시행한다
D. 증상이 없으므로 고혈압을 배제한다

## 해설

대한고혈압학회의 기준에서 진료실 혈압 140/90 mmHg 이상은 고혈압 범위지만, 이 사례의 단일 측정값만으로 확진하지 않는다. 표준화한 반복 측정과 가정 또는 활동혈압을 이용해 지속적인 혈압 상승과 백의고혈압을 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 140/89의 단일 측정에서 재확인 A는 유지. 현행ACC/AHA stage2이며 확인된≥140/90에도 약물 불필요라는 일반화 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003509
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
