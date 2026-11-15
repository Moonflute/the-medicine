---
type: qbank
schema_version: 1
id: medqa-us-train-005425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e7162497b58a55822dc5fbd344d0a0fb9652a5a2ff346ce9ade20f609f982f74
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "고환암"
  - "융모막암종"
  - "β-hCG 분비 생식세포종양"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남성이 객혈로 내원했다. 흉부 영상에서 여러 폐 결절이 보이고, 진찰에서 여성형유방과 단단한 오른쪽 고환 종괴가 발견됐다. 혈청 β-hCG도 뚜렷하게 상승했다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 세균성 고환염
B. 음낭수종
C. 정계정맥류
D. 고환 생식세포종양

## 해설

단단한 고환 종괴, 뚜렷한 β-hCG 상승과 폐 결절은 전이성 고환 생식세포종양을 의심하게 한다. β-hCG만으로 구체적 조직형을 확정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 편측 고환 비대를 양측으로 잘못 설명하고 hCG 분비 종양명을 비정형 배아성으로 한정한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005425
