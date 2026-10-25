---
type: qbank
schema_version: 1
id: medqa-us-train-002383
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:39cf6112728dd7f16e25f3b731d1074c1cd302861635f9efa5b58500e0974c35
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "erectile dysfunction"
  - "psychogenic erectile dysfunction"
  - "nocturnal penile tumescence"
  - "Erectile dysfunction"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남성이 발기부전으로 일차진료의를 방문했다. 결혼을 희망하는 건강한 장기 연애 중인 여성 파트너가 있지만 발기가 되지 않아 당황하고 있다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 야간 음경 팽창을 평가한다
B. 음경 이중 초음파
C. 실데나필을 처방한다
D. 바데나필을 처방한다

## 해설

원인을 평가하지 않은 초진 발기부전에서는 성적·의학적 병력과 진찰을 먼저 시행한다. 선지 A는 야간/아침의 자연 발기 여부를 확인하는 초기 평가로 타당하다. 자연 발기가 유지되면 심인성 요소를 시사하지만 확진하지는 못하며, 젊다는 이유만으로 심인성으로 단정하지 않는다. 별도 기기를 이용한 야간 음경팽창 검사를 모든 초진 환자에게 일괄 시행하거나 원인 평가 없이 약제를 처방해야 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. A의 야간 발기 평가를 초진 병력청취로 구분하고 젊다는 이유만의 심인성 확정 및 일괄 기기검사 주장을 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/management-of-erectile-dysfunction
- 공식/학회 근거: https://www.auajournals.org/doi/10.1016/j.juro.2018.05.004

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002383
