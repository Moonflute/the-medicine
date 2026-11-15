---
type: qbank
schema_version: 1
id: medqa-us-train-000079
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0ec33861a04aaff12063b91e3328023c114907290d9e4b4df45d5dedf107bfa
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "diabetic ketoacidosis"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

10세 아이가 당뇨병성 케톤산증으로 왔다. 초기 등장성 수액을 시작했고 소변이 나온다. 인슐린 투여 전 혈중 칼륨이 2.7mmol/L로 확인됐다. 다음 조치는?

## 선택지

A. 칼륨 없이 정맥 인슐린을 시작한다
B. 인슐린을 정맥 일시 주사하고 나중에 칼륨을 보충한다
C. 심전도를 감시하며 칼륨을 먼저 보충하고, 교정될 때까지 인슐린을 미룬다
D. 탄산수소나트륨으로 먼저 산증을 교정하고 인슐린을 시작한다

## 해설


심한 저칼륨혈증에서 인슐린을 시작하면 칼륨이 세포 안으로 더 이동해 부정맥 위험이 커진다. 수액 소생을 유지하면서 심전도를 감시하고 칼륨을 먼저 보충한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000079
- https://www.ispad.org/static/6dd62eae-c8cb-4b4a-84e1efc768505746/Ch11PediatricDiabetes.pdf
- https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis
