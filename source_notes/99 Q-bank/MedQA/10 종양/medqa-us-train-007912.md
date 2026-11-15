---
type: qbank
schema_version: 1
id: medqa-us-train-007912
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0227c7974517c9928a604d6dc098ecb8791fe5670d37a31fd722e92639269762
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "chylous ascites"
  - "lymphoma"
  - "malignant ascites"
related_disease_slugs:
  - MTEg7Jm46rO8L-yVlOyjvSDrs7XsiJggKENoeWxvdXMgQXNjaXRlcykubWQ
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

54세 남성이 새로 생긴 복부팽만으로 진단적 복수천자를 받았다. 복수는 우윳빛이고 림프구가 우세하다. 복수 중성지방은 360 mg/dL, 혈청-복수 알부민 차이(SAAG)는 0.9 g/dL이다. 우윳빛과 고중성지방을 설명하는 소견은?

## 선택지

A. 담즙성 복수
B. 혈성 복수
C. 유미성 복수
D. 췌장성 복수

## 해설


중성지방이 풍부한 림프액이 복강에 차면 유미성 복수가 된다. 비외상성이고 SAAG가 낮다면 림프종 등 림프 흐름을 막는 원인을 찾아야 하며 이 수치만으로 림프종을 확진할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007912 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복수 문항에 무월경 FSH/estrogen 해설이 연결된 오류를 low-SAAG chylous ascites와 lymphoma 기전으로 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007912
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10152612/
