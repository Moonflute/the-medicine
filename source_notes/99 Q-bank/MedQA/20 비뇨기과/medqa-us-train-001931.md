---
type: qbank
schema_version: 1
id: medqa-us-train-001931
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c16cb19c18a83421dd2a00ad013ff91a8c6649ed550c4b4a8cd61a08cb3154bc
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "testicular torsion"
  - "epididymitis"
  - "scrotal ultrasound"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmOyXvOyghCAoVGVzdGljdWxhciB0b3JzaW9uKS5tZA
  - MjAg67mE64eo6riw6rO8L-q4ieyEsSDrtoDqs6DtmZjsl7wgKEFjdXRlIGVwaWRpZHltaXRpcykubWQ
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

22세 남성이 4시간 전부터 한쪽 음낭이 아프다. 며칠간 배뇨통이 있었고 농뇨가 있다. 고환의 위치는 정상이나 진찰만으로 염전과 부고환염이 구별되지 않는다. 즉시 시행 가능하고 수술 평가를 지연하지 않는 영상검사는?

## 선택지

A. 음낭 도플러 초음파
B. 복부·골반 CT
C. 골반 MRI
D. 경직장 초음파

## 해설

진찰로 염전 여부가 분명하지 않을 때 도플러 초음파로 양쪽 고환의 혈류와 부고환을 비교한다. 혈류가 보여도 부분 염전은 배제되지 않으며 임상 의심이 높으면 검사 대기로 수술을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성음낭통증 모두 초음파부터라는 일반화 수정. 애매한 임상에서 Doppler C 유지, 염전 고의심시 영상으로 수술 지연 금지.
- 공식/학회 근거: https://www.cdc.gov/std/treatment-guidelines/epididymitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001931
- https://uroweb.org/guidelines/paediatric-urology/chapter/acute-scrotum
