---
type: qbank
schema_version: 1
id: medqa-us-train-001214
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d430026530c1c2604468d0c68659645f73add72fc0ec94406f557baa9dd3ec4b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Cushing reflex"
  - "intracranial hypertension"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

머리를 다친 환자의 의식이 악화하며 혈압이 196/102 mmHg로 오르고 맥박은 48회/분으로 느려졌다. 호흡은 불규칙하다. 이 소견 조합이 시사하는 상태는?

## 선택지

A. 두개내압 상승과 뇌탈출 위험
B. 저혈량성 쇼크
C. 오피오이드 단독 중독
D. 단순 미주신경 반사

## 해설

두부 외상 뒤 고혈압·서맥·불규칙 호흡은 뇌관류를 위협하는 두개내압 상승의 늦은 경고 신호다. 기도·순환 관리와 응급 신경외과 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 쿠싱 반응을 두개내압 상승이 없는 상태라고 설명한 오류를 뇌관류 저하에 대한 교감신경 반사와 압수용체성 서맥으로 교정했다. 고혈압의 직접 기전 A를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001214
