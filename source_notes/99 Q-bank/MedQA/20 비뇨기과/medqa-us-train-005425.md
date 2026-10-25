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
answer: C
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

26세 남자가 하루 동안 객혈, 피로와 2개월 동안 10 kg 체중감소로 내원했다. 경한 여성형 유방, 양측 폐의 간헐적 수포음, 오른쪽 고환의 압통과 비대, 혈청 β-hCG 상승이 있다. 가장 가능성 높은 진단은?

## 선택지

A. 고환염
B. 정자낭종
C. 고환 악성종양
D. 음낭수종

## 해설

오른쪽 고환의 고형 비투과성 종괴, beta-hCG 상승·여성형 유방과 체중감소는 C, 고환 악성종양을 시사한다. 객혈과 호흡기 증상은 혈행성 폐 전이를 고려하게 하며 hCG 분비가 두드러지는 융모막암 성분 등 비정상피종성 생식세포종양이 중요한 감별이다. 하지만 임상과 표지자만으로 조직형을 확정할 수 없다. 본문의 고환 비대는 오른쪽이며 양측으로 바꾸지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 편측 고환 비대를 양측으로 잘못 설명하고 hCG 분비 종양명을 비정형 배아성으로 한정한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005425
