---
type: qbank
schema_version: 1
id: medqa-us-train-007619
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:383914dae105659f49f3e53c4d5682cb9a6b8ad738a68bc7e2d9d2d92e8f8d78
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "glucose-6-phosphate dehydrogenase deficiency"
  - "chronic hepatitis B"
  - "scleral icterus"
  - "jaundice"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 5주 영아가 회백색 변과 직접 고빌리루빈혈증으로 정밀 평가를 받았다. 담도폐쇄증이 확인됐고, 아직 진행성 간부전은 없다. 적절한 초기 수술 계획은?

## 선택지

A. 소아외과에서 가능한 한 조기에 카사이 간문부장문합술을 시행한다
B. 생후 3개월까지 자연 배액을 기다린 뒤 수술한다
C. 담낭절제술만 시행한다
D. 광선치료로 담즙 흐름이 회복되는지 본다

## 해설

담도폐쇄증의 카사이 수술은 가능한 조기에 시행할수록 담즙 배액과 자기 간 보존 가능성이 높다. 생후 수개월까지 기다릴 병이 아니며, 수술 뒤에도 합병증과 간이식 필요성을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 직접 빌리루빈만으로 폐쇄 위치를 확정하는 설명을 감별·신속 평가로 보정.
- https://naspghan.org/files/documents/pdfs/position-papers/Guideline_for_the_Evaluation_of_Cholestatic.23.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007619
- https://doi.org/10.1542/peds.2024-070077
