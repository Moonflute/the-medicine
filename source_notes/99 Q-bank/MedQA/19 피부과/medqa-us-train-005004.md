---
type: qbank
schema_version: 1
id: medqa-us-train-005004
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3b0cec3a688e52e56e2d8a9c036a0e16b15c9f8b4d325b18068d6cc647b2276
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "독성 표피 괴사용해"
  - "스티븐스-존슨 증후군"
  - "시프로플록사신 유발 중증 피부약물이상반응"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 환자가 새 약을 시작한 뒤 통증성 홍반과 구강·안구 점막 미란이 생겼다. 피부가 실제로 벗겨진 면적은 체표면적의 약 40%다. 이 중증 피부약물반응의 분류는?

## 선택지

A. 스티븐스–존슨증후군
B. 스티븐스–존슨증후군과 독성표피괴사용해 중첩
C. 다형홍반
D. 독성표피괴사용해

## 해설

스티븐스–존슨증후군과 독성표피괴사용해는 발진 전체가 아니라 실제 표피 박리 면적으로 구분한다. 30%를 넘는 광범위 박리는 독성표피괴사용해에 해당한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. >40% 표피 박리는 TEN이며 SJS로 잘못 분류한 설명을 교정한다. 진단 검사 C는 유지한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005004
- https://onlinelibrary.wiley.com/doi/10.1111/ddg.15515
