---
type: qbank
schema_version: 1
id: medqa-us-train-000385
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3da22e4a54bc6af93c14fffbb785793521c33eb8a41941d9c34753dc6fbdf8da
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infectious mononucleosis"
  - "Epstein-Barr virus infection"
  - "HIV infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MDgg6rCQ7Je8L-yXoeyKpO2DgOyduC3rsJQg67CU7J2065-s7IqkIOqwkOyXvCAoRUJWKSAoRXBzdGVpbi1CYXJyIFZpcnVzIEluZmVjdGlvbiAoRUJWKSkubWQ
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: complex
answer: C
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

17세 남학생이 12일째 발열, 심한 피로와 인후통을 호소한다. 아목시실린을 복용한 뒤 전신에 반점구진 발진이 생겼다. 삼출성 편도염, 뒤목 림프절 비대와 비장비대가 있다. 일차 EBV 감염을 지지하는 항체 조합은?

## 선택지

A. VCA IgM 음성, VCA IgG 양성, EBNA IgG 양성
B. VCA IgM 음성, VCA IgG 음성, EBNA IgG 음성
C. VCA IgM 양성, VCA IgG 양성, EBNA IgG 음성
D. VCA IgM 음성, VCA IgG 양성, EBNA IgG 음성

## 해설


증상과 비장비대, 아목시실린 뒤 발진은 전염성 단핵구증을 시사한다. 일차 EBV 감염 초기에는 VCA IgM이 나타나고 EBNA IgG는 아직 검출되지 않는다. VCA IgG와 EBNA IgG가 모두 양성이면서 VCA IgM이 음성이면 대개 과거 감염이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000385 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: heterophile 검사를 무조건 가장 빠른 확진법이라고 한 단정을 제한하고 현행 CDC의 검사 한계를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/epstein-barr/php/laboratories/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000385
- 미국 CDC, EBV 특이 항체 해석: https://www.cdc.gov/epstein-barr/php/laboratories/
