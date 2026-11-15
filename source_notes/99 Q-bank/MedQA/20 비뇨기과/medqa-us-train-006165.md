---
type: qbank
schema_version: 1
id: medqa-us-train-006165
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8500501f263fd2415b65bb79c4448b90d80d53368a5e6ae04abd00ff489e23e
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "후부 요도판막"
  - "신생아 요로폐색"
  - "내시경적 판막 절제"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
difficulty: complex
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

양수과소증이 있었던 신생아 남아가 약한 소변줄기와 팽창한 방광으로 내원했다. 방광을 배액하고 감염을 치료해 안정화했다. 배뇨중방광요도조영술에서 후부요도판막이 확인됐다. 근본 치료는?

## 선택지

A. 내시경적 판막 절제술
B. 요관 재이식술
C. 요도 게실 절제술
D. 방광 내 항생제 주입

## 해설

초기에는 방광 배액과 전신 안정화가 우선이다. 후부요도판막에 의한 방광출구 폐쇄가 확인되면 가능한 시점에 내시경적 판막 절제로 해소한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 후부 요도판막을 외요도구가 열리지 않는 병변으로 잘못 설명한 오류 교정, 안정화·방광 배액 선행을 보완.
- 공식/학회 근거: https://uroweb.org/guidelines/paediatric-urology/chapter/congenital-lower-urinary-tract-obstruction

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006165
