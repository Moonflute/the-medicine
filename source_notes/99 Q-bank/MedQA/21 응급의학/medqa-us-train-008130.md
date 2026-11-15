---
type: qbank
schema_version: 1
id: medqa-us-train-008130
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58c654a7d10040d8d879dde0656230edd3d9d5fbf01d6e57b03c32356a8da23f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemorrhagic shock"
  - "intraosseous access"
  - "trauma resuscitation"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

교통사고 뒤 혈압 76/42 mmHg인 환자에게 출혈성 쇼크가 의심된다. 지혈과 소생을 진행 중인데 말초 정맥로 확보에 반복해 실패했다. 수혈과 응급약 투여를 위해 신속히 확보할 경로는?

## 선택지

A. 경구 투여
B. 골내 접근
C. 피하 주입
D. 혈압이 회복될 때까지 확보 보류

## 해설


응급 소생에서 말초 정맥로가 확보되지 않으면 골내 접근으로 약과 수액 또는 혈액제제를 투여할 수 있다. 지혈과 소생을 계속하며 추가 접근로를 확보한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008130
