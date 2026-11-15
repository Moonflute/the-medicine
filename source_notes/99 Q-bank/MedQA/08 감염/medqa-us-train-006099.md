---
type: qbank
schema_version: 1
id: medqa-us-train-006099
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d85f2a08d0f789ed69fd8d8e231019ca6026c4bfa8e80d43f61ed1f0fad72b92
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "크립토코쿠스 수막염"
  - "AIDS"
  - "두개내압 상승"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

HIV 관련 크립토코쿠스 수막염 환자에게 항진균제를 시작했다. 머리가 계속 아프고 시야가 흐리며 요추천자 개방압은 31cmH₂O다. 증상을 일으키는 두개내압 상승에 우선 시행할 처치는?

## 선택지

A. 치료적 요추천자로 뇌척수액을 배액한다
B. 만니톨을 반복 투여한다
C. 아세타졸아미드를 투여한다
D. 덱사메타손을 일률적으로 투여한다

## 해설


증상을 동반한 압력 상승은 치료적 요추천자로 뇌척수액을 배액해 낮춘다. 증상과 개방압을 다시 평가해 필요하면 반복하며, 만니톨이나 아세타졸아미드가 이를 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006099 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 두통과 개방압28.5cmH₂O의 cryptococcal 수막염에서 치료적 반복 LP B를 공식 권고와 원문 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/cryptococcosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006099
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11526416/
