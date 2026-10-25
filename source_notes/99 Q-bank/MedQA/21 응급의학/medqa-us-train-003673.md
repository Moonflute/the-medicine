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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

운동 후 CK 상승과 짙은 소변, dipstick heme 양성이지만 적혈구가 없는 소견은 횡문근융해의 myoglobinuria에 맞는다. 근육손상은 체액 소실·신장 혈관수축·색소 독성 및 세뇨관 폐쇄 등을 통해 AKI(A) 위험을 높인다. 이를 적혈구성 혈뇨로 표현해서는 안 된다. 구획증후군 등 다른 합병증도 임상적으로 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Dipstick blood 양성이지만 RBC 음성인 것을 진성 혈뇨로 명명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003673
