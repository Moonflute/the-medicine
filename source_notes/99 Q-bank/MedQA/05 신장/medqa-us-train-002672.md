---
type: qbank
schema_version: 1
id: medqa-us-train-002672
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0394980382a51d543f9d09bfc0ae13773923915aa1601c89f4463611d451d89e
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "psoas abscess"
  - "psoas sign"
  - "diabetes mellitus"
  - "retroperitoneal infection"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: investigation
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

35세 여성이 발열과 2주간 악화되는 옆구리 통증으로 내원했다. 왼쪽 고관절을 수동으로 펴면 통증이 심해지고, 백혈구는 증가했지만 소변에 농뇨는 없다. 일반 복부 초음파에서 원인이 보이지 않았다. 장요근 농양을 확인할 다음 영상은?

## 선택지

A. 요로 단순촬영
B. 방광 초음파만 반복
C. 복부·골반 조영증강 CT
D. 정맥신우조영술

## 해설


발열과 고관절 신전 시 악화되는 옆구리 통증은 장요근 농양을 의심하게 한다. 조영 CT로 후복막 병변과 인접 구조를 확인한다. 일반 초음파 음성으로 배제되지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Psoas sign과 발열은 장요근농양 C. 영어 원문 음성 임신검사 누락을 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002672
- https://pubmed.ncbi.nlm.nih.gov/26466693/
