---
type: qbank
schema_version: 1
id: medqa-us-train-002141
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e428f187c18b3f3f2e23dc69d3e5a00ba93f552347178cdc53a806247a6aba2f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "hypokalemia risk"
  - "potassium replacement"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병성 케톤산증 환자에 수액·정맥 인슐린을 시작했다. 혈당 365 mg/dL, 칼륨이 5.4에서 4.3 mmol/L로 떨어졌고 소변량은 충분하다. 현재 수액에 추가할 것은?

## 선택지

A. 중탄산나트륨
B. 인산염
C. 염화칼륨
D. 포도당

## 해설


인슐린과 산증 교정이 진행되면 혈중 칼륨이 더 떨어질 수 있다. 신장 배설이 유지되고 칼륨이 4.3이면 수액에 칼륨을 보충하고 연속 검사로 조절한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKA에서 수액·인슐린 시작 후 K 4.3이면 KCl 보충 C; 정상 혈중 K도 총체내 결핍을 배제하지 않음.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002141
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.2337/dci24-0032
