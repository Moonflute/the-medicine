---
type: qbank
schema_version: 1
id: medqa-us-train-004004
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d96b71acfe1976519251748b524309ead0939073908f871a332e8e8c7bd5064
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "그레이브스병"
  - "방사성 요오드 치료"
  - "갑상샘기능저하증"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

그레이브스병에 방사성요오드 치료를 받은 50세 여성이 4개월 뒤 피로와 추위불내성을 호소한다. TSH가 높고 유리 T4가 낮다. 시작할 약은?

## 선택지

A. 메티마졸 증량
B. 프로프라놀롤 장기 복용
C. 무기 요오드
D. 레보티록신

## 해설


방사성요오드 치료 후에는 갑상선기능을 추적한다. 유리 T4 저하와 TSH 상승으로 현성 갑상선기능저하가 확인되면 레보티록신으로 보충한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Graves RAI치료 후 장기 저하증의 levothyroxine D 보충 필요성 타당.
- https://doi.org/10.1089/thy.2016.0229

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004004
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12230266/
