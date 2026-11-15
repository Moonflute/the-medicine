---
type: qbank
schema_version: 1
id: medqa-us-test-000035
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d0ae7182cc741dacbd7085aa4a4bf8473818f896931069b88eceb1e24dd8be8c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "음이온차"
  - "인슐린 지속요법"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 당뇨병성 케톤산증으로 정맥 인슐린을 받고 있다. 혈당이 225 mg/dL로 떨어졌지만 β-하이드록시부티레이트 3.2 mmol/L, 정맥 pH 7.24이고 칼륨은 4.3 mmol/L다. 다음 처치는?

## 선택지

A. 포도당 함유 수액을 추가하고 인슐린을 조절해 계속 투여
B. 인슐린을 중단하고 생리식염수만 투여
C. 포도당을 추가하지 않고 같은 속도의 인슐린을 계속 투여
D. 혈당이 300 mg/dL로 다시 오를 때까지 치료 중단

## 해설

혈당이 먼저 교정돼도 케톤산증이 해소된 것은 아니다. 혈당이 250 mg/dL 미만에 도달하면 포도당 수액을 추가하고 저혈당을 피하도록 조절하면서 인슐린을 지속한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈당 90만으로 DKA 종료를 판단하지 않도록 지속 산증 평가와 포도당 병용 인슐린을 설명. 섭씨 체온의 °F 오기를 교정.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000035
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.2337/dci24-0032
