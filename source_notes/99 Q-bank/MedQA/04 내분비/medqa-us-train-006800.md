---
type: qbank
schema_version: 1
id: medqa-us-train-006800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a00cc95dc44000bbe74dbdf7f7d7ab5cbc3cc1ab4df6dd5eef49d8ba92ad28e0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 신장병증 초기"
  - "사구체 과여과"
  - "미세알부민뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: investigation
difficulty: standard
answer: B
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

56세 제2형 당뇨병 환자의 첫 소변 알부민/크레아티닌 비가 72 mg/g이다. eGFR은 정상이고 요로감염이나 발열은 없다. 지속성 알부민뇨인지 확인하는 방법은?

## 선택지

A. 한 번의 결과로 지속성 알부민뇨를 확진
B. 수개월에 걸쳐 소변 알부민/크레아티닌 비를 반복
C. 혈청 요소질소만 반복
D. 조영 신장 CT로 확진

## 해설

소변 알부민은 일시적으로 달라질 수 있다. 국내 지침은 6개월 이내 측정한 3회 중 2회 이상 증가했을 때 지속성 알부민뇨로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기당뇨 과여과 B는 유지하되 albuminuria는 구조손상과 무관한 순수기능문제라는 과장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006800
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
