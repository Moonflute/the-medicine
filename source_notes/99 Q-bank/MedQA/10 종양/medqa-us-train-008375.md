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
answer: D
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

48세 여성의 한쪽 유두·유륜에 진물이 나고 비늘이 생긴다. 국소 스테로이드에도 병변이 계속 커진다. 유방촬영술에서 뚜렷한 종괴는 없다. 다음 검사는?

## 선택지

A. 유방촬영술 1년 뒤 반복
B. 생검 대신 유방 MRI만으로 확진
C. 유두 분비물 세균배양만 시행
D. 유두 병변의 피부 생검

## 해설


치료에 반응하지 않는 한쪽 유두의 습진 모양 병변은 유방 파제트병의 경고 신호다. 유방 영상이 정상이더라도 병변을 생검하고, 필요하면 동반 유방암을 추가로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008375 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Paget진단 B유지; bilateral mammography는전이검사가아니라 동반유방병변 평가라는오류교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/breast-cancer-types/paget-disease-breast

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008375
