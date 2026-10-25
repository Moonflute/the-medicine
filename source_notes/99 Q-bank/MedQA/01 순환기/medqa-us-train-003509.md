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
question_type: prevention
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

48세 남성이 수년 만에 처음으로 건강검진을 받으러 왔다. 특별한 증상이나 질환은 없었고 혈압은 140/89 mmHg였다. 다음 중 가장 적절한 초기 관리는?

## 선택지

A. 병원에 돌아와 혈압을 다시 측정하고 유산소 운동의 중요성을 상담한다
B. 안지오텐신전환효소 억제제를 시작한다
C. 베타차단제로 치료한다
D. 치료가 필요하지 않다

## 해설

한 차례의 진료실 BP140/89만으로 지속성 고혈압을 확진하지 않고 표준화 반복측정과 가능하면 가정/활동혈압으로 확인하므로 A가 초기 접근이다. 생활습관 상담도 병행한다. ACC/AHA 분류상 수축기140은 stage2에 해당하며, 확인된 평균≥140/90이면 약물치료를 검토해야 한다. 아직 약물이 항상 권장되지 않는다는 기존 해설은 단일 측정의 재평가와 지속성 고혈압 치료를 혼동한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 140/89의 단일 측정에서 재확인 A는 유지. 현행ACC/AHA stage2이며 확인된≥140/90에도 약물 불필요라는 일반화 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003509
