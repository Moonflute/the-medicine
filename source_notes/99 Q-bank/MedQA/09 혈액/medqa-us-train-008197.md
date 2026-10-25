---
type: qbank
schema_version: 1
id: medqa-us-train-008197
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:36f233234474e66f84ebc79a3ae19cfa1d01f71610c01adead7b28e8b4c7d0b5
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "microcytic anemia"
  - "thalassemia"
  - "hemoglobin electrophoresis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: investigation
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 11주인 27세 아프리카계 미국인 초임부가 산전 진찰을 위해 내원했다. 평소보다 피곤하지만 다른 증상은 없다. 헤모글로빈 9.2 g/dL, 헤마토크릿 27.5%, MCV 74 μm³, MCH 24 pg/cell, 철 67, 페리틴 98이다. 가장 적절한 다음 처치는?

## 선택지

A. 항카디오리핀 항체 역가 측정
B. 양수천자
C. 직접 쿰스검사
D. 혈색소 전기영동

## 해설


임신 중 소구성 빈혈과 보존된 ferritin은 thalassemia 등 혈색소병 평가를 필요로 하여 선택지 D가 적절하다. Beta-thal에서는 HbA2 등 분획이 도움이 되지만 alpha-thal trait는 전기영동이 정상일 수 있어 필요한 경우 유전검사를 추가한다. 인종만으로 beta형을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008197 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소구성·저장철 보존에서 Hb분획 D 유지; 모든 thalassemia가 전기영동만으로 확진된다는 설명 보정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008197
