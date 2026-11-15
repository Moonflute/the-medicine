---
type: qbank
schema_version: 1
id: medqa-us-train-002262
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6abe6fb2283bceac4c43f428b5371b2c96a31699cc1e2c05ee4d0bd52996fc9c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "HIT"
  - "PF4 antibody"
  - "thrombosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: investigation
difficulty: complex
answer: A
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

혈액투석 때마다 헤파린을 사용한 환자가 7일째 새 다리 정맥혈전과 50% 넘는 혈소판 감소를 보였다. 4Ts 점수에서 임상 가능성이 높아 헤파린 중단과 대체 항응고를 준비했다. 우선 시행할 검사실 검사는?

## 선택지

A. PF4-헤파린 복합체에 대한 항체 면역검사
B. 제VIII인자 활성 검사
C. 혈청 항내인자 항체검사
D. 적혈구 유세포분석만 시행

## 해설


임상 가능성이 높을 때 PF4-헤파린 면역검사를 시행한다. 양성은 혈소판을 활성화하지 않는 항체도 검출할 수 있으므로 결과 강도와 상황에 따라 기능검사를 보완한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002262 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIT ELISA가 가장 민감하고 특이하다는 오류를 4Ts 후 면역검사·필요시 기능검사 순서로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002262
