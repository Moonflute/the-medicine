---
type: qbank
schema_version: 1
id: medqa-us-train-007212
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55a56c0f3ea4e0cef68fc04c753758be283e1b2dfebab961e23d264aca1ae3b7
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "측두하악관절장애"
  - "이갈이"
  - "근막성 턱관절 통증"
  - "temporomandibular joint disorder"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
---

# MedQA US 임상문제

## 문제

33세 여성이 아침에 턱이 아프고 질긴 음식을 씹으면 더 아프다. 수면 중 이를 갈며 턱이 잠기거나 입이 크게 안 벌어지지는 않는다. 초기 치료는?

## 선택지

A. 교합을 영구적으로 바꾸는 치아 삭제
B. 관절 내 주사부터 시행
C. 턱관절 수술
D. 질긴 음식과 이 악물기를 줄이고 온찜질·운동 등 보존치료

## 해설


턱관절·저작근 통증은 자가관리, 과도한 부하 줄이기와 필요한 경우 물리치료로 시작한다. 처음부터 비가역적 교합 변경이나 수술을 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007212 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Bite guard를 일률적 통증 치료 표준으로 단정하지 않고 이갈이의 가역적 보존치료 선택으로 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nidcr.nih.gov/health-info/tmd

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007212
