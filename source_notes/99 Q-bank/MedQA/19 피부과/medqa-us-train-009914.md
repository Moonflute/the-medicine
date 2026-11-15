---
type: qbank
schema_version: 1
id: medqa-us-train-009914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cdf89af4b47e641bd6ec14c7cacb061158550fd694141816fe5e71e48c218683
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "포진상 피부염"
  - "셀리악병"
  - "답손"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성의 양쪽 팔꿈치에 가려운 군집 수포가 반복된다. 만성 지방변이 있고 직접면역형광에서 진피 유두의 과립형 IgA 침착이 확인됐다. 글루텐 제한식과 함께 피부 증상을 빠르게 완화할 약은?

## 선택지

A. 국소 테르비나핀
B. 경구 아시클로버
C. 경구 답손
D. 국소 퍼메트린

## 해설

포진피부염에서 답손은 피부 증상을 빠르게 줄인다. 시작 전에 G6PD 결핍과 혈구 수를 확인하며, 셀리악병 관리는 글루텐 제한식이 핵심이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 임신/AF 해설 오연결. 흡수장애·소구성빈혈 및 대칭 신전부 소양성 발진은 포진피부염을 지지하여 원정답 A 유지. 그림은 없지만 본문과 치료선지로 판단 가능.
- 공식/학회 근거: https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/digestive-diseases/dermatitis-herpetiformis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009914
