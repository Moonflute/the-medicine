---
type: qbank
schema_version: 1
id: medqa-us-test-000714
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:533c449f2a367a4fa639183431d23e0c6dff2474d16f4945796e26692afd9884
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "제1형 당뇨병"
  - "고혈당"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

인슐린을 중단한 16세 제1형 당뇨병 환자가 구토와 탈수로 왔다. 혈당 690 mg/dL, 정맥 pH 7.21, 혈중 케톤 증가, K 5.8 mmol/L다. 소아 당뇨병성 케톤산증의 초기 수액·인슐린 순서는?

## 선택지

A. 등장성 정맥 수액을 시작하고 최소 1시간 뒤 정맥 인슐린 주입
B. 인슐린을 정맥으로 일회 투여한 뒤 수액 시작
C. 수액 없이 피하 인슐린만 투여
D. 칼륨을 한꺼번에 보충하고 수액은 다음 날 시작

## 해설

소아·청소년의 케톤산증에서는 먼저 등장성 수액을 투여하고 최소 1시간 뒤 정맥 인슐린을 시작한다. 초기 인슐린 일회 정맥주사는 하지 않는다. 혈청 칼륨은 반복 측정해 보충 시점을 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소아 DKA의 수액과 인슐린을 동시에 시작한다는 해설을 초기 수액 뒤 인슐린 원칙으로 교정.
- https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000714
- https://www.ispad.org/static/6dd62eae-c8cb-4b4a-84e1efc768505746/Ch11PediatricDiabetes.pdf
