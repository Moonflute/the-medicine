---
type: qbank
schema_version: 1
id: medqa-us-train-008441
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f7262f3c68d80647bcf2df096391ffd5de9f9d176530a7d17c180dca780e7d9
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "chronic hypertension in pregnancy"
  - "preeclampsia risk"
  - "antihypertensive therapy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRm9zaW5vcHJpbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "CHAP 이후 만성고혈압 치료 기준 140/90 반영; D에서 C로 정답 교정."
---

# MedQA US 임상문제

## 문제

임신 10주인 37세 산모가 이전부터 만성 고혈압이 있었으나 약을 복용하지 않는다. 1주 동안 반복 측정한 혈압은 145–151/90–95 mmHg이며 천식이나 서맥은 없다. 가장 적절한 혈압 치료는?

## 선택지

A. 임신 중 사용할 수 있는 라베타롤 등으로 치료를 시작한다
B. 중증 범위에 도달할 때까지 약제를 시작하지 않는다
C. 안지오텐신 수용체 차단제를 시작한다
D. 황산마그네슘을 매일 혈압약으로 사용한다

## 해설

임신 초기부터 지속되는 만성 고혈압은 중증 범위가 될 때까지 기다리지 않고 치료한다. 라베타롤·서방형 니페디핀 등 임신 중 사용할 수 있는 약을 선택하고 ACE 억제제와 ARB는 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CHAP 이후 만성고혈압 치료 기준 140/90 반영; D에서 C로 정답 교정.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/04/clinical-guidance-for-the-integration-of-the-findings-of-the-chronic-hypertension-and-pregnancy-chap-study

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008441
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
