---
type: qbank
schema_version: 1
id: medqa-us-train-005073
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8e5c259e2eb6782dc8cf96bf8914e9a8bf3035736d26823dfa6788671c3f6fc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "쿠싱병"
  - "ACTH 분비 뇌하수체 선종"
  - "경접형동 수술"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLseuzkSAoQ3VzaGluZydzIERpc2Vhc2UpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 ACTH를 분비하는 뇌하수체 선종에 의한 쿠싱병으로 확진됐다. 종양은 절제가 가능하고 환자는 수술을 견딜 수 있다. 일차적인 근본 치료는?

## 선택지

A. 코르티솔 합성 억제약을 일률적으로 평생 사용
B. 한쪽 부신절제술
C. 처음부터 양쪽 부신절제술
D. 경접형동 뇌하수체 선종절제술

## 해설


절제 가능한 ACTH 분비 뇌하수체 선종에서 일차 치료는 경험 있는 센터의 경접형동 수술이다. 약물이나 방사선 등은 수술이 어렵거나 잔존·재발한 경우 등에 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACTH의존 Cushing·뇌하수체 종양은 경접형동 절제 D의 1차치료에 부합.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12963774/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005073
- https://www.endocrine.org/clinical-practice-guidelines/treatment-of-cushing-syndrome
