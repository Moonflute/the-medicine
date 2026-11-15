---
type: qbank
schema_version: 1
id: medqa-us-train-000568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48221e8374dbb2da080de674f68e93e63efbe51495a81cf6a58f98061df6166b
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "testicular mass"
  - "Testicular cancer"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 통증 없는 오른쪽 고환 덩이를 발견했다. 진찰에서 고환과 분리되지 않는 단단한 결절이 만져진다. 가장 먼저 하는 영상검사는?

## 선택지

A. 복부·골반 CT
B. 경직장 초음파
C. 음낭 초음파
D. 전신 뼈스캔

## 해설

음낭 초음파로 종괴가 고환 안에 있는지, 고형인지 확인한다. 악성 고환종양이 의심되면 혈청 종양표지자를 검사하고 서혜부 접근을 계획하며 경음낭 바늘생검을 먼저 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고환 초음파 B 유지, 조직검사가 전혀 필요없다는 해설을 경음낭 바늘생검 회피와 수술병리의 역할로 구분.
- 공식/학회 근거: https://uroweb.org/guidelines/testicular-cancer/chapter/diagnostic-evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000568
