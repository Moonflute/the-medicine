---
type: qbank
schema_version: 1
id: medqa-us-train-003542
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a84929ca282d833a8f579ee17f5faff96f76a349e026b15e9dc7e45f1447b57
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "qualified medical interpreter"
  - "limited English proficiency"
  - "informed consent"
  - "cross-cultural communication"
question_type: communication
related_disease_slugs: []
difficulty: standard
answer: B
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

한국어가 익숙하지 않은 성인 환자에게 침습적 검사의 목적과 위험을 설명해야 한다. 언어 장벽 때문에 설명을 제대로 이해하지 못한 상태다. 적절한 대응은?

## 선택지

A. 환자의 미성년 자녀를 통역으로 부른다
B. 전문 의료통역을 연결하고 환자가 이해했는지 확인한다
C. 번역 없이 동의서에 서명받는다
D. 환자에게 설명하지 않고 보호자와만 결정한다

## 해설


의료통역을 이용해 환자에게 직접 설명하고 이해 여부를 확인한다. 가족에게만 통역을 맡기면 누락이나 사생활 침해가 생길 수 있으며 서명만으로 설명이 충분한 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003542
