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
explanation_status: machine-generated
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

22세 이민자가 건강검진을 위해 처음으로 주치의를 방문했다. 과거력은 모르며 과거 실신과 발작처럼 보이는 에피소드가 있었지만 치료받지 않았다. 신체검사에서 감각신경성 난청이 있다. 다음 중 심전도에서 가장 가능성 높은 변화는?

## 선택지

A. 뾰족한 T파
B. QRS 간격 연장
C. QT 간격 연장
D. QT 단축

## 해설


감각신경성 난청과 동반된 장시간 QT 연장은 Jervell and Lange‑Nielsen 증후군(선천성 장 QT 증후군)과 일치한다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 감각신경성 난청+반복 실신/발작양 발현은 JLNS의 선천성 longQT C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003325
