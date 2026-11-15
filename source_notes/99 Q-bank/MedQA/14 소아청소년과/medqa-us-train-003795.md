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
answer: B
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

재태 29주에 태어난 생후 4일 영아의 심초음파에서 작은 동맥관개존이 보인다. 순환은 안정적이고 호흡 보조는 줄이고 있으며 좌심실 과부하도 없다. 동맥관에 대한 초기 계획은?

## 선택지

A. 발견 즉시 인도메타신으로 폐쇄한다
B. 호흡과 순환 상태를 추적하며 일률적인 약물 폐쇄는 하지 않는다
C. 알프로스타딜로 동맥관 개방을 유지한다
D. 심초음파 확인만으로 수술적 결찰을 한다

## 해설

출생 초기의 작은 동맥관개존을 모든 미숙아에서 조기에 약물로 닫는 것은 권장되지 않는다. 혈역학에 의미 있는 영향을 주는지 호흡과 순환 경과를 보면서 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미숙아 PDA 약제 기전은 유지하되 모든 PDA의 예방적 조기 폐쇄로 오해하지 않도록 교정.
- https://publications.aap.org/pediatrics/article/155/5/e2025071425/201674

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003795
- https://pubmed.ncbi.nlm.nih.gov/40288780/
