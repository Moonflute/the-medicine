---
type: qbank
schema_version: 1
id: medqa-us-train-003673
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:23cec4515e3aa923529e096c7878f2fbe0fd6a1a60d504fbdbbd0c0316001465
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "rhabdomyolysis"
  - "myoglobinuria"
  - "acute kidney injury"
  - "exertional muscle injury"
question_type: complication
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

20세 여성이 격렬한 운동 후 2일간의 심한 근육통, 오심, 짙은 소변으로 응급실에 왔다. 혈청 크레아틴키나아제는 22,000 U/L였고 소변에서 혈액 3+가 검출되었지만 적혈구는 없었다. 다음 중 위험이 증가하는 합병증은?

## 선택지

A. 급성 신손상
B. 구획증후군
C. 대사성 알칼리증
D. 심근염

## 해설


격렬한 운동 후 CK 22,000 U/L와 혈뇨(적혈구 없음)는 근육 파괴와 미오글로빈 배출을 의미한다. 미오글로빈은 신장에서 직접 신독성을 일으켜 급성 신손상의 위험을 크게 증가시킨다. 따라서 정답은 급성 신손상이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003673
