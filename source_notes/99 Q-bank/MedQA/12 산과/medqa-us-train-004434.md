---
type: qbank
schema_version: 1
id: medqa-us-train-004434
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:791329cdb7c00e3959ee066585c244a7b3f4f4eaabe98876c2aeb79f5fb92972
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "엽산 결핍"
  - "거대적아구성 빈혈"
  - "임신 중 빈혈"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 31주 산모가 거대적아구성 빈혈로 평가받는다. 비타민 B12와 페리틴은 정상이며 호모시스테인이 상승했지만 메틸말론산은 정상이다. 가장 가능성 높은 영양 결핍은?

## 선택지

A. 철 결핍
B. 비타민 B12 결핍
C. 엽산 결핍
D. 비타민 K 결핍

## 해설


엽산과 비타민 B12 결핍 모두 거대적아구성 빈혈과 호모시스테인 상승을 일으킬 수 있다. 메틸말론산이 정상이라는 점은 이 사례에서 엽산 결핍을 더 지지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004434
- https://doi.org/10.1002/ijgo.70529
