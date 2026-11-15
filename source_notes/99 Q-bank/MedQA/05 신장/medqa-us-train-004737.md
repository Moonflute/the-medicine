---
type: qbank
schema_version: 1
id: medqa-us-train-004737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb1c8f2d7123dff654b3b6d6f41067f7fe9c1c2d6d371e4ebfd03b283a110cd9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "IgA 신병증"
  - "상기도 감염 후 혈뇨"
  - "사구체신염"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCrOq1rOyytOyniO2ZmC5tZA
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
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

29세 여성이 인후통이 시작된 날부터 갈색 소변을 봤다. 이전 감기 때도 같은 일이 있었다. 요침사에 변형 적혈구와 적혈구 원주가 있고 혈청 C3는 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 연쇄상구균 감염 후 사구체신염
B. 급성 신우신염
C. IgA 신병증
D. 신장 유두괴사

## 해설

상기도 감염과 거의 동시에 반복되는 사구체성 혈뇨는 IgA 신병증을 시사한다. 전형적인 연쇄상구균 감염 후 신염은 잠복기가 있고 C3가 흔히 낮다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동시인두염성 혈뇨의 IgA 가능성을 일시적 병변으로 단정한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004737
- https://kdigo.org/guidelines/iga-nephropathy/
