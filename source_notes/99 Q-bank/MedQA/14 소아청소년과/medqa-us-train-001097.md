---
type: qbank
schema_version: 1
id: medqa-us-train-001097
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4c305f645c009c7648e09ef9f068358d7b850370599ee4c158fe5e9b668bf6ec
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "vitamin B12 deficiency"
  - "subacute combined degeneration of the spinal cord"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQmVuenlscGVuaWNpbGxpbi5tZA
---

# MedQA US 임상문제

## 문제

7개월 영아가 모유를 먹으며 자라다가 최근 처지고, 전에 하던 뒤집기를 하지 못한다. 빈혈과 대적혈구증이 있다. 산모는 식물성 식품만 먹으며 비타민 보충은 하지 않았다. 우선 확인할 영양 결핍은?

## 선택지

A. 비타민 C 결핍
B. 철 결핍
C. 비타민 K 결핍
D. 비타민 B12 결핍

## 해설


비타민 B12가 부족한 산모에게 모유를 먹는 영아는 신경발달 퇴행, 저긴장과 대적혈구성 빈혈을 보일 수 있다. 영아와 산모를 함께 평가하고, 의심되면 교정을 지연하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001097
- https://pubmed.ncbi.nlm.nih.gov/40819279/
