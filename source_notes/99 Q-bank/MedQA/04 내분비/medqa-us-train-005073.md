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
explanation_status: machine-generated
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

47세 여자가 2년 동안 체중 증가와 불규칙한 월경으로 내원했다. 복부와 얼굴에 체중이 주로 증가했고 조절하기 어려운 제2형 당뇨병과 고혈압이 있다. 늦은 밤 침 코르티솔과 아침 혈장 ACTH가 상승했으며 뇌 MRI에서 2 cm 뇌하수체 선종이 보인다. 최적의 치료는?

## 선택지

A. 약물치료
B. 편측 부신절제술
C. 양측 부신절제술
D. 경접형동 뇌하수체 선종절제술

## 해설


뇌하수체 ACTH 분비 선종에 의한 쿠싱병은 수술적 절제가 가장 효과적인 치료이다. 경접형동 뇌하수체 선종절제술이 표준 치료법이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACTH의존 Cushing·뇌하수체 종양은 경접형동 절제 D의 1차치료에 부합.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12963774/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005073
