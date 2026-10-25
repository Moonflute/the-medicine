---
type: qbank
schema_version: 1
id: medqa-us-train-003795
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:689ad1d2e07ed0f2d800c6fae19cb707be5da7aec0b70c76e71ef861d192ec9c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "patent ductus arteriosus"
  - "preterm infant"
  - "congestive heart failure"
  - "indomethacin"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-Z66el6rSAIOqwnOyhtOymnSAoUGF0ZW50IER1Y3R1cyBBcnRlcmlvc3VzKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
difficulty: complex
answer: A
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

임신 29주에 제왕절개로 태어난 여아가 생후 4일째 수유곤란과 호흡곤란을 보였다. 흉부 X선에서 울혈성 심부전이 보이고 심초음파에서 좌심방과 좌심실이 커져 있었다. 다음 중 적절한 치료 약물은?

## 선택지

A. 인도메타신
B. 메타돈
C. 카페인
D. 알프로스타딜

## 해설

좌심방·좌심실 확장 및 심부전 소견은 유의한 좌우 단락의 가능성을 높인다. 심초음파 등으로 혈역학적으로 유의한 PDA를 확인하고 약물 폐쇄를 선택할 경우, 보기 중 indomethacin(A)이 프로스타글란딘 합성을 억제하여 동맥관 수축을 유도한다. 미숙아라는 이유만으로 모든 PDA를 일찍 약물 폐쇄하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미숙아 PDA 약제 기전은 유지하되 모든 PDA의 예방적 조기 폐쇄로 오해하지 않도록 교정.
- https://publications.aap.org/pediatrics/article/155/5/e2025071425/201674

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003795
