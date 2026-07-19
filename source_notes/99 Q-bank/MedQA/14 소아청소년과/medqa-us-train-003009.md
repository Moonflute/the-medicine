---
type: qbank
schema_version: 1
id: medqa-us-train-003009
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e200108d61a0211b39258dc07639c961f01f06e8c671964c4db3ea7e0a73db01
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "mean median mode"
  - "outlier"
  - "descriptive statistics"
  - "normal distribution"
question_type: other
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

병원 신생아실 37명의 체중의 평균, 중앙값, 최빈값은 7파운드 2온스이다. 실제로 7파운드 2온스인 신생아가 7명 있고 체중의 표준편차는 2온스이며 정규분포를 따른다. 10파운드 2온스의 신생아 한 명이 자료에 추가되면 평균, 중앙값, 최빈값은 어떻게 될 가능성이 가장 높은가?

## 선택지

A. 평균 증가, 중앙값 증가, 최빈값 증가
B. 평균 유지, 중앙값 증가, 최빈값 증가
C. 평균 증가, 중앙값 유지, 최빈값 유지
D. 평균 증가, 중앙값 증가, 최빈값 유지

## 해설


10 lb 2 oz(162 oz)의 이상치가 평균을 올리지만 중앙값은 7 lb 2 oz(114 oz)인 7명에 의해 유지되고, 최빈값도 7 lb 2 oz에 머문다. 따라서 평균 ↑, 중앙값 유지, 최빈값 유지가 가장 가능하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003009
