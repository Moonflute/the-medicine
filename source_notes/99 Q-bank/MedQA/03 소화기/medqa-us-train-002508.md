---
type: qbank
schema_version: 1
id: medqa-us-train-002508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7b2f1a886dca344039433b889b60eba5df9e2b3cdeefa72ec5afd16ff05c05f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "peptic ulcer disease"
  - "gastric ulcer"
  - "gastrointestinal hemorrhage"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsnqXqtIAg7ZiI6rSA7KeI7ZmYLm1k
question_type: investigation
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

체중이 줄고 흑변이 있었던 58세 남성의 내시경에서 가장자리가 불규칙한 2 cm 위궤양이 보였다. 채취한 조직 한 조각에서는 악성이 확인되지 않았다. 치료 8주 뒤에도 궤양이 남아 있다. 다음 처치는?

## 선택지

A. 첫 조직 결과가 음성이므로 내시경 평가 종료
B. 요소호기검사만 시행
C. 궤양 가장자리와 의심 부위에서 여러 개의 표적 생검
D. PPI만 늘리고 1년 뒤 증상 확인

## 해설

불규칙하고 치료 후에도 남는 위궤양은 위암을 다시 평가해야 한다. 첫 조직 한 조각이 음성이라는 이유로 암을 배제하지 않고, 반복 내시경에서 궤양 가장자리와 의심 부위를 충분히 생검한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식후 즉시 통증의 위궤양에서 출혈 C는 유지. 본문에 없는 NSAID 복용을 사실처럼 추가한 해설 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002508
- https://doi.org/10.1136/flgastro-2025-103316
