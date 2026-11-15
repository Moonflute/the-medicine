---
type: qbank
schema_version: 1
id: medqa-us-validation-000719
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:84fe88edf68462a818bd07d7b91fb4ee46ac741e763e5bd80470de8a4db0ec91
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "국소 진행성 비소세포폐암"
  - "림프절 전이"
  - "동시 항암화학방사선요법"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: D
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

절제 불가능한 3기 비소세포폐암이 있는 환자가 근치적 동시 항암방사선치료를 마쳤다. 영상에서 진행은 없고 종양에서 EGFR 엑손 19 결실이 확인됐다. 이 변이를 반영한 공고치료는?

## 선택지

A. 펨브롤리주맙 단독
B. 게피티니브와 아테졸리주맙 병용
C. 추가 수술만 시행
D. 오시머티닙

## 해설


절제 불가능한 3기 비소세포폐암에서 감수성 EGFR 변이가 있고 근치적 항암방사선치료 뒤 진행하지 않았다면 오시머티닙 공고치료를 고려한다. 진행성 폐암 치료나 보조수술을 묻는 상황과 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000719 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 사각근 림프절은 N2가 아닌 N3. 선택지 C 동시항암방사선의 초기치료 의도는 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000719
- https://doi.org/10.1200/JCO-24-01324
- https://doi.org/10.1056/NEJMoa2402614
