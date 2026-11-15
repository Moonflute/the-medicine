---
type: qbank
schema_version: 1
id: medqa-us-train-000712
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f2ebe8551960699e69b39a104f45425e4eafa5199b1c5fa4076023604c16cb06
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "placenta previa"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 36주 산모의 태반이 질식 초음파에서 계속 내자궁구를 덮고 있다. 출혈이 없고 산모와 태아는 안정적이다. 태반유착이 의심되는 소견은 없다. 적절한 분만 계획은?

## 선택지

A. 자궁경부가 유리하면 질식 유도분만한다
B. 태반 위치와 관계없이 41주까지 자연 진통을 기다린다
C. 안정적이어도 분만 방식은 진통이 시작된 뒤 처음 논의한다
D. 진통과 출혈이 생기기 전에 계획 제왕절개를 준비한다

## 해설

태반이 내자궁구를 계속 덮으면 출혈 위험 때문에 질식분만을 계획하지 않는다. 출혈이 없고 안정적이면 임신 후기 적절한 시점의 제왕절개를 계획하고, 많은 출혈이나 상태 악화가 생기면 앞당긴다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/placenta-praevia-placenta-accreta-and-vasa-praevia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000712
- https://pubmed.ncbi.nlm.nih.gov/42374711/
