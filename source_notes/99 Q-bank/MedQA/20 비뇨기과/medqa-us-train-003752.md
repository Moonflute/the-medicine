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

75세 남성이 한 달간 반복되는 무통성 혈뇨로 내원했다. 방광경에서 단일 종양이 발견되어 경요도 절제술을 시행했고, 고등급 요로상피암이 상피층에 국한되며 하부조직이나 고유근층을 침범하지 않았다. 다음 중 가장 적절한 다음 치료는?

## 선택지

A. 방광 방사선치료
B. 방광 보존 부분 방광절제술
C. 방광 내 BCG
D. 전신 복합항암화학요법

## 해설

고등급의 비근육침범 요로상피암이며 영어 원문에서는 하부조직이나 고유근층 침범이 없다고 기술되어 있다. 완전한 절제와 정확한 병기·위험도 평가를 바탕으로 선지 중 C, 방광 내 BCG가 적절한 보조 치료이다. 근육 포함 여부·절제 완전성 또는 T1 여부에 따라 재-TURBT가 필요할 수 있으며, 확인 없이 모든 경우 즉시 같은 경로로 진행한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영어 원문은 하부조직 침범이 없는데 한국어가 점막 아래 침범으로 병기를 바꾼 오류 복원; BCG C 유지.
- 공식/학회 근거: https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/disease-management
- 공식/학회 근거: https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003752
