---
type: qbank
schema_version: 1
id: medqa-us-train-000027
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:98d45a86c3b1e392764befc7a46471f662d505b7c93c76716facfbaf64236fff
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Granulosa cell tumor"
  - "Idiopathic precocious puberty"
  - "McCune-Albright syndrome"
  - "Sertoli-Leydig tumor"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
  - MTMg67aA7J246rO8L-yEuOultO2GqOumrC3rnbzsnbTrlJTtnogg7IS47Y-sIOyiheyWkSAoU2VydG9saS1MZXlkaWcgQ2VsbCBUdW1vcikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

5세 여아가 빠른 유방 발달과 소량 질출혈로 내원했다. 에스트라디올은 높고 LH는 억제돼 있으며, 초음파에서 한쪽 난소에 고형 성분이 섞인 종괴가 보인다. 의심할 원인은?

## 선택지

A. 소아형 난소 과립막세포종
B. 중추성 성조숙증
C. 안드로겐 분비 세르톨리-라이디히세포종
D. 17α-수산화효소 결핍

## 해설


에스트로겐 징후가 있으면서 LH가 억제돼 있으면 말초성 성조숙증을 의심한다. 고형 성분이 있는 난소 종괴와 함께라면 에스트로겐 분비 소아형 과립막세포종에 맞는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000027
- https://www.cancer.gov/types/ovarian/hp/child-ovarian-treatment-pdq
