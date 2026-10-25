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
question_type: mechanism
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: simple
answer: C
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

45세 여성이 발열, 기침, 편도 비대, 입술 출혈로 응급실에 내원했다. 손바닥과 발바닥을 포함해 전신 체표면적의 55%를 덮는 미만성 수포성 발진이 있다. 가볍게 문지르면 표피 상층이 쉽게 벗겨진다. 24시간 이내 발진이 체표면적의 88%로 진행되었고 호흡곤란으로 기계환기가 필요하다. 다음 중 이 환자 상태의 가장 가능성 높은 원인은?

## 선택지

A. 단순포진바이러스
B. 전염성 연속종
C. 카르바마제핀 노출
D. 거대세포바이러스

## 해설

전신의 급성 수포·점막 침범과 광범위 표피 박리는 SJS/TEN 스펙트럼의 중증 피부약물반응을 시사한다. 박리가 체표면적 30%를 넘으면 TEN으로 분류하며, 제시된 광범위 침범을 단순 SJS라 부르면 부정확하다. Carbamazepine(C)은 대표적인 유발 약물이다. 발진 전체 면적과 실제 박리 면적은 구분해 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광범위 표피박리의 TEN 스펙트럼을 단순 SJS로 부른 해설을 수정한다. 원인 약물 C는 유지한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009903
