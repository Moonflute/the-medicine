---
type: qbank
schema_version: 1
id: medqa-us-train-000550
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:876a21c1b659e61691a230557b7fb988af7e7d04ae758cb2d666d5de082ff434
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "HIV infection"
  - "pregnancy"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 37주 산모가 HIV 병합치료를 받고 있지만 최근 HIV RNA가 11,000 copies/mL다. 아직 진통과 양막파수는 없다. 분만 직전에도 바이러스량이 이 범위로 유지된다면 NIH 주산기 지침에서 권하는 분만 계획은?

## 선택지

A. 임신 38주에 계획 제왕절개를 하고 분만 중 정맥 지도부딘을 투여
B. ART를 중단하고 자연 진통까지 기다린 뒤 질식분만
C. 추가 평가 없이 오늘 바로 응급 제왕절개
D. 그대로 질식분만하고 신생아 예방은 하지 않는다

## 해설

NIH는 분만 무렵 HIV RNA가 1,000 copies/mL를 넘으면 모자감염을 줄이기 위해 진통과 파수 전 38주 계획 제왕절개 및 분만 중 정맥 지도부딘을 권고한다. 기존 병합치료는 유지하고 신생아 예방을 별도로 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 높은 HIV RNA에서 계획 제왕절개 조건 및 ART 후 재평가 보강, 1000을 정상값으로 오해 방지.
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care?view=brief

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000550
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care?view=full
