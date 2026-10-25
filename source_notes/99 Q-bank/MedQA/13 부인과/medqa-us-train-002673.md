---
type: qbank
schema_version: 1
id: medqa-us-train-002673
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb8de13b21b6ec5c1234761fda99c6776b445a5c3dbcf51c630d5e5a8a9d7d48
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "postpartum hemorrhage"
  - "uterine atony"
  - "bimanual uterine massage"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 G3P2 여성이 쌍둥이를 합병증 없이 질식분만했다. 두 태반은 곧 분만되었지만 이후 1시간 동안 예상 실혈량 1,150 mL의 질출혈이 지속된다. 활력징후는 정상이고 자궁은 커져 있으며 부드럽다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 메틸에르고메트린
B. 흡인 소파술
C. 트라넥삼산
D. 양손 자궁 마사지

## 해설

부드럽고 큰 자궁과 실혈 1,150 mL는 자궁이완성 산후출혈이다. 양손 마사지(D)를 즉시 시행하되 자궁수축제·TXA·수액·원인 평가를 함께 진행한다. 마사지 효과를 기다린 뒤에만 약물을 고려하는 것은 부적절하며 정상 활력징후도 대량출혈을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문나이27을29로오역;마사지후에만약물을주라는지연설명수정.
- https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002673
