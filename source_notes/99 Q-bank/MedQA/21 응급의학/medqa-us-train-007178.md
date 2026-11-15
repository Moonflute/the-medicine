---
type: qbank
schema_version: 1
id: medqa-us-train-007178
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd0496c7ea35b9b6fb2a509bbae7d0d0da8fd9484febd35d1621fb386464659b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "살리실산염 중독"
  - "혼합 산-염기 장애"
  - "호흡성 알칼리증"
  - "대사성 산증"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCtOumrOyLpOyCsCDspJHrj4UgKFNhbGljeWxhdGUgUG9pc29uaW5nKS5tZA
difficulty: complex
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

47세 여성이 이명과 구역에 이어 호흡이 빨라졌다. Na 138, Cl 100, HCO₃⁻ 12 mEq/L, 동맥혈 pH 7.37, PaCO₂ 21 mmHg다. 이 산-염기 이상을 가장 잘 설명하는 중독은?

## 선택지

A. 에탄올 단독 중독
B. 벤조디아제핀 중독
C. 아편유사제 중독
D. 살리실산염 중독

## 해설

음이온차가 26으로 높고, PaCO₂가 대사성 산증의 예상 보상보다 더 낮다. 고음이온차 대사성 산증과 호흡성 알칼리증의 조합은 살리실산염 중독을 시사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 혼합 산염기 장애 C를 유지하고 pH·HCO3를 저탄산혈증 수치처럼 묶은 표현을 바로잡는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007178
