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

32세 여성이 정기 추적 진료를 위해 내원했다. 최근 임신 사실을 알게 되어 임신 기간에 약물을 복용하는 것이 걱정된다. 갑상선기능저하증이 있어 매일 레보티록신을 복용한다. 활력징후는 특이사항이 없고, 신체검사상 임신 약 11주에 해당한다. 다음 중 임신 중 레보티록신 사용에 관한 올바른 설명은?

## 선택지

A. 선천성 기형을 예방하려면 임산부는 레보티록신 용량을 줄여야 한다.
B. 동물 연구에서 태아에 유해한 영향이 나타났지만, 사람을 대상으로 한 적절하고 잘 통제된 연구는 없다.
C. 임신 중 레보티록신 사용은 금기이므로 중단해야 한다.
D. 잘 통제된 연구에서 임신 1분기 태아 위험이 입증되지 않았고, 이후 삼분기에도 위험의 증거가 없다.

## 해설


정답 D가 의도한 핵심은 임신 중 적절한 LT4 보충을 중단할 필요가 없다는 점이다. 현행 허가사항은 적정 치료를 받은 임신부의 임상/시판 후 자료에서 주요 기형·유산 증가가 보고되지 않았다고 설명한다. 이는 모든 위험이 0이거나 현대의 충분한 무작위 대조시험으로 무위험이 증명됐다는 뜻은 아니다. 옛 pregnancy category 문구만을 현재 근거 체계로 해석하지 않으며 TSH에 따라 용량을 조절한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009854 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신 LT4 지속의 안전성 취지는 D이나 옛 A등급 문구를 현대 허가사항의 임상자료로 설명; 잘통제 연구로 무위험 입증이라 과장하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1e11ad30-1041-4520-10b0-8f9d30d30fcc

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009854
