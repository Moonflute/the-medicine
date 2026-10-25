---
type: qbank
schema_version: 1
id: medqa-us-train-005577
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:097537f5c160c743e26e97265b940c90f3977578c4daabd6810617e5f23499e3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "코르티솔 분비 부신종양"
  - "ACTH 비의존성 쿠싱증후군"
  - "부신암"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDsooXslpEgKEFkcmVuYWwgVHVtb3IpLm1k
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
question_type: investigation
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

33세 여자가 복부 불편감, 쇠약, 발열과 2개월 동안 15 kg 체중감소로 내원했다. 혈압 167/92 mmHg, 중심성 비만, 버팔로 혹, 다모증, 근육량 감소와 좌상복부 부신 종괴가 있다. 다음 중 예상되는 검사 결과는?

## 선택지

A. 정상 내당능, 혈청 코르티솔 상승, 24시간 소변 유리 코르티솔 정상, ACTH 정상
B. 내당능 장애, 혈청 코르티솔 상승, 24시간 소변 유리 코르티솔 상승, ACTH 상승
C. 내당능 장애, 혈청 코르티솔 상승, 24시간 소변 유리 코르티솔 상승, ACTH 감소
D. 내당능 장애, 혈청 코르티솔 감소, 24시간 소변 유리 코르티솔 정상, ACTH 감소

## 해설


부신 종양에 의한 ACTH 비의존성 쿠싱증후군에서는 혈청 및 24시간 소변 코르티솔이 상승하고, ACTH는 억제되어 감소한다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 부신종괴·Cushing 표현형은 cortisol/UFC상승·ACTH억제 C의 음성되먹임과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005577
