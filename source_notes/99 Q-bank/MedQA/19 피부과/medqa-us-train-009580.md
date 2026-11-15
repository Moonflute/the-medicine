---
type: qbank
schema_version: 1
id: medqa-us-train-009580
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c76648045075c6005617526528d5206cc116a74eb6e35678d7a4770bdb4caae
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "dermatitis herpetiformis"
  - "포진상 피부염"
  - "celiac disease"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성의 양쪽 팔꿈치와 무릎에 심하게 가려운 작은 군집 수포가 반복된다. 포진피부염을 확진하는 검사는?

## 선택지

A. 수포액의 단순포진바이러스 PCR
B. 수포 주변의 정상처럼 보이는 피부를 이용한 직접면역형광
C. 항핵항체 검사
D. 말초혈액 철 검사

## 해설

포진피부염에서는 병변 바로 옆의 비병변 피부를 채취해 직접면역형광으로 진피 유두의 과립상 IgA 침착을 확인한다. 철결핍은 동반될 수 있지만 피부 진단을 확정하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. C 철결핍빈혈은 DH/celiac를 지지하는 연관 소견이지 그 자체 확진검사는 아님을 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009580
