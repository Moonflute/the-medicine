---
type: qbank
schema_version: 1
id: medqa-us-train-007618
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b2a3144d57b041f71324de7e69ab7aaf5017048d9aa9030be5d8ac7de55f0f29
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 방광염"
  - "요로감염"
  - "대장균"
  - "아질산염 양성"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDrsKnqtJHsl7wgKEFjdXRlIEN5c3RpdGlzKS5tZA
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
  - MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 비임신 여성이 이틀 전부터 배뇨통과 빈뇨가 있다. 질 분비물, 발열이나 옆구리 통증이 없고 소변 아질산염은 양성이다. 급성 단순 방광염에 대한 초기 경구 치료로 적절한 것은?

## 선택지

A. 아목시실린 단독
B. 포스포마이신 트로메타몰
C. 독시사이클린
D. 메트로니다졸

## 해설


급성 단순 방광염의 경구 치료로 포스포마이신 트로메타몰을 사용할 수 있다. 발열·옆구리 통증 등으로 신우신염이 의심되면 방광염용 경구 포스포마이신 단회요법을 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007618 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 배뇨통·농뇨·nitrite 양성의 급성 방광염에서 E.coli D가 가장 가능함을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007618
- https://doi.org/10.3947/ic.2018.50.1.67
