---
type: qbank
schema_version: 1
id: medqa-us-train-007847
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d1e1bd94ecf78b2d026adc2b9fb52571877d107898ad697d628b2f3c465bd00
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "anaplastic thyroid carcinoma"
  - "p53 mutation"
  - "thyroid mass"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

74세 환자의 단단한 목 종괴가 2주 사이 커졌고 쉰 목소리와 흡기성 천명이 새로 생겼다. 역형성 갑상선암이나 림프종이 의심된다. 조직검사 준비와 함께 가장 먼저 해야 할 일은?

## 선택지

A. 외래에서 유전자 결과가 나올 때까지 기다린다.
B. 방사성요오드 치료를 바로 시작한다.
C. 세침흡인 결과가 나오기 전에는 호흡 상태를 평가하지 않는다.
D. 기도를 즉시 평가하고 기도 확보가 필요한지 전문팀과 판단한다.

## 해설


빠르게 커지는 경부 종괴에서 천명은 기도 위협의 단서다. 생검과 진단을 서두르되 기도 평가와 대응이 늦어져서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007847 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전이성 갑상선암이라는 무의미 반복을 제거하고 급속 성장 고정 종괴의 미분화암–TP53 D 병리 연결.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.thyroid.org/wp-content/uploads/2021/06/ATC-Diagnosis.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007847
- https://doi.org/10.1089/thy.2020.0944
