---
type: qbank
schema_version: 1
id: medqa-us-train-009854
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4cc9f19c60470540d9053f7e854b258a35d09cae4792ec087b9bc79313924fb8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "임신 중 갑상선기능저하증"
  - "레보티록신"
  - "임신 중 약물 안전성"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
difficulty: standard
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

임신 11주인 32세 갑상선기능저하증 환자가 레보티록신과 철분제를 매일 아침 함께 먹는다. 레보티록신의 흡수를 유지하면서 두 약을 어떻게 복용하도록 안내하는가?

## 선택지

A. 철분제를 먹는 기간에는 레보티록신을 끊는다.
B. 흡수를 높이기 위해 두 약을 같은 시간에 먹는다.
C. 아침에 철분을 먹고 30분 뒤 레보티록신을 먹는다.
D. 레보티록신은 공복에 복용하고 철분제와 4시간 이상 띄운다.

## 해설


철분은 레보티록신의 장 흡수를 떨어뜨릴 수 있어 적어도 4시간 간격을 둔다. 임신 중 레보티록신을 중단하지 않고 갑상선기능을 확인하며 용량을 조절한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009854 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신 LT4 지속의 안전성 취지는 D이나 옛 A등급 문구를 현대 허가사항의 임상자료로 설명; 잘통제 연구로 무위험 입증이라 과장하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1e11ad30-1041-4520-10b0-8f9d30d30fcc

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009854
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=55cebc88-0514-4940-b974-ec7f0467d10e
- https://doi.org/10.1177/10507256261445624
