---
type: qbank
schema_version: 1
id: medqa-us-train-001786
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae1aa5889d111e34f55eedc8ebc8f87a276d2644449fb1b7102f074a48870ff8
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "muscle-invasive bladder cancer"
  - "urothelial carcinoma"
  - "radical cystectomy"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
difficulty: standard
answer: D
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

61세 남성의 방광 종양에서 근육층을 침범한 요로상피암이 확인됐다. 원격전이는 없고, 다학제 논의 결과 방광을 보존하지 않는 근치 치료를 선택했다. 수술 방법은?

## 선택지

A. 경요도절제 후 방광 내 약물 주입만 시행
B. 요관 스텐트 삽입
C. 병변 국소 소작
D. 근치적 방광절제술과 골반 림프절절제

## 해설

국소 근육침범 방광암의 수술적 근치 치료는 근치적 방광절제와 골반 림프절절제다. 환자에 따라 수술 전후 전신 치료를 병행하며, 적합한 환자에게 방광 보존 삼중요법도 논의할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 근육침범암의 C를 유지하고 방광 보존 복합치료 불가능이라는 단정 및 청력저하의 cisplatin 적합성 의미를 보완.
- 공식/학회 근거: https://uroweb.org/guidelines/muscle-invasive-and-metastatic-bladder-cancer/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001786
