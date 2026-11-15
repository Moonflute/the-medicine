---
type: qbank
schema_version: 1
id: medqa-us-train-001098
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bcf4469fe8176e136ade7bbcebf6853419cbc11d0130ed1c45e5660a0fccdff6
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "contraception"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ydkeq4ie2UvOyehOuylSAoUG9zdGNvaXRhbCBDb250cmFjZXB0aW9uKS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

하루 담배 20개비를 피우는 36세 여성이 피임약을 선택하려 한다. 다른 질환은 없다. 흡연 때문에 사용하지 않아야 할 방법은?

## 선택지

A. 프로게스틴 단독 경구피임약
B. 에스트로겐·프로게스틴 복합 경구피임약
C. 레보노르게스트렐 자궁내장치
D. 에토노게스트렐 피하 임플란트

## 해설

35세 이상이면서 하루 15개비 이상 흡연하는 경우 심혈관 위험 때문에 복합 호르몬 피임은 금기다. 에스트로겐이 없는 방법과 금연 지원을 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답D와 반대로IUD를 답으로 설명한 오류;35세이상다량흡연기준 반영.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm/
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018680Orig1s074lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001098
- https://www.who.int/publications/i/item/9789240115583/
