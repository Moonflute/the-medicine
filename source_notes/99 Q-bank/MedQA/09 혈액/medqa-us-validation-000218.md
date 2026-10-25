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
question_type: diagnosis
difficulty: complex
answer: C
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

임신 18주인 23세 흑인 여성이 경도의 소구성 빈혈로 철분을 복용했지만 5주 후에도 호전되지 않았다. 헤모글로빈 전기영동은 정상이었다. 가장 가능성 높은 진단은?

## 선택지

A. 철결핍성 빈혈
B. 베타 지중해빈혈 보인자
C. 알파 지중해빈혈 보인자
D. 엽산결핍성 빈혈

## 해설


철제에 반응하지 않는 경한 소구성 빈혈과 정상 헤모글로빈 전기영동은 α 지중해빈혈 보인자(C)에 부합한다. α 사슬 합성이 감소하지만 보인자의 성인 전기영동은 정상일 수 있다. RBC수가 빈혈에 비해 보존되고 RDW가 정상인 원문 소견도 지지한다. 구형적혈구를 의미하는 미세구형빈혈과는 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000218 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철제 무반응·정상 전기영동의 α-thal trait C 유지. 미세구형이라는 잘못된 형태 용어를 소구성으로 정리.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000218
