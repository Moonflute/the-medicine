---
type: qbank
schema_version: 1
id: medqa-us-train-010093
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b14f0c3b419196ee812aaf7dbf7c62f19b5a9c5d049cda3db02c7784095831d1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "지아르디아증"
  - "Giardia lamblia"
  - "오염된 물"
  - "Giardia infection"
related_disease_slugs: []
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

계곡물을 마신 뒤 2주 넘게 복부 팽만과 악취가 나는 기름진 설사가 지속된다. 열이나 혈변은 없다. 지아르디아 감염을 확인하는 데 적절한 검사는?

## 선택지

A. 대변 지아르디아 항원검사
B. 대변 일반 세균배양
C. 혈액배양
D. 대변 잠혈검사

## 해설


오래 지속되는 지방변과 복부 팽만은 지아르디아증을 의심할 소견이다. 대변에서 지아르디아 항원을 확인할 수 있으며, 단일 검사 음성으로 의심이 해소되지 않으면 검체를 반복 채취해 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010093 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 처리 안 된 물·지방변·팽만과 운동성 원충은 Giardia A. Ova 음성 자체를 Giardia의 특이 진단 근거로 오해하지 않도록 수정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010093
- https://www.cdc.gov/giardia/hcp/diagnosis-testing/index.html
