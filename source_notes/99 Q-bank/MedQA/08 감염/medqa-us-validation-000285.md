---
type: qbank
schema_version: 1
id: medqa-us-validation-000285
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e33368e5c4b3c03a653fd77bfcd72d94d3d95b213487b83c8f5eb678420ba6b3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "아데노바이러스 인두결막열"
  - "육안적 혈뇨"
  - "결막염"
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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

12세 아이에게 발열, 삼출성 인두염과 양측 결막 충혈이 있다. 같은 시기에 육안적 혈뇨가 생겼고 소변에서 단백, 아질산염은 음성이다. 인두·결막 증상과 출혈성 방광염을 함께 설명하는 가장 가능성 높은 원인은?

## 선택지

A. A군 사슬알균
B. 아데노바이러스
C. 대장균
D. 인플루엔자 바이러스

## 해설


아데노바이러스는 인두결막열을 일으키고 소아에서 출혈성 방광염을 동반할 수 있다. 인두염 후 사구체신염은 대개 시차가 있고 단백뇨 등 사구체 소견이 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000285 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인후결막열·출혈성 방광염의 adenovirus B 유지. 피부를 포함한 삼징이라는 오기 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000285
- https://www.cdc.gov/adenovirus/hcp/clinical-overview/
