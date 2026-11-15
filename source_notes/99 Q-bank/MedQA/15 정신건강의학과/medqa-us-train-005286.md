---
type: qbank
schema_version: 1
id: medqa-us-train-005286
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:174f0b9dc734c5e4d9b48c1043a6a3b91ef246de0b14eab9c0230b9dd59e31e2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "망상"
  - "환청"
  - "정신병적 증상에 대한 공감적 반응"
  - "Schizophrenia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

환자가 누군가 자신을 계속 감시한다며 몹시 두렵다고 한다. 현재 신체적 응급상황은 없고 면담에 응할 수 있다. 망상 가능성을 평가하기 위해 가장 적절하게 시작하는 말은?

## 선택지

A. 지금 말씀은 전부 사실이 아니니 잊으세요
B. 그 사람들이 감시하는 게 틀림없으니 함께 찾아봅시다
C. 많이 무섭겠어요. 언제부터 그런 느낌이 들었고 지금 안전하다고 느끼시나요?
D. 정신질환이니 말씀하지 말고 우선 약부터 드세요

## 해설


공포와 고통은 인정하되 확인되지 않은 믿음을 사실이라고 맞장구치거나 논쟁하기보다, 경험과 안전을 차분하게 묻는다. 실제 피해 가능성도 별도로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005286
- https://www.nice.org.uk/guidance/cg178/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영·한 본문·모든 의사소통 선지와 답·해설 대조. 망상을 긍정하거나 논박하지 않고 경험의 고통에 공감하는 선택 타당.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
