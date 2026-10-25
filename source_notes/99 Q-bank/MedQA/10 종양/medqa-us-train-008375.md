---
type: qbank
schema_version: 1
id: medqa-us-train-008375
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f7d8a41d4d6226ac44313df7c6676dd9fe49b1a4384a9823b736af4bd0f5ae6
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Paget disease of the breast"
  - "nipple eczema"
  - "punch biopsy"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: simple
answer: B
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
---

# MedQA US 임상문제

## 문제

고혈압 병력이 있는 48세 여성이 좌측 유방 병변에 대한 2차 의견을 위해 내원했다. 일차의는 습진으로 판단해 국소 스테로이드를 사용했으나 일시적으로만 호전되었고 병변이 커지기 시작했다. 좌측 유두-유륜 복합체에 진물 나는 홍반성 비늘 병변이 있다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 양측 유방 초음파
B. 유두 펀치 생검 후 양측 유방촬영술
C. 경구 코르티코스테로이드
D. 좌측 유방 MRI

## 해설


지속·진행하는 일측 유두-유륜의 습진양 병변은 mammary Paget disease를 의심해야 한다. 보기 중 유두 병변의 punch biopsy와 bilateral mammography B가 적절하다. 피부 조직으로 Paget cell을 확인하고 영상은 동반 DCIS/침윤성 유방병변 등을 찾기 위한 것이지 유방촬영만으로 전신전이를 평가하는 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008375 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Paget진단 B유지; bilateral mammography는전이검사가아니라 동반유방병변 평가라는오류교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/breast-cancer-types/paget-disease-breast

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008375
