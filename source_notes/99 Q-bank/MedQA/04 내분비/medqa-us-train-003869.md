---
type: qbank
schema_version: 1
id: medqa-us-train-003869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2076ec2f2729d2c83c9404f3206e8c55b863bafc1375790b8157f04db77be77b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Cushing syndrome"
  - "hypercortisolism"
  - "striae"
  - "dexamethasone suppression test"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 특별한 증상 없이 내원했지만 혈압 177/118 mmHg, 비만, 사지 근육 위축, 복부 선조, 혈당 175 mg/dL가 있었다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 덱사메타손 억제검사
B. 하이드로클로로티아지드
C. 메트포르민
D. 머리 MRI

## 해설

중심성 비만·복부선조·근위축·고혈당은 Cushing syndrome을 의심하게 하므로 선택지 A의 저용량 dexamethasone suppression test는 초기 선별법이다. 외인성 steroid 노출을 확인하고 적절한 cortisol 검사를 선택한다. 고혈압/고혈당 관리도 병행하며 원인검사가 혈압치료를 무조건 뒤로 미루라는 뜻은 아니다. Metformin은 항고혈압제가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Cushing 선별 A 유지. 원인검사 때문에 중증HTN 치료를 미루거나 metformin을 혈압약으로 부른 오류 수정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12963774/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003869
