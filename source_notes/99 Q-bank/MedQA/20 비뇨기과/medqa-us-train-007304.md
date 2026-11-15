---
type: qbank
schema_version: 1
id: medqa-us-train-007304
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf4fa13e267301caaefd18a25b1b0e1b0560bfcfc39e0d221952142e5677ceee
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "당뇨병성 자율신경병증"
  - "신경인성 방광"
  - "범람성 요실금"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

오래된 당뇨병과 말초신경병증이 있는 76세 여성이 소변이 조금씩 계속 새고 방광이 차도 잘 느끼지 못한다고 한다. 배뇨 뒤 잔뇨가 460 mL다. 가장 가능성 높은 요실금 유형은?

## 선택지

A. 복압성 요실금
B. 절박성 요실금
C. 기능성 요실금
D. 범람성 요실금

## 해설

충만감이 둔하고 잔뇨가 많으면서 조금씩 새면 불완전 배출에 의한 범람성 요실금을 의심한다. 당뇨병성 자율신경병증은 방광 감각과 수축력을 떨어뜨릴 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 당뇨 신경병증에 의한 범람성 요실금을 방광 과민으로 잘못 설명한 기전 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007304
