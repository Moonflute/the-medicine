---
type: qbank
schema_version: 1
id: medqa-us-train-002598
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20ea11737ae84123f9dda20ae4a5b27c4376782d47aa7f0e8177f1eba2cd3ef2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic lupus erythematosus"
  - "anti-dsDNA antibody"
  - "disease activity monitoring"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

45세 여성이 전신홍반루푸스가 안정돼 추적 중이다. 하이드록시클로로퀸을 잘 복용하고 있고 약제 금기나 망막 독성은 없다. 질병이 조용한 상태에서 기본 유지 약을 어떻게 할까?

## 선택지

A. 항체 양성이면 고용량 스테로이드로 대체한다
B. 망막 안전성을 추적하며 하이드록시클로로퀸을 유지한다
C. 증상이 없으면 약을 바로 중단한다
D. 장기 사이클로포스파미드로 바꾼다

## 해설


금기가 없다면 하이드록시클로로퀸은 안정기에도 재발 예방과 장기 예후를 위해 유지한다. 실제 체중과 위험요인에 맞춰 용량을 조정하고 안과 검진을 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002598 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-dsDNA가 가장 민감하게 모든 활성도를 반영한다는 단정을 다중 임상·혈청·요검사 평가로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1093/rheumatology/keag223
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.25528

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002598
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13711245/
