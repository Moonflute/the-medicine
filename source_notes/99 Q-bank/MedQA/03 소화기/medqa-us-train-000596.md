---
type: qbank
schema_version: 1
id: medqa-us-train-000596
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae8dd650a90f041e73a8d5bed55d460c79ef3c566f4573f608e29f783f52cf3d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatitis B"
  - "chronic hepatitis B"
  - "acute hepatitis B"
  - "alcoholic hepatitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQu2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBCKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성의 B형간염 표면항원(HBsAg)이 2년간 양성이었다. 현재 새 복수를 동반한 비대상성 간경변이 확인됐다. ALT는 정상이고 HBeAg는 음성이지만 HBV DNA는 1,200 IU/mL로 검출된다. 적절한 처치는?

## 선택지

A. ALT가 정상이라 매년 추적만 한다.
B. HBV DNA가 20,000 IU/mL를 넘을 때까지 기다린다.
C. 엔테카비르 등 경구 항바이러스 치료를 시작한다.
D. 페그인터페론을 먼저 투여한다.

## 해설

B형간염 비대상성 간경변에서 HBV DNA가 검출되면 ALT나 HBeAg 상태에 관계없이 경구 항바이러스 치료를 시작한다. 비대상성 간경변에서는 페그인터페론을 사용하지 않으며 이식 적합성도 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HBeAg음성은 모두 비활동성이라는 잘못된 일반화 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000596
- https://doi.org/10.3350/cmh.2026.0579
