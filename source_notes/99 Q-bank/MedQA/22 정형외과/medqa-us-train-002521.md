---
type: qbank
schema_version: 1
id: medqa-us-train-002521
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ce0dfd966bb9888f67fb99fe0f260edfe376807f2910563826c12408d3f4791
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "midshaft humerus fracture"
  - "radial nerve palsy"
  - "wrist drop"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

위팔뼈 몸통 골절 뒤 22세 남성이 손목과 손가락을 펴지 못한다. 엄지와 검지 사이 손등 감각도 둔하다. 가장 가능성 높은 신경 손상은?

## 선택지

A. 액와신경
B. 정중신경
C. 요골신경
D. 척골신경

## 해설

요골신경은 위팔뼈 몸통 뒤를 지나며 손목과 손가락 폄을 담당한다. 첫째 손가락 사이 손등 감각을 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요골신경 손상을 전완 통과로만 설명하던 해설을 상완골 간부의 요골신경고랑 관계로 바로잡았다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002521
