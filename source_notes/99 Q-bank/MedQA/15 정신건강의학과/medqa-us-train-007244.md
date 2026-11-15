---
type: qbank
schema_version: 1
id: medqa-us-train-007244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13812ef9b10762dbf07bb5ed205d36f53c917c033d437530511c75a8b60e2e0c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "산후 정신병"
  - "산후 망상"
  - "영아에 대한 피해망상"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCsO2bhCDsoJXsi6Drs5EgKFBvc3RwYXJ0dW0gcHN5Y2hvc2lzKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

출산 10일 된 산모가 거의 잠을 자지 않으면서 말이 빠르고 혼란스러워졌다. 아기에게 위험한 행동을 하라는 목소리가 들린다고 한다. 가장 먼저 할 조치는?

## 선택지

A. 아기와 산모의 안전을 확보하는 동시에 응급 정신건강 평가를 연결한다
B. 가벼운 산후 우울감으로 보고 2주 뒤 다시 본다
C. 모유수유를 중단하도록 안내하고 외래 평가만 예약한다
D. 산모에게 안정을 권하고 아기와 둘만 지내도록 한다

## 해설

출산 직후 갑자기 나타난 정신병적 증상과 혼란은 산후 정신병의 경고 신호다. 산모와 아기를 즉시 안전하게 보호하고 응급 평가를 하며 기저 조증·신체 원인 등도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산후 정신병을 조현병과 단순히 별개인 질환으로 단정한 설명을 임상증후군/기분삽화 연관성과 모자 안전의 응급성으로 교정했다.
- https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/postpartum-psychosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007244
- https://pubmed.ncbi.nlm.nih.gov/37486661/
- https://www.nice.org.uk/guidance/cg192/chapter/recommendations
