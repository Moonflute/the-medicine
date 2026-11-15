---
type: qbank
schema_version: 1
id: medqa-us-test-000110
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1961412ec6f220b852466c86a18307f49835d00a7c6792d466eef8c659ef32fc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "염증성 장질환"
  - "크론병"
  - "대변 백혈구"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 남성이 5주째 점액성 설사를 하고 체중이 줄었다. 빈혈이 있어 대장내시경과 감염 평가를 계획 중이다. 대변으로 장 점막의 염증을 확인하는 데 가장 도움이 되는 검사는?

## 선택지

A. 대변 췌장 엘라스타제
B. 대변 칼프로텍틴
C. 대변 삼투압 차이
D. 대변 지방 정량

## 해설

대변 칼프로텍틴은 장 점막의 호중구성 염증을 반영한다. 감염 때도 오를 수 있어 염증성 장질환을 단독 확진하지 못하며, 체중 감소와 빈혈이 있으면 검사 결과로 내시경을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: IBD를 지지하는 임상 단서와 대변 백혈구의 비특이성을 구분; 고감도 확진검사라는 해설 과장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000110
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
