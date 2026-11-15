---
type: qbank
schema_version: 1
id: medqa-us-train-000328
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd216c5d15de41e1ba232e5ad4c7a1a0b28d62dbce343089823e417172b8bdf4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "infiltrating ductal carcinoma"
  - "colonic polyps"
  - "Peutz-Jeghers syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Jqp7KKFIChDb2xvbmljIFBvbHlwKS5tZA
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
question_type: prevention
difficulty: standard
answer: D
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

푸츠–예거스 증후군 관련 STK11 병적 변이가 확인된 10세 아동이 증상 없이 내원했다. 위·대장 평가와 별개로, 장중첩증 위험이 있는 소장 용종을 찾기 위한 검사는?

## 선택지

A. 분변잠혈검사
B. 복부 단순 X선
C. 혈청 CEA 검사
D. 자기공명 소장조영술

## 해설

푸츠–예거스 증후군에서는 어릴 때부터 소장 용종을 감시한다. 자기공명 소장조영술이나 캡슐내시경으로 평가할 수 있다. 큰 소장 용종을 찾으면 장중첩 위험을 줄이기 위해 제거를 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 유방암을 대장암 병력이라고 바꾼 해설 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000328
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7865862/
