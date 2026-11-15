---
type: qbank
schema_version: 1
id: medqa-us-train-004321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d9123d27564c07ede915486d1fe01b747b296212355fadd67ffeeac543dae94
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "고칼슘혈증"
  - "비타민 보충제 과다"
  - "다뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
difficulty: simple
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

55세 여성이 갈증과 변비를 호소한다. 비타민 보충제를 먹고 있고 두 번 측정한 알부민 보정 칼슘이 11.6 mg/dL로 높다. 고칼슘혈증의 원인을 나누기 위해 가장 먼저 확인할 검사는?

## 선택지

A. 25-하이드록시 비타민 D만 측정
B. PTH 관련 펩타이드부터 측정
C. 혈청 온전한 부갑상선호르몬(intact PTH)
D. 부갑상선 신티그래피

## 해설


고칼슘혈증인데 PTH가 높거나 부적절하게 정상이면 PTH 의존성 원인을 의심한다. PTH가 억제되면 약물·비타민 D 과다·악성종양 등을 확인한다. 부갑상선 영상은 원인 진단을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상혈당의 다뇨·변비·복통과 보충제노출은 hyperCa 의심; 혈청Ca C로 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004321
- https://doi.org/10.1002/jbmr.4677
