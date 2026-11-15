---
type: qbank
schema_version: 1
id: medqa-us-train-008417
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:02b0f8eeb6424b7fcb2fd030090ba660ac5efb119f5404236fea22941d2d3a53
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "hypokalemia"
  - "type 1 diabetes mellitus"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

제1형 당뇨병 환자의 케톤산증에 등장성 수액을 시작했다. pH 7.17, 혈중 케톤 6 mmol/L, 혈청 칼륨 2.9 mmol/L이며 소변이 나온다. 정맥 인슐린을 시작하기 전에 할 처치는?

## 선택지

A. 인슐린과 인산염을 먼저 투여한다
B. 인슐린과 포도당을 먼저 투여한다
C. 정맥 칼륨을 보충하고 재측정한다
D. 중탄산나트륨을 먼저 투여한다

## 해설


이 정도 저칼륨에서 인슐린을 먼저 주면 칼륨이 세포 안으로 이동해 부정맥 위험이 커진다. 칼륨을 교정하고 안전한 수치에 도달한 뒤 인슐린을 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008417 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: K2.9 DKA에서 수액만 먼저가 아니라 K 보충 후 인슐린이라는 핵심 C 근거 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008417
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.2337/dci24-0032
