---
type: qbank
schema_version: 1
id: medqa-us-train-009783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac5a7e7f73cdf2142bcd12cfe76251063653695f81c60efb6ca1758354b7ef18
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "베체트병"
  - "구강 궤양"
  - "생식기 궤양"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uyoOyytO2KuOuzkSAoQmVow6dldCdzIERpc2Vhc2UpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

28세 남성이 1년 동안 반복되는 통증성 구강궤양과 흉터를 남기는 생식기궤양으로 내원했다. 최근 통증과 시력저하가 있어 안과 진찰을 받았고 비감염성 후포도막염이 확인됐다. 가장 가능성 높은 진단은?

## 선택지

A. 연성하감
B. 단순포진바이러스 감염
C. 베체트병
D. 전신홍반루푸스

## 해설


재발성 구강궤양, 생식기궤양과 안구 염증의 조합은 베체트병을 시사한다. 안구 침범은 시력을 위협할 수 있어 안과와 류마티스 진료를 연계한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009783 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 구강·생식기궤양과 전신증상을 전형삼징이라 부른 부분을 실제 고전삼징(눈염증)과 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009783
- https://doi.org/10.1136/annrheumdis-2018-213225
