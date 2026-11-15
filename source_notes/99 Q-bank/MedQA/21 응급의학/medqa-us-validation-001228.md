---
type: qbank
schema_version: 1
id: medqa-us-validation-001228
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:de43b63fd4a028df4ceec912e1e7822b2117ecb1d8a90bf009547a2a578e9746
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "일산화탄소 중독"
  - "연기 흡입"
  - "100% 산소"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ydvOyCsO2ZlO2DhOyGjCDspJHrj4UgKENhcmJvbiBNb25veGlkZSBQb2lzb25pbmcpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

화재 현장에서 구조된 24세 남성이 두통과 혼돈을 보인다. 맥박산소포화도는 99%지만 일산화탄소 중독이 의심된다. 혈액 검사와 기도 평가를 하면서 바로 시작할 것은?

## 선택지

A. 100% 산소 공급
B. 산소 없이 경과 관찰
C. 이부프로펜 투여
D. 흉부 CT가 끝날 때까지 산소를 보류

## 해설

일반 맥박산소측정기는 일산화탄소헤모글로빈을 제대로 구별하지 못한다. 노출과 증상이 뚜렷하면 정상 수치에도 100% 산소를 시작한다. 화재에서는 별도로 기도 손상과 다른 중독도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CO 중독의 100% 산소 A 유지. 정상 일반 pulse oximetry로 배제 불가, 화재의 시안화물 동반 중독 가능성 및 전문평가 보완.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001228
