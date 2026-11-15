---
type: qbank
schema_version: 1
id: medqa-us-validation-000826
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b5fad0c8f8e8a1eeacc94acf43c6b15ef57a6653172ec764aa4b5d596facef6d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "후두연화증"
  - "흡기성 천명"
  - "소아 기도 연화"
  - "Laryngomalacia"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YGs66O5IChDcm91cCkubWQ
difficulty: simple
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4개월 영아에게 수유하거나 울 때 커지는 흡기성 협착음이 있다. 후두 내시경으로 후두연화증을 확인했다. 무호흡이나 청색증은 없고 수유량과 체중 증가도 양호하다. 적절한 처치는?

## 선택지

A. 즉시 성문상부성형술을 시행한다
B. 위산억제제를 일률적으로 시작한다
C. 매 수면 때 엎드려 재운다
D. 성장과 수유를 추적하며 악화 신호를 안내한다

## 해설

수유와 성장이 양호하고 산소화 문제가 없는 후두연화증은 대개 경과를 관찰한다. 무호흡, 청색증, 성장부진이나 지속적인 흉곽 함몰이 나타나면 재평가한다. 수면은 바로 눕힌다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 후두연화증 관찰의 조건과 엎드린 수면 권고로 오해할 위험을 보정.
- https://www.chop.edu/conditions-diseases/laryngomalacia
- https://doi.org/10.1542/peds.2022-057991

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000826
- https://pubmed.ncbi.nlm.nih.gov/27107728/
