---
type: qbank
schema_version: 1
id: medqa-us-train-007634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:628866fa1509b8208dc1e651aa5f7ebf2939be3b4e6fb180461ad274194d2784
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "크립토스포리디움증"
  - "HIV 감염"
  - "CD4 감소"
  - "만성 물 설사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

항레트로바이러스제를 중단한 HIV 환자에게 3주째 지속되는 물설사가 있다. CD4는 79/μL이고 대변 분자검사에서 크립토스포리디움이 확인됐다. 수분·전해질 보충과 함께 회복에 가장 중요한 치료는?

## 선택지

A. 고용량 스테로이드로 장 염증을 억제한다
B. 설사가 없어질 때까지 HIV 치료를 보류한다
C. 메트로니다졸 단독으로 치료한다
D. 항레트로바이러스 치료를 재개해 면역 회복을 유도한다

## 해설


진행된 HIV 환자의 크립토스포리디움증에서는 효과적인 항레트로바이러스 치료를 통한 면역 회복이 핵심이다. 수분과 전해질도 보충하며, 항원충제를 고려하더라도 HIV 치료를 대신하지는 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007634 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 없는 체중감소를 추가한 해설 교정; advanced HIV watery diarrhea/RUQ의 Crypto A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007634
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cryptosporidiosis
