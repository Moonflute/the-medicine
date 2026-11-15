---
type: qbank
schema_version: 1
id: medqa-us-train-005162
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c36cf63a219d1c7e35de6822e14f0f42b5e9215bc2e3db2d9a217c08dcc65c8f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발근염"
  - "염증성 근육병"
  - "근전도검사"
  - "polymyositis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 계단을 오르거나 머리를 빗기 어려울 정도의 대칭성 근위부 근력저하와 CK 7,000 U/L로 평가받는다. 최근 물을 마실 때 사레가 잦고 목소리가 젖은 듯 변한다. 근육병 원인 검사와 함께 우선 할 조치는?

## 선택지

A. CK가 정상화될 때까지 삼킴 평가를 미룬다
B. 삼킴 기능과 흡인 위험을 신속히 평가한다
C. 음식 질감과 무관하게 고형식만 권한다
D. 목소리 변화가 일시적이므로 진통제만 투여한다

## 해설


염증성 근병증의 연하곤란은 흡인 위험을 높인다. 병형을 확인하는 검사와 별개로 삼킴 안전성을 평가하고 영양·흡인 예방을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005162 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심한 CK/LDH 상승과 대칭 근위부 근력저하·연하곤란은 근병증을 시사하며 선택지 중 EMG B가 근병성 전기생리 평가에 적절하다. 감각·반사 보존과 휴식 비호전을 포함해 원문·해설을 대조했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niehs.nih.gov/sites/default/files/2024-09/naehs_council_abstract_rider_2024_september_long_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005162
- https://doi.org/10.1093/rheumatology/keac115
