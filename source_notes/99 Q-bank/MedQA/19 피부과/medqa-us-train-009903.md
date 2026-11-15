---
type: qbank
schema_version: 1
id: medqa-us-train-009903
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20d309c31f63ee349cb807203a3811d22815da8751242584535a447d0311cc64
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "독성표피괴사용해"
  - "스티븐스-존슨 증후군"
  - "카르바마제핀"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DYXJiYW1hemVwaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

카르바마제핀을 시작한 지 2주 된 환자가 발열, 눈과 입의 통증, 넓은 피부 박리로 내원했다. 스티븐스–존슨증후군·독성표피괴사용해가 의심된다. 지금 할 일은?

## 선택지

A. 의심 약을 즉시 중단하고 중증 피부·점막 손상에 대한 응급 입원 치료를 진행한다
B. 생검 결과가 나올 때까지 카르바마제핀을 유지한다
C. 약을 절반으로 줄이고 외래에서 추적한다
D. 점막 침범과 별개로 국소 스테로이드만 바른다

## 해설

중증 피부약물반응이 의심되면 원인 약을 즉시 끊는다. 기도·체액·상처를 관리하고 안과를 포함한 다학제 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광범위 표피박리의 TEN 스펙트럼을 단순 SJS로 부른 해설을 수정한다. 원인 약물 C는 유지한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009903
- https://onlinelibrary.wiley.com/doi/10.1111/ddg.15515
