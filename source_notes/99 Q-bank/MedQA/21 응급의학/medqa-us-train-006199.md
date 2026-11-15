---
type: qbank
schema_version: 1
id: medqa-us-train-006199
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f2da48bf7dc2a6af647ed815d33d834041273514c7422cdcc432a298c853dda
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "욕창"
  - "압박 손상"
  - "체위 변경"
question_type: prevention
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

하반신마비로 발꿈치 감각이 떨어진 환자가 수술 후 오랫동안 침대에 누워 있다. 발꿈치 압박손상을 예방할 조치는?

## 선택지

A. 발꿈치 피부를 세게 마사지한다
B. 항생제 연고를 예방적으로 바른다
C. 발꿈치 압력을 없애고 체위를 정기적으로 바꾼다
D. 발목을 단단히 고정해 움직이지 못하게 한다

## 해설

발꿈치가 지지면에 오래 닿지 않도록 압력을 분산하고, 피부 상태와 움직임에 맞춰 정기적으로 체위를 바꾼다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 압박손상 예방의 체위 변경 B는 유지하되 흡연·영양 등의 위험 요인이 아무 영향이 없다는 해설의 단정을 제거한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg179/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006199
