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
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
difficulty: simple
answer: C
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

22세 남자가 가려운 발진으로 내원했다. 그 외 문진은 정상이다. 진찰에서 홍반을 바탕으로 등 상부에 딱지가 있는 소수포 군집과 주변 부종이 보인다. 진단을 확정하는 데 도움이 될 추가 소견은 무엇인가?

## 선택지

A. 부갑상선기능항진증
B. 제2형 당뇨병
C. 철결핍성 빈혈
D. 육안적 혈뇨

## 해설

심한 소양성 군집 수포는 포진상피부염을 시사한다. 연관 celiac disease의 흡수장애로 철결핍빈혈(C)이 동반될 수 있어 선지 중 진단을 지지하는 추가 소견으로 가장 적절하다. 철결핍빈혈만으로 피부 진단을 확정할 수는 없으며 병변 분포·직접면역형광·관련 혈청검사 등과 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. C 철결핍빈혈은 DH/celiac를 지지하는 연관 소견이지 그 자체 확진검사는 아님을 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009580
