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
answer: D
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

25세 남성이 교통사고 후 흉통과 호흡곤란, 혼란을 보이며 응급실에 왔다. 체온 36.5°C, 혈압 94/54 mmHg, 맥박 170회/분, 호흡수 12회/분, 실내 공기 산소포화도 90%이다. 왼쪽 제2늑간에 14게이지 바늘을 삽입하자 혈압이 104/74 mmHg로 오르고 맥박이 100회/분으로 감소했다. 다음으로 가장 적절한 처치는?

## 선택지

A. 흉부 방사선촬영
B. 심낭천자
C. 개흉술
D. 흉관 삽입술

## 해설

바늘 흉강감압 후 혈압과 맥박이 호전된 것은 긴장성 기흉에 의한 폐쇄성 쇼크를 지지한다. 바늘은 막히거나 빠질 수 있는 임시 처치이므로 확실한 흉막강 배액을 위해 흉관 삽입(D)이 필요하다. 현재도 반드시 긴장 상태가 지속된다고 가정할 필요는 없지만 재발·지속 누출 위험 때문에 영상 촬영만으로 후속 배액을 대신해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 바늘 감압에 반응한 긴장성 기흉의 후속 흉관 D를 유지한다. 감압 뒤에도 반드시 긴장 상태가 남아 있다는 단정을 피한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000363
