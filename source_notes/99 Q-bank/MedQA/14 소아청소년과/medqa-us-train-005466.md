---
type: qbank
schema_version: 1
id: medqa-us-train-005466
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eeebdc83d91971cb859f8165e4030d4312a5ee695d633db7961cebe6d2afc18f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "동맥관개존증"
  - "좌우 단락"
  - "인도메타신 폐쇄치료"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-Z66el6rSAIOqwnOyhtOymnSAoUGF0ZW50IER1Y3R1cyBBcnRlcmlvc3VzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 27주에 태어난 생후 3주 미숙아에게 혈역학적으로 의미 있는 동맥관개존이 있고 호흡 지원 필요가 늘었다. 신생아팀이 평가해 약물 폐쇄를 선택했고 출혈·신기능 장애 등 금기는 없다. 적절한 약은?

## 선택지

A. 알프로스타딜
B. 아데노신
C. 도부타민
D. 이부프로펜

## 해설

미숙아에서 의미 있는 동맥관개존에 대해 약물 폐쇄를 선택했다면 이부프로펜을 사용할 수 있다. 모든 미숙아에게 예방적으로 닫는 약을 투여하거나 모든 PDA를 즉시 치료하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문 36주 출생 단서를 복원. PDA 치료 약제의 기전·한계를 교정하고 심부전 약제를 무관하다고 한 오류 삭제.
- https://publications.aap.org/pediatrics/article/155/5/e2025071425/201674

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005466
- https://doi.org/10.1542/peds.2025-071425
