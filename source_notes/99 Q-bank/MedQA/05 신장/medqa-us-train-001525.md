---
type: qbank
schema_version: 1
id: medqa-us-train-001525
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd33fb13dc89fec2b4e5165163fc6b559c992c441f8b157fe319133df465bc67
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "renal artery stenosis"
  - "resistant hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 이뇨제를 포함한 항고혈압제 3제를 충분히 복용하는데도 혈압이 168/96 mmHg다. 복부 혈관잡음이 들리고 eGFR은 24 mL/min/1.73m²이다. 조영제 없이 신동맥 협착을 평가할 첫 검사는?

## 선택지

A. 조영증강 복부 CT 혈관조영술
B. 신장 생검
C. 조영증강 자기공명혈관조영술
D. 신동맥 이중 도플러 초음파

## 해설


신동맥 도플러 초음파로 조영제 없이 신동맥의 혈류 속도와 협착 가능성을 평가한다. 검사 적합성과 후속 영상은 신기능, 체형과 검사 결과에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 중증 저항성HTN과 양측 배꼽옆 bruit는 죽상경화성 신동맥협착 의심. 신장Doppler D가 이차원인 평가에 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001525
- https://acsearch.acr.org/docs/69374/Narrative/
