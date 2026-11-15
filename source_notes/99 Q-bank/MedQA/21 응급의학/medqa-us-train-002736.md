---
type: qbank
schema_version: 1
id: medqa-us-train-002736
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a17f50f012d91f2c8b63ebf59cf41a6da71ce2506315ce8c722bb2801764b5a
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "orthostatic hypotension"
  - "autonomic dysfunction"
  - "syncope"
  - "medication-induced hypotension"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4sOumveyEsSDsoIDtmIjslZUgKE9ydGhvc3RhdGljIEh5cG90ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 일어서고 2분 이내 어지럽고 눈앞이 어두워졌다. 누웠을 때 혈압 126/76 mmHg, 선 뒤 혈압 98/62 mmHg다. 누우니 증상이 사라졌다. 가장 가능성 높은 진단은?

## 선택지

A. 발작성 심방세동
B. 저혈당
C. 신경매개성 발작
D. 기립성 저혈압

## 해설

기립 3분 이내 수축기혈압 20 mmHg 이상 또는 이완기혈압 10 mmHg 이상 하락하면 기립성 저혈압에 해당한다. 약물과 체액 상태도 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 기립 혈압 하강 B의 근거를 수축기19가 아니라 이완기12mmHg 감소까지 정확히 읽고, 정상 과거 Holter로 모든 부정맥을 배제하는 오류를 제한했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002736
