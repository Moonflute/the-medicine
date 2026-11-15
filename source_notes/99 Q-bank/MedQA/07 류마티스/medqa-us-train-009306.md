---
type: qbank
schema_version: 1
id: medqa-us-train-009306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8574c0a67af197df25dd92ade4dda40bf26d8fd0b446e81fa13686af649dd8c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "diffuse systemic sclerosis"
  - "미만성 전신경화증"
  - "anti-Scl-70 antibody"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

35세 여성에게 레이노 현상과 함께 손가락, 양쪽 위팔 및 가슴의 새 피부경화가 확인됐다. 전신경화증으로 진단됐고 항Scl-70이 양성이다. 피부 침범 범위에 따른 분류는?

## 선택지

A. 제한형 피부 전신경화증
B. 미만형 피부 전신경화증
C. 전신경화증 없는 피부경화증
D. 일차성 레이노 현상

## 해설


팔꿈치나 무릎보다 근위부 또는 몸통까지 피부경화가 뻗어 있으면 미만형을 지지한다. 항Scl-70만으로 아형을 나누지 않으며 폐 등 장기 침범을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009306 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전신경화증 질문에 fluoroquinolone 건병증 해설이 붙은 오류 교체. Scl70만으로 피부범위아형 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009306
- https://doi.org/10.1136/ard-2024-226430
