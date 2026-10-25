---
type: qbank
schema_version: 1
id: medqa-us-validation-001012
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9a8c13ac3bdf42f862a25e193e5339beb4575cec5d51617939d7fc0501730f8d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "후를러 증후군"
  - "점액다당류증 1형"
  - "더마탄 황산염(dermatan sulfate)"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ZeQ65-sIOymne2bhOq1sCAoSHVybGVyIFN5bmRyb21lKS5tZA
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

1세 남아가 발달이 퇴행하고 얼굴 형태가 변해 소아과에 왔다. 거친 얼굴, 돌출된 이마, 두꺼운 입술, 각막 혼탁이 있고 소변에서 더마탄 황산염(dermatan sulfate)이 증가했다. 다음 중 이 임상 소견과 가장 관련된 유전질환은?

## 선택지

A. 모르키오 증후군
B. 테이삭스병
C. 후를러 증후군
D. 파브리병

## 해설

Hurler 증후군(C)은 MPS I의 중증형으로 α-L-iduronidase 결핍에 의해 dermatan sulfate·heparan sulfate가 축적된다. 거친 얼굴·발달 퇴행·각막 혼탁과 소변 dermatan sulfate 증가가 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 피부르산더마탄이라는 비의학적 오역을 dermatan sulfate로 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001012
