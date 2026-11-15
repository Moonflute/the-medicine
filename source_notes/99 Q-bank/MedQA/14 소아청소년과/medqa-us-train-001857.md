---
type: qbank
schema_version: 1
id: medqa-us-train-001857
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c163e479facc5cb8a10b5b773c61e59a4c86a9fcc349eaaaf9b9c523956cdd1
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "emergency consent"
  - "life-saving surgery"
  - "pediatric trauma"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

교통사고를 당한 8세 아이가 의식이 없고 내출혈로 쇼크 상태다. 수혈과 응급수술을 늦추면 생명이 위험하다. 법정대리인은 병원에 없고 연락이 닿지 않지만 의사소통이 가능한 동행인이 있다. 국내에서 적절한 대응은?

## 선택지

A. 동행인에게 법정대리인 자격으로 수술 동의서에 서명하도록 한다
B. 법원 허가가 나올 때까지 수혈과 수술을 보류한다
C. 아이가 의식을 회복할 때까지 결정하지 않는다
D. 동행인에게 설명하고, 의학적 판단에 따라 필요한 응급진료를 지체 없이 시행한다

## 해설


「응급의료에 관한 법률」 제9조에 따르면 의사결정능력이 없는 환자의 법정대리인이 동행하지 않았다면 동행인에게 설명한 뒤 의학적 판단으로 필요한 응급진료를 할 수 있다. 동행인의 서명으로 법정대리인의 동의를 대신하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001857
- https://www.law.go.kr/lsInfoP.do?lsId=000218&urlMode=lsInfoP
