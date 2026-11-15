---
type: qbank
schema_version: 1
id: medqa-us-train-006785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a714fee25496160cdc2b7a04deb0ba7a8f369e659f88a6f78b27c5d2da5e2488
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "기관지확장증"
  - "객혈"
  - "전차선 징후"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
question_type: diagnosis
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

65세 남성이 수년간 거의 매일 화농성 가래를 뱉고 반복해서 호흡기 감염을 앓았다. 이번에는 소량의 객혈이 있었다. 얇은 절편 흉부 CT에서 주변 폐동맥보다 넓고 말초로 가도 가늘어지지 않는 기관지가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 기관지확장증
B. 폐기종
C. 폐동맥 혈전색전증
D. 특발성 폐섬유증

## 해설

반복되는 감염과 만성 화농성 객담에 CT상 비정상적으로 확장된 기관지가 동반되면 기관지확장증을 진단한다. 객혈도 나타날 수 있으며, CT 소견은 환자의 증상과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기관지확장 A의 tram-track을 traction과 동일시한 용어 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006785
- https://publications.ersnet.org/lookup/doi/10.1183/13993003.01126-2025
