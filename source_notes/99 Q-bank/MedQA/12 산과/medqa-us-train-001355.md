---
type: qbank
schema_version: 1
id: medqa-us-train-001355
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c27dd4c5a201505e4181b913eb69725c3d6b85a6371d607ca7b6ed15a5021b17
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "uterine atony"
  - "postpartum hemorrhage"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

천식이 있는 산모가 분만 직후 자궁무력증으로 출혈 중이다. 마사지와 옥시토신을 시행했고 추가 자궁수축제를 선택하려 한다. 기관지수축 위험 때문에 피할 약은?

## 선택지

A. 카르보프로스트
B. 미소프로스톨
C. 옥시토신
D. 메틸에르고노빈

## 해설

카르보프로스트는 기관지수축을 유발할 수 있어 천식 산모에서는 피한다. 메틸에르고노빈은 고혈압에서 피하는 약이다. 출혈 소생과 다른 지혈 방법은 계속 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자궁이완에 대한 마사지 및 동시 출혈 처치 묶음 설명.
- https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001355
- https://www.nice.org.uk/guidance/ng235/chapter/recommendations
