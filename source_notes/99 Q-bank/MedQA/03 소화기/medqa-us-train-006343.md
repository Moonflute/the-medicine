---
type: qbank
schema_version: 1
id: medqa-us-train-006343
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69f80bfa52f88b02031a61ded8959928a4a44fe2ea260d9fef0d13291767c4af
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "말단회장염"
  - "직장주위 농양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: management
difficulty: complex
answer: D
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

크론병이 있는 24세 여성에게 새 항문 통증과 38.5°C의 발열이 생겼다. 골반 MRI에서 항문 누공과 연결된 3 cm 농양이 보인다. 생물학적 제제 시작 전 먼저 할 처치는?

## 선택지

A. 전신 스테로이드 증량
B. 인플릭시맙 즉시 시작
C. 경구 항생제만 처방하고 외래 추적
D. 항문주위 농양 배농

## 해설

발열을 동반한 항문주위 농양은 배농해 감염원을 조절한다. 누공과 농양은 외과와 함께 평가하고, 감염 조절 뒤 생물학적 치료 시점을 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn D의 전이성염증 오역을 장벽전층/분절성염증으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006343
- https://doi.org/10.1093/ecco-jcc/jjae089
- https://pubmed.ncbi.nlm.nih.gov/42928005/
