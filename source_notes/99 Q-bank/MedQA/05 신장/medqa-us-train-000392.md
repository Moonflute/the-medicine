---
type: qbank
schema_version: 1
id: medqa-us-train-000392
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22645115b0cf01c304387147944bf1961498c1f323e576058e24b731a4fe68be
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "rheumatoid arthritis"
  - "amyloidosis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

오랫동안 조절되지 않은 류마티스관절염이 있는 63세 남성에게 신증후군이 생겼다. 신장 생검의 콩고레드 양성 침착물에서 AA형 아밀로이드가 확인됐다. 신장 악화를 늦추기 위한 원인 치료는?

## 선택지

A. 류마티스관절염의 만성 염증을 적극 조절한다
B. 다발골수종 치료를 바로 시작한다
C. AA형인데도 트랜스티레틴 안정화제만 투여한다
D. 부종이 사라지면 기저염증 관리는 중단한다

## 해설


AA형 아밀로이드는 만성 염증에 의해 증가한 혈청 아밀로이드 A에서 유래한다. 기저 염증을 조절하는 것이 핵심이며, 조직으로 확인된 유형에 맞춰 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: RA의 만성 염증과 신증후군·간/신장비대는 AA amyloid를 시사. Congo red 양성 편광 apple-green A와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000392
- https://doi.org/10.1056/NEJMoa070265
