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
question_type: mechanism
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

간경변이 있는 58세 남자가 복부 둘레 증가와 조기 포만감으로 내원했다. 거미혈관종, 경한 비장비대, 단단하게 만져지는 간, 이동탁음이 있다. 복부 초음파에서 복수가 확인되었고 진단적 복수천자에서 다형핵세포 10개/mm³, 복수 단백 1 g/dL이다. 이 환자의 복수 발생 기전을 가장 잘 설명하는 것은?

## 선택지

A. 복막 암종증
B. 장막염
C. 높은 굴모세혈관 압력
D. 췌장 질환

## 해설

문맥고혈압은 간 굴모세혈관(sinusoid)의 정수압을 높여 복수 C에 기여한다. 내장혈관 확장·Na수분저류도 관련된다. PMN10은 SBP 진단 범위가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간경변 sinusoidal hydrostatic pressure C를 정확한 용어로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005057
