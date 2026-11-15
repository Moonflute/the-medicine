---
type: qbank
schema_version: 1
id: medqa-us-train-002076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33acd2c465d4cb28c2238719245fd6de2923ab3cac591fa9d8ff1b291be0a46b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "alcoholic hepatitis"
  - "alcohol-associated liver disease"
  - "AST/ALT ratio"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_slYzsvZTsmKzshLEg6rCE7KeI7ZmYIChBbGNvaG9saWMgTGl2ZXIgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

수년간 많은 양의 술을 마셔 온 45세 남성이 3주 전부터 황달과 식욕저하가 생겼다. 총 빌리루빈은 9 mg/dL다. 초음파에 담도 확장은 없고 혈압 저하, 바이러스 간염 및 약물 노출 단서는 없다. 알코올 관련 간염에 가장 합당한 수치는?

## 선택지

A. AST 1,089 U/L, ALT 1,500 U/L
B. AST 256 U/L, ALT 120 U/L
C. AST 72 U/L, ALT 183 U/L
D. AST 2,222 U/L, ALT 2,521 U/L

## 해설


최근까지 지속된 과음과 새 황달, AST가 ALT보다 높고 대개 400 U/L 미만인 양상은 알코올 관련 간염에 합당하다. AST·ALT가 수천 단위이면 허혈, 약물, 바이러스 등 다른 원인을 적극 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 음주력·황달·대구성 변화와 AST 256/ALT 120의 AST 우세 양상 B는 알코올 관련 간손상에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002076
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3796673/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11040545/
