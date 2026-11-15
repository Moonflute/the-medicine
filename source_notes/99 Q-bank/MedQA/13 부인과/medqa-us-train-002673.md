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
publication_status: "withheld"
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

27세 여성이 쌍둥이를 질식분만했다. 태반 두 개가 모두 나온 뒤에도 1시간 동안 약 1,150 mL의 출혈이 지속된다. 자궁은 커져 있고 부드럽다. 수액과 옥시토신 등 초기 치료를 시작하면서 자궁 수축을 돕기 위해 즉시 시행할 침상 처치는?

## 선택지

A. 외부 대동맥 압박
B. 자궁강 흡인 소파술
C. 자궁 내 풍선 탐포네이드
D. 자궁 마사지

## 해설

부드럽고 커진 자궁은 자궁이완을 시사한다. 즉시 자궁 마사지를 시작하면서 자궁수축제, 트라넥삼산, 수액 등 산후출혈 초기 치료를 병행하고 출혈 원인을 확인한다. 풍선 탐포네이드는 초기 치료로도 출혈이 조절되지 않을 때 고려한다. 태반 잔류의 단서 없이 소파술을 먼저 하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문나이27을29로오역;마사지후에만약물을주라는지연설명수정.
- https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002673
- WHO·FIGO·ICM 산후출혈 통합 지침(2025), 초기 치료: https://www.ncbi.nlm.nih.gov/books/NBK619233/table/ch3.tab33/
