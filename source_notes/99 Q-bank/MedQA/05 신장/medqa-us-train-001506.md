---
type: qbank
schema_version: 1
id: medqa-us-train-001506
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c8f1ff1ca1c155e6d094328d4c6521af38b6167e27eed6e7b2313d3bc13fffa
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "diabetic nephropathy"
  - "active urinary sediment"
  - "cellular casts"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
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

제2형 당뇨병과 안정적인 알부민뇨가 있던 67세 남성의 크레아티닌이 2주 사이 1.2에서 2.7 mg/dL로 올랐다. 아래 소견 중 단순 당뇨병콩팥병보다 새로운 사구체신염을 의심하게 하는 것은?

## 선택지

A. 오래전 확인된 당뇨병망막병증
B. 이전과 비슷한 양의 알부민뇨
C. 요침사의 변형 적혈구와 적혈구 원주
D. 이전과 비슷한 신장 크기

## 해설

빠른 신기능 저하에 변형 적혈구나 적혈구 원주가 동반되면 당뇨병만으로 설명하지 않는다. 동반 사구체신염을 찾는 신장내과 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKD는 활동성 요침사를 동반한다는 반대 설명을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001506
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
