---
type: qbank
schema_version: 1
id: medqa-us-train-005057
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:656758a514de6373a9f7842012fd80603d3bfed9544bde57f609b0dbd841cb28
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간경변성 복수"
  - "문맥고혈압"
  - "간 굴모세혈관 압력 증가"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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

58세 남성이 새 복수로 진단적 복수천자를 받았다. 같은 날 혈청 알부민은 3.1 g/dL, 복수 알부민은 1.3 g/dL이다. 복수 총단백은 1.6 g/dL이고, 비장비대와 결절성 간 표면이 보인다. 검사 결과에 가장 부합하는 복수의 원인은?

## 선택지

A. 복막 암종증
B. 췌관 누출
C. 간경변에 따른 문맥고혈압
D. 결핵성 복막염

## 해설

혈청–복수 알부민차(SAAG)는 1.8 g/dL로, 1.1 g/dL 이상이면 문맥고혈압을 지지한다. SAAG가 높으면서 복수 단백은 낮고 간경변 소견이 있어 심장성 복수보다 간경변성 복수에 부합한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간경변 sinusoidal hydrostatic pressure C를 정확한 용어로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005057
- https://doi.org/10.3350/cmh.2026.0281
