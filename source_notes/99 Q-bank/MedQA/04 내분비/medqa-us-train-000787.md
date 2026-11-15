---
type: qbank
schema_version: 1
id: medqa-us-train-000787
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1141eacfa97e19509b660dde0721a6a64b6c14b7578609b85dc2be4c4c24645d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetes insipidus"
  - "bipolar I disorder"
  - "nephrogenic diabetes insipidus"
related_disease_slugs:
  - MDQg64K067aE67mEL-yalOu2leymnSAoRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
  - MDQg64K067aE67mEL-y9qe2Mpeq4sOybkCDsmpTrtpXspp0gKE5lcGhyb2dlbmljIERpYWJldGVzIEluc2lwaWR1cykubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

리튬을 8년째 복용 중인 49세 남성이 심한 갈증과 하루 6L의 소변량으로 내원했다. 혈청 Na 150 mmol/L, 소변 삼투질농도 115 mOsm/kg이며 데스모프레신 투여 후에도 125 mOsm/kg이다. 혈당은 정상이다. 가장 가능성 높은 다뇨의 원인은?

## 선택지

A. 원발성 다음증
B. 바소프레신 분비 부족
C. 포도당에 의한 삼투성 이뇨
D. 리튬에 의한 신장의 바소프레신 저항성

## 해설


고나트륨혈증이 있는데도 소변이 묽고 데스모프레신에도 거의 농축되지 않으므로 신장의 바소프레신 저항성(신성 요붕증)에 해당한다. 장기 리튬 복용은 대표 원인이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고Na/탈수인데 ADH가 높고 소변이 매우 묽어 AVP저항성 요붕증. bipolar와 손떨림은 lithium D의 맥락이며 두부손상성 ADH결핍과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000787
- https://doi.org/10.1210/clinem/dgac381
