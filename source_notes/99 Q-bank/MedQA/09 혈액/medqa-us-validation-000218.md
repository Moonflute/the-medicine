---
type: qbank
schema_version: 1
id: medqa-us-validation-000218
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:449213431dbe327792f62b66166436c4d5b9f26c874f11755863036854130ebe
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "알파 지중해빈혈"
  - "소구성 빈혈"
  - "정상 헤모글로빈 전기영동"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: D
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

임신 중 소구성 빈혈로 평가받은 환자의 철 저장 상태는 정상이다. MCV는 64fL이고 적혈구 수는 비교적 많으며 혈색소 전기영동과 HbA₂가 정상이다. 알파 지중해빈혈 보인자 여부를 확인할 검사는?

## 선택지

A. 페리틴만 측정해 유전 아형 확진
B. BCR::ABL1 융합검사
C. 혈색소 전기영동이 정상이므로 보인자 배제
D. 알파글로빈 유전자의 결실 등 분자검사

## 해설


알파 지중해빈혈 보인자는 전기영동이 정상일 수 있다. 알파글로빈 유전자 검사는 보인자 확인과 임신 중 배우자 검사·유전 상담에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000218 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철제 무반응·정상 전기영동의 α-thal trait C 유지. 미세구형이라는 잘못된 형태 용어를 소구성으로 정리.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000218
- https://www.ncbi.nlm.nih.gov/books/NBK1435/
