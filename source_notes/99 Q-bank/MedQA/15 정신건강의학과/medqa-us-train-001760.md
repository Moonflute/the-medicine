---
type: qbank
schema_version: 1
id: medqa-us-train-001760
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:137809d9be8805c37c7e4d6b302f32ffec6ed65086f2005e666a5f90ebba70a2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "opioid overdose"
  - "heroin intoxication"
  - "miosis"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhO2OuOycoOyCrOygnCDspJHrj4UgKE9waW9pZCBQb2lzb25pbmcpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

응급실에 온 환자가 거의 반응하지 않고 동공이 작다. 맥박은 있으나 호흡수는 분당 5회이고 산소포화도가 떨어진다. 오피오이드 과량 사용을 의심할 때 즉시 할 처치는?

## 선택지

A. 보조환기를 시행하고 날록손을 투여한다
B. 산소만 투여하며 자발호흡 회복을 기다린다
C. 날록손을 투여한 뒤 반응이 올 때까지 보조환기를 미룬다
D. 독성검사로 물질을 확인한 뒤 해독제를 투여한다

## 해설


오피오이드 중독의 즉각적인 위험은 호흡억제다. 기도와 환기를 먼저 지원하면서 날록손을 투여하고, 회복 뒤에도 재발하는 호흡억제를 감시한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001760
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation
