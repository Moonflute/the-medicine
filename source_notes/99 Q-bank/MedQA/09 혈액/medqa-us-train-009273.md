---
type: qbank
schema_version: 1
id: medqa-us-train-009273
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a735c8d1c4ea239169558d4f816f7eb48773fb1253e4793f16816620902bb30
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "겸상적혈구병"
  - "penicillin prophylaxis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: prevention
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvVXJzb2Rlb3h5Y2hvbGljQWNpZC5tZA
---

# MedQA US 임상문제

## 문제

HbSS 겸상적혈구병이 확인된 3세 아이가 외래에 왔다. 현재 열은 없고 예정된 예방접종은 받고 있으며 페니실린 알레르기는 없다. 침습성 폐렴구균 감염을 줄이기 위해 추가할 예방은?

## 선택지

A. 발열이 생길 때만 페니실린을 복용하게 한다
B. 접종과 별도로 경구 페니실린 예방요법을 유지한다
C. 예방 항생제를 쓰는 동안 폐렴구균 접종은 중단한다
D. 하이드록시우레아로 예방 항생제를 대체한다

## 해설


어린 겸상적혈구병 환자는 예방접종에 더해 페니실린 예방요법을 시행한다. 일반적으로 5세까지 사용하고 이전 비장절제나 침습감염 등 위험인자를 확인하여 이후 계획을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009273 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HbS·HbF 증가/HbA 부재의 SCD에서 5세까지 penicillin B 유지하되 5세 무조건 중단하지 않음. 원문의 백혈구 11/mm3 단위/자릿수 오류를 정상값으로 임의 보정하지 않고 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nhlbi.nih.gov/health/sickle-cell-disease/treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009273
- https://publications.aap.org/pediatrics/article/154/2/e2024066842/197803/Health-Supervision-for-Children-and-Adolescents
