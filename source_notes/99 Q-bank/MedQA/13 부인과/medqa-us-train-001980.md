---
type: qbank
schema_version: 1
id: medqa-us-train-001980
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57213172b6af37b98035d1184ca3efb1a0c9cb125debc42a194464ed23a5bfd1
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "postpartum contraception"
  - "breastfeeding"
  - "progestin-only pill"
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

출산 2주 된 여성이 모유수유 중이며 경구 피임을 원한다. 수유와 초기 산후 혈전 위험을 고려할 때 적절한 경구 방법은?

## 선택지

A. 저용량 에스트로겐·프로게스틴 복합제
B. 프로게스틴 단독 피임약
C. 경구 에스트로겐 단독
D. 피임약은 모두 수유를 마칠 때까지 사용 금지

## 해설

수유 중 초기 산후에는 프로게스틴 단독 경구피임약을 사용할 수 있다. 에스트로겐 포함 복합제는 이 시기의 혈전 위험 때문에 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수유중 복합피임약을 모든시기의 절대금기로 일반화하지 않고 산후VTE조건 반영.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001980
- https://www.who.int/publications/i/item/9789240115583/
