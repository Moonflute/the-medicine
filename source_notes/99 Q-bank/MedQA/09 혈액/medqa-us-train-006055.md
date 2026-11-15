---
type: qbank
schema_version: 1
id: medqa-us-train-006055
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:834f45083039ac67a62f921c1c7cbeb11e72317c808ca74dae3461fb84b98642
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "베타 지중해빈혈 중증형"
  - "소구성 빈혈"
  - "골수외 조혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
question_type: diagnosis
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

13개월 아이가 창백, 성장부진과 간비장비대로 왔다. 심한 소구성 빈혈과 표적세포·유핵 적혈구가 보이고 철결핍은 없다. 수혈 전 검사에서 HbF가 현저히 높고 HbA는 거의 없다. 가장 가능성 높은 진단은?

## 선택지

A. 철결핍성 빈혈
B. 유전구형적혈구증
C. 겸상적혈구병 보인자
D. 중증 베타 지중해빈혈

## 해설


생후 수개월 뒤 심한 소구성 빈혈과 간비장비대가 나타나고 HbF가 높으며 HbA가 매우 낮으면 중증 베타 지중해빈혈에 부합한다. 유전검사로 유형을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006055 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골수외 혈색소화라는 오류를 골수외 조혈·골수 확장으로 교정; beta-thal major D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006055
- https://doi.org/10.1002/hem3.70095
