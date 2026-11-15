---
type: qbank
schema_version: 1
id: medqa-us-train-006941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:65576ef75c30f9d2db10eb72e4e7c0d5dd1b8a0209f63f99076d1cf521ad2d7c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "애디슨병"
  - "자가면역 부신기능부전"
  - "원형탈모증 연관"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-ybkO2YlSDtg4jrqqjspp0gKEFsb3BlY2lhIEFyZWF0YSkubWQ
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadKFByaW1hcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 남성이 체중 감소와 기립 어지럼, 잇몸 색소 침착을 보인다. 아침 코르티솔은 매우 낮고 ACTH는 높으며 코신트로핀에 코르티솔이 반응하지 않는다. 원발성 부신기능저하가 확인됐을 때 자가면역 원인을 지지하는 검사는?

## 선택지

A. TSH 수용체 항체
B. 항미토콘드리아 항체
C. 21-수산화효소 항체
D. 항내인자 항체

## 해설

코르티솔이 낮고 ACTH가 높으며 자극 반응이 부족하면 원발성 부신기능저하에 맞는다. 21-수산화효소에 대한 자가항체로 자가면역 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자가면역 원발성부신부전 C에서 ACTH분비와 cosyntropin반응을 혼동한 표현 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006941
- https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency
