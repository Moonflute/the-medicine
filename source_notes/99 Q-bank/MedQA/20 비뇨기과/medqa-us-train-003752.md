---
type: qbank
schema_version: 1
id: medqa-us-train-003752
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25da11912ac9c38901048ab8c77a96d311f8cadaf50d33eb291406437f8d697c
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "high-grade non-muscle-invasive bladder cancer"
  - "urothelial carcinoma"
  - "intravesical BCG"
  - "hematuria"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 남성이 무통성 혈뇨로 방광경과 경요도절제술을 받았다. 병리에서 방광 상피내암(CIS)이 확인됐다. 근육 침범은 없고, 병기와 위험도를 평가한 뒤 방광을 보존하기로 했다. 적절한 방광 내 치료는?

## 선택지

A. 방광 내 헤파린
B. 방광 내 생리식염수 세척만 시행
C. 방광 내 BCG 주입
D. 방광 내 리도카인

## 해설

방광 상피내암은 고위험 비근육침범 방광암이다. 방광보존을 선택하면 방광 내 BCG 유도치료와 유지치료가 표준 선택지다. 병변 위험도와 반응에 따라 근치적 방광절제술 등을 따로 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영어 원문은 하부조직 침범이 없는데 한국어가 점막 아래 침범으로 병기를 바꾼 오류 복원; BCG C 유지.
- 공식/학회 근거: https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/disease-management
- 공식/학회 근거: https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003752
- 유럽비뇨의학회 비근육침범 방광암 지침(2026): https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer
