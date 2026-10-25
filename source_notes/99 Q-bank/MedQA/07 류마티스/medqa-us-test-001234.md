---
type: qbank
schema_version: 1
id: medqa-us-test-001234
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:29d3ab82749e691bd5ba700cba1b9b4e804024bea199e0185bd350b4370b2c8c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "타카야수 동맥염"
  - "대동맥궁 증후군"
  - "혈관 협착"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
question_type: prognosis
difficulty: complex
answer: A
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

30세 일본 여성이 직장에서 실신한 후 응급실에 왔다. 의식은 곧 회복되었지만 4개월간 피로와 관절통이 증가했다. 혈압 90/60 mmHg이고 오른쪽 요골맥박은 없으며 왼쪽은 1+였다. 혈색소 10.9 g/dL, MCV 78.2 μm³, ESR 56 mm/h였다. 이 환자가 위험한 합병증은?

## 선택지

A. 심근경색
B. 혀 경색
C. 촉지성 자반
D. 다발신경병증

## 해설


젊은 여성의 전신 염증 증상, 상지 맥박 감소와 높은 ESR은 타카야수동맥염을 시사한다. 대동맥과 주요 분지뿐 아니라 관상동맥도 침범할 수 있어 심근허혈·심근경색(A)의 위험이 있다. 이를 이 질환의 가장 흔한 합병증이라고 단정하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-001234`와 직접 대조했다.
- 판정: Takayasu의 관상동맥 침범에 의한 MI 위험 A 유지. 심근경색이 질환의 모든 합병증 중 가장 흔하거나 가장 위험 높다는 과잉 일반화 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001234
