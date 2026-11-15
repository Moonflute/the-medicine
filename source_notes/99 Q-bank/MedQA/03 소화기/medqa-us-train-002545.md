---
type: qbank
schema_version: 1
id: medqa-us-train-002545
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8ffeca0ca959d3c6ec2cfa83706ee7a9ccc88c1783b062c1effb674a8e95701
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Crohn disease"
  - "right colon involvement"
  - "transmural inflammation"
  - "inflammatory bowel disease"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 4개월째 설사하고 체중이 줄었다. 회장대장내시경에서 회맹판이 벌어져 있고 횡행 궤양이 보인다. 크론병과 장결핵이 모두 의심된다. 면역억제 치료 전에 구별을 위해 우선 할 검사는?

## 선택지

A. 혈청 ASCA 단독 검사
B. 혈청 p-ANCA 단독 검사
C. 대변 칼프로텍틴만 반복 측정
D. 병변 조직의 결핵균 배양·핵산검사와 조직 소견 평가

## 해설


국내에서는 회맹부 염증에서 장결핵을 감별해야 한다. 횡행 궤양과 벌어진 회맹판은 장결핵에 더 맞는 단서지만 확진은 아니다. 조직 검사와 미생물 검사를 병행하고, 단일 음성 검사로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 우측 대장의 궤양·협착, 체중감소·빈혈·염증표지자 상승은 Crohn D. 잠혈음성이 이를 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002545
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
