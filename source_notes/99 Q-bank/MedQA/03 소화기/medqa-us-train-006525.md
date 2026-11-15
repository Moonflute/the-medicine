---
type: qbank
schema_version: 1
id: medqa-us-train-006525
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58165372f33f02658f1abf86cea3ab42f2f82b4d6f93c599ab278240f1c23676
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도정맥류 출혈"
  - "토혈"
  - "기도 보호를 위한 삽관"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

55세 간경변 환자가 활동성 토혈 중 심하게 의식이 떨어졌다. 통증을 줘야 눈을 뜨고 분비물을 삼키거나 가래를 뱉지 못한다. 팀이 혈역학 소생을 함께 하고 있다. 내시경을 준비하기 전에 필요한 기도 처치는?

## 선택지

A. 내시경 지혈부터 하고 기도를 나중에 평가한다
B. 기관삽관으로 기도를 보호한다
C. 산소포화도가 정상이면 기도 처치를 생략한다
D. 진정제만 투여한 후 바로 내시경을 시행한다

## 해설

활동성 토혈과 심한 의식저하가 함께 있으면 기도 보호가 되지 않아 흡인 위험이 크다. 기도팀이 삽관을 준비하고 소생·약물치료·내시경 지혈도 함께 진행한다. 모든 위장관 출혈 환자에게 삽관하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대량토혈+의식저하의 기도보호 B는 유지하고 섭씨단위 오역 교정.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006525
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
