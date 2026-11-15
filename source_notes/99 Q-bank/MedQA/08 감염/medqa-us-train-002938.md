---
type: qbank
schema_version: 1
id: medqa-us-train-002938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5acc90d1f1aa0626dd7c1c5817b895526681a9f9cf11af89cf8c60805cc70ead
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculosis screening"
  - "BCG vaccination"
  - "interferon-gamma release assay"
  - "latent tuberculosis infection"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

43세 간호사가 4주째 기침과 야간 발한으로 내원했다. 최근 활동성 폐결핵 환자를 돌본 적이 있다. 흉부 X선에서 우상엽 공동성 음영이 보인다. 활동성 폐결핵을 확인하기 위한 검사는?

## 선택지

A. 투베르쿨린 피부검사만 시행
B. 객담 일반 세균 배양만 시행
C. 객담 결핵균 핵산증폭검사와 항산균 도말·배양
D. 인터페론감마 분비검사만 시행

## 해설


오래가는 기침, 노출력과 공동성 음영이 있으면 활동성 폐결핵을 의심하고, 공기주의를 적용하며 객담을 채취해 결핵균 핵산증폭검사와 항산균 도말·배양을 시행한다. 피부반응검사와 인터페론감마 분비검사만으로는 활동성 결핵을 확인하거나 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002938 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BCG 접종자의 감염 선별 IGRA D 유지; 만성 기침에서 활동성 TB를 IGRA 하나로 배제할 수 없다는 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002938
- 질병관리청·대한결핵 및 호흡기학회 결핵 진료지침 5판: https://lungkorea.org/bbs/index.html?code=guide
