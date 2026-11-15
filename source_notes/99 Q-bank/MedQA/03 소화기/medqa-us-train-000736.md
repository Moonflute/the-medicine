---
type: qbank
schema_version: 1
id: medqa-us-train-000736
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:852627ddc7960ece59629ca62f50c486d47e9108eaa4f08efa94683ac0d8102a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "diffuse esophageal spasm"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rr7jrp4zshLEg7Iud64-EIOyXsOy2lSAoRGlmZnVzZSBFc29waGFnZWFsIFNwYXNtKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남성이 음식이 걸리는 느낌과 반복되는 식후 흉통을 호소한다. 심장 원인과 내시경상 구조 이상은 배제됐다. 고해상도 식도내압검사에서 접합부 이완 압력은 정상이며 10회 삼킴 중 3회에 조기 수축이 나타났다. 수축 강도는 충분하다. 진단은?

## 선택지

A. 원위 식도 연축
B. 제3형 식도이완불능증
C. 비효율적 식도운동
D. 식도 무수축

## 해설

연하곤란 또는 비심장성 흉통이 있고 접합부 이완은 정상이면서 20% 이상 조기 수축이 있으면 원위 식도 연축에 부합한다. 제3형 식도이완불능증은 접합부 이완 장애가 동반된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식도경련을 모든 경우 고압 수축으로 동일시한 설명 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000736
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8034247/
