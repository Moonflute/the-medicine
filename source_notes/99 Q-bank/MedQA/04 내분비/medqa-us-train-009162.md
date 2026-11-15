---
type: qbank
schema_version: 1
id: medqa-us-train-009162
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33f49b899496a7a3633cf31398c63377af69d051eea3d3e5aa61293365d9f54b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypothyroidism in pregnancy"
  - "임신 중 갑상선기능저하증"
  - "Hashimoto thyroiditis"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
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

하시모토 갑상선염으로 명백한 갑상선기능저하증이 있어 레보티록신 50μg을 매일 복용하는 25세 여성이 임신 6주를 확인했다. TSH는 임신 전 2.0에서 현재 3.4 mIU/L로 올랐다. 복약은 일정했고 유리 T4는 정상이다. 용량을 어떻게 조절할까?

## 선택지

A. 용량을 약 25% 줄이고 재검한다
B. 레보티록신을 중단하고 유리 T4가 낮아지면 다시 시작한다
C. 용량을 약 25% 늘리고 약 4주 뒤 갑상선기능을 재평가한다
D. 리오티로닌을 추가하고 레보티록신은 유지한다

## 해설


기존 명백한 갑상선기능저하증에서는 임신 초기에 레보티록신 필요량이 흔히 늘어난다. 임신 전 용량과 TSH를 고려해 증량하고, 약 4주 간격의 검사에 따라 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009162 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신 의심 확인과 2026 ATA의 약25% LT4 초기 증량 C, 반복 TSH기반 조절 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://journals.sagepub.com/doi/pdf/10.1177/10507256261445624?download=true

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009162
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10323161/
- https://doi.org/10.1177/10507256261445624
