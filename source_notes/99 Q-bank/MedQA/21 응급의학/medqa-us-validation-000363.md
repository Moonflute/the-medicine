---
type: qbank
schema_version: 1
id: medqa-us-validation-000363
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8527b013c05773a292c61c261d8ab632f07f079cf9336f55079ac73039be8222
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "긴장성 기흉"
  - "바늘 감압"
  - "흉관 삽입"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4tOyepeyEsSDquLDtnYkgKFRlbnNpb24gUG5ldW1vdGhvcmF4KS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

흉부 외상 뒤 긴장성 기흉으로 응급 바늘 감압을 하자 호흡과 혈압이 좋아졌다. 재발을 막기 위한 다음 처치는?

## 선택지

A. 흉관을 삽입해 계속 배액한다
B. 개선됐으므로 관찰만 한다
C. 심낭천자를 시행한다
D. 호흡 증상이 다시 생기면 그때 첫 영상을 촬영한다

## 해설

바늘 감압은 일시적 처치여서 막히거나 빠질 수 있다. 긴장성 기흉을 확실히 배액하려면 흉관 삽입이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 바늘 감압에 반응한 긴장성 기흉의 후속 흉관 D를 유지한다. 감압 뒤에도 반드시 긴장 상태가 남아 있다는 단정을 피한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000363
