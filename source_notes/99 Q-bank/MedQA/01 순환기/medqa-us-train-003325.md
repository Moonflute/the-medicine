---
type: qbank
schema_version: 1
id: medqa-us-train-003325
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56fd9318230752c4002d4c4649710957e9785c31e9ec76b2eb48fda3b7e99950
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "long QT syndrome"
  - "Jervell and Lange-Nielsen syndrome"
  - "sensorineural deafness"
  - "torsades de pointes risk"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4tCBRVCDspp3tm4TqtbAgKExvbmcgUVQgU3luZHJvbWUpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

감각신경성 난청이 있는 22세 남성이 달리다가 여러 차례 의식을 잃었다. 목격자는 수 초간 몸이 떨렸지만 의식을 되찾자 바로 질문에 답했다고 한다. 선천성 부정맥을 의심하게 하는 심전도 소견은?

## 선택지

A. 높고 뾰족한 T파
B. 호흡에 따라 변하는 동성 부정맥
C. 지속적으로 연장된 QTc
D. 1도 방실차단

## 해설


운동 중 실신과 감각신경성 난청이 함께 있으면 감각신경성 난청을 동반한 선천성 긴QT증후군(예: Jervell–Lange-Nielsen 증후군)을 고려한다. 실신 중 짧은 근육 떨림만으로 뇌전증을 단정하지 말고 심전도에서 QTc를 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 감각신경성 난청+반복 실신/발작양 발현은 JLNS의 선천성 longQT C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003325
- https://k-hrs.org/assets/file/07_2024_Korean_Arrhythmia_Society_sudden_cardiac_Guidelines.pdf
