---
type: qbank
schema_version: 1
id: medqa-us-validation-000687
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a768c678cdc6ce75e13386fab390fa22e11d7199bbddd1182470eba4d636ea19
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "두부백선"
  - "검은점 두부백선"
  - "곰팡이성 탈모"
  - "Tinea capitis"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 두피의 인설과 탈모로 진료를 받으러 왔다. 두피에 인설성 반점이 생긴 뒤 커다란 탈모반이 되었고 뒤통수와 목의 림프절이 붓고 검은 점들이 남아 있다. 가장 가능성 높은 진단은?

## 선택지

A. 화폐상 피부염
B. 건선
C. 두부백선
D. 발모벽

## 해설

인설성 두피 병변, 탈모반, 후이개·경부 림프절 종대 및 남아 있는 검은 점은 두부백선(tinea capitis, C)을 지지한다. 검은 점은 감염된 모발이 두피 표면 가까이에서 부러져 남은 모발 단면이며 점상 각질이 아니다. 발모벽은 인설·림프절 종대보다는 불규칙하게 부러진 모발이 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두부백선 해설의 검은 점을 점상 각질로 설명한 오류와 존재하지 않는 병명 표기를 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000687
