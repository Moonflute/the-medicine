---
type: qbank
schema_version: 1
id: medqa-us-train-004529
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d5c3128a498fe01c525b59e5b4b437b2e78fed07e992f96af978f760d99f60f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "시든햄 무도병"
  - "류마티스열"
  - "연쇄상구균 항체 교차반응"
question_type: investigation
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
difficulty: complex
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

9세 아이가 인후염 수주 뒤 불규칙한 불수의운동과 감정 기복을 보인다. 자는 동안 움직임이 줄고 손을 쥐는 힘을 일정하게 유지하지 못한다. 시든햄 무도병이 의심되고 심잡음은 없다. 함께 평가할 검사는?

## 선택지

A. 뇌 PET로만 류마티스열 평가
B. 도플러 심초음파로 동반 판막염 평가
C. 대변 배양검사
D. 심잡음이 생길 때까지 심장 검사를 하지 않음

## 해설

시든햄 무도병은 급성 류마티스열의 주요 소견이다. 들리는 심잡음이 없어도 판막염이 있을 수 있어 도플러 심초음파로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 시덴함무도병을 면역성 관절염 자체로 잘못 설명하고 9세를 사춘기로 단정한 표현을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004529
- https://www.who.int/publications/i/item/9789240100077
