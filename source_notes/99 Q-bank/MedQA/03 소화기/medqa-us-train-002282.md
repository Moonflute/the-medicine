---
type: qbank
schema_version: 1
id: medqa-us-train-002282
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6323e7b1b760495e2b5412c8537d9a4969e936c2ccde9ce85d518dce1a8d9511
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal spasm"
  - "motility disorder"
  - "esophageal manometry"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rr7jrp4zshLEg7Iud64-EIOyXsOy2lSAoRGlmZnVzZSBFc29waGFnZWFsIFNwYXNtKS5tZA
question_type: investigation
difficulty: complex
answer: C
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

32세 여성이 수개월째 고형식과 물을 모두 삼키기 어렵고 간헐적으로 가슴이 아프다. 심장 원인은 배제됐고, 위내시경과 식도 생검에서도 협착이나 점막염은 없었다. 식도 운동장애를 확인할 검사는?

## 선택지

A. 24시간 식도 산도 검사
B. 위배출 신티그래피
C. 고해상도 식도 내압검사
D. 복부·골반 CT

## 해설


구조 이상과 점막질환이 배제된 연하곤란에서는 고해상도 식도 내압검사로 식도 수축과 위식도 접합부 이완을 평가한다. 바륨 검사에서 특이 소견이 없더라도 운동질환을 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 질문은 다음 순서가 아니라 진단에 도움이 되는 검사. 고형·액체 연하곤란의 운동장애 평가 manometry C; 정상바륨이 운동장애를 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002282
- https://doi.org/10.14309/AJG.0000000000000731
