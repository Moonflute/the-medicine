---
type: qbank
schema_version: 1
id: medqa-us-train-003913
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7dcfdf064c0d47bbad338483c47bc793ba5cfaf13d6667d02216a8088add39ed
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "diastolic murmur"
  - "aortic regurgitation"
  - "transthoracic echocardiography"
  - "cardiac auscultation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 취업 전 검진을 받으러 왔다. 무증상이지만 심첨부에서 1/6도의 감소하는 이완기 잡음이 들렸다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 운동부하검사
B. 추가 검사 불필요
C. 경흉부 심초음파
D. 조영증강 흉부 CT

## 해설

무증상이라도 이완기 잡음은 구조적 판막질환 가능성이 있어 TTE C로 평가한다. 시기·위치·방사와 도플러 소견으로 원인을 확인하며 심첨부에서 들렸다는 이유만으로 대동맥역류를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이완기잡음의 TTE C는 유지하되 심첨부 잡음을 곧바로 AR로 확정하지 않음.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003913
