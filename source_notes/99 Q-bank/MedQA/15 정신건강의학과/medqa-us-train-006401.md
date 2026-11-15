---
type: qbank
schema_version: 1
id: medqa-us-train-006401
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43f5cabdb31ccf56d8c44b03675740b1f5cb3e663d08aec97df554371f448fe2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "세로토닌 증후군"
  - "시탈로프람-트라마돌 상호작용"
  - "과다반사"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9UcmFtYWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

시탈로프람을 복용 중인 환자가 트라마돌을 새로 시작한 뒤 수시간 만에 초조와 발한이 생겼다. 체온이 높고 다리 반사가 항진됐으며 발목에 간대가 유발된다. 가장 먼저 할 조치는?

## 선택지

A. 원인 약을 중단하고 활력 감시와 지지치료를 시작한다
B. 시프로헵타딘을 줄 때까지 기존 약을 유지한다
C. 해열제만 주고 정상 체온이 되면 귀가시킨다
D. 시탈로프람에 모노아민산화효소 억제제를 추가한다

## 해설


빠른 발현과 간대·반사항진은 세로토닌 독성을 시사한다. 세로토닌 작용 약을 즉시 중단하고 지지치료를 시작한다. 중증도에 따라 진정·냉각과 집중 치료가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006401
- https://pubmed.ncbi.nlm.nih.gov/38926083/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문에도 있는 체온 단위 불일치(38.6°C/97.9°F)를 섭씨 기준 101.5°F로 산술 교정. 세로토닌 독성에서 원인약 중단 답·해설 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
