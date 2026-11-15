---
type: qbank
schema_version: 1
id: medqa-us-train-008301
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3755c1662e49fd37c46df4a9da3060f6c6222e50c85fcafcafe76b3c4850a6d4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "pulmonary embolism"
  - "heparin discontinuation"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

폐색전증으로 헤파린을 시작한 환자의 6일째 혈소판이 15만에서 4만/μL로 떨어졌고 새 하지 혈전이 생겼다. 헤파린 유발 혈소판감소증이 강하게 의심된다. 확인검사를 보내면서 할 처치는?

## 선택지

A. 모든 헤파린을 중단하고 비헤파린 항응고제로 전환한다
B. 저분자량 헤파린으로 바꾼다
C. 헤파린을 유지하며 혈소판만 수혈한다
D. 헤파린을 유지하면서 와파린 단독을 추가한다

## 해설


헤파린 시작 5–10일 뒤 혈소판이 크게 줄고 새 혈전이 생기면 HIT를 강하게 의심한다. 확진을 기다리는 동안에도 모든 헤파린을 중단하고 비헤파린 항응고제를 시작한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008301
- https://www.hematology.org/resources/clinical-practice-guidelines/venous-thromboembolism-guidelines/heparin-induced-thrombocytopenia
