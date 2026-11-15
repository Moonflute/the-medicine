---
type: qbank
schema_version: 1
id: medqa-us-train-008620
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:146b04d45f4d1992a2a7bfe24a549d5872d0f9acda399f406d20c184c48f4d60
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "dermatomyositis"
  - "anti-Jo-1 antibody"
  - "malignancy association"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

52세 여성이 성인 발병 피부근염으로 진단됐다. 항TIF1γ 항체가 양성이고 연하곤란과 의도하지 않은 체중 감소가 있다. 기저 악성종양 평가 계획으로 적절한 것은?

## 선택지

A. 나이·성별에 맞는 국내 검진 외에 근염 관련 위험에 맞춰 추가 암 평가를 한다
B. 근염이 완전히 호전될 때까지 모든 검진을 연기한다
C. 피부근염은 암과 무관해 검진을 중단한다
D. 모든 환자에서 유방 검사 한 종류만 한다

## 해설


성인 피부근염에서 고령 발병, 항TIF1γ 양성, 연하곤란 등은 암 위험을 높인다. 국가 검진을 기본으로 위험군에 맞춰 추가 평가를 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008620 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 피부근염과 유방암 A의 보기 연관을 유지하되 anti-Jo1의 암위험이 상대적으로 낮다는 현행위험층화와 암종 보편최다 주장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nature.com/articles/s41584-023-01045-w

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008620
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10834225/
