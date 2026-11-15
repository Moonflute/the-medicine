---
type: qbank
schema_version: 1
id: medqa-us-train-001611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d782740ab9f64e79a26f284abd06589879021fd481333d7aa3f3728fe7c2d0d7
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "gross hematuria"
  - "urothelial carcinoma"
  - "CT urography"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
difficulty: complex
answer: B
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

67세 흡연자가 통증 없는 육안적 혈뇨로 검사 중이다. 방광경에서 출혈 원인이 보이지 않았다. 신기능은 정상이고 요오드 조영제 금기는 없다. 상부 요로의 종양을 평가할 영상검사는?

## 선택지

A. 복부 단순촬영
B. CT 요로조영술
C. 전립선 다중매개 MRI
D. 요역동학검사

## 해설

육안적 혈뇨에서 방광경과 상부 요로 평가는 서로 보완한다. 조영제 금기가 없다면 CT 요로조영술로 신장과 요관의 종양을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고위험 혈뇨에서 CT B의 역할을 상부요로 평가로 명확히 하고 방광경도 필요함을 보완.
- 공식/학회 근거: https://www.auanet.org/documents/Guidelines/PDF/2025%20Guidelines/MH%20Unabridged%2002.2025FINAL3-1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001611
- https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/diagnosis
