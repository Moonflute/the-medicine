---
type: qbank
schema_version: 1
id: medqa-us-validation-000207
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7bbf29e8eeb41e78916fd6ca88135715b32d40fc1fe95e1f67676cb19468b9b1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "철 중독"
  - "철분 보충제"
  - "변비"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 점점 심해지는 변비와 명치 통증으로 진료를 받으러 왔다. 3주간 아내의 종합비타민을 하루 3정씩 복용했다. 가장 가능성 높은 원인은?

## 선택지

A. 마그네슘 과다
B. 철분 과다
C. 칼륨 과다
D. 엽산 과다

## 해설

철분이 들어 있는 종합비타민을 권장량보다 많이 복용하면 변비, 구역과 상복부 불편감이 발생할 수 있어 B가 가장 잘 부합한다. 장관 내 철의 자극과 위장관 부작용이 관련되지만, 섭취한 철이 전혀 흡수되지 않는다는 뜻은 아니다. 이 사례의 비교적 만성적인 변비·상복부 통증을 급성 부식성 철 중독이나 전신 철 과부하가 확진된 것으로 확대해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 철분 관련 위장관 부작용 B를 유지하고 철분이 전혀 흡수되지 않는 듯한 과도한 기전 표현을 정리한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000207
