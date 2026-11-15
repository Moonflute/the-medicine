---
type: qbank
schema_version: 1
id: medqa-us-train-010107
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:409f042d4ac1bbe6963aa83d57498b02cf368e0681d6047122e63a5d0d152c02
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 패혈증"
  - "조기 양막 파수"
  - "경험적 항생제"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 36주에 태어난 생후 20시간 신생아가 발열·수유 저하·호흡곤란을 보인다. 분만 전 파수가 오래 지속됐다. 지역 내성에 특별한 문제가 없고 혈액배양을 채취했다. 수막염 소견이 없는 조기 패혈증 의심 시 시작할 항생제는?

## 선택지

A. 경구 아목시실린 단독
B. 정맥 암피실린과 겐타마이신
C. 정맥 반코마이신 단독
D. 배양 결과가 나올 때까지 치료 보류

## 해설

조기 신생아 패혈증에서는 B군사슬알균과 대장균 등 흔한 원인을 함께 치료한다. 배양과 환자 상태에 맞춰 약을 조정하며, 호흡·관류 지지와 수막염 가능성 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신생아 패혈증의 항생제를 검사 예약 때문에 지연하지 않으며 안정화도 병행하도록 명확화.
- https://www.rch.org.au/clinicalguide/guideline_index/Recognition_of_the_seriously_unwell_neonate_and_young_infant/
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010107
- https://www.who.int/publications/i/item/9789240102903
