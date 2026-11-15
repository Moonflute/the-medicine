---
type: qbank
schema_version: 1
id: medqa-us-train-008470
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f01e304638497f7619a381d49a75396c9d1f63016a1dc41549857a72dd66f144
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Turner syndrome"
  - "45,X"
  - "cystic hygroma"
  - "hydrops fetalis"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 18주 초음파에서 태아 목 뒤에 큰 격막성 낭성 병변이 보이고 전신 수종이 동반됐다. 산전 유전상담에서 특히 고려할 성염색체 소견은?

## 선택지

A. 47,XXY
B. 47,XYY
C. 45,X
D. 47,XXX

## 해설


격막성 낭성수종과 태아수종이 함께 있으면 터너증후군(45,X)을 감별한다. 다른 염색체·구조 이상도 가능하므로 초음파만으로 확정하지 않고 유전상담과 진단 검사를 논의한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008470
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11759048/
