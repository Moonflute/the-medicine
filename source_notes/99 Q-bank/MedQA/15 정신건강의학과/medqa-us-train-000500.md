---
type: qbank
schema_version: 1
id: medqa-us-train-000500
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1047eaad39ec0e42267f436f801bb232f0e338e470b9b37b04546b39b3cf9128
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bipolar disorder"
  - "mania"
  - "pregnancy"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 9주인 환자가 일주일간 거의 자지 않고 과대망상과 심한 초조를 보였다. 안전을 확보했고 산과와 정신건강의학과에서 급성 조증으로 평가했다. 현재 기분조절제나 항정신병약은 쓰지 않는다. 초기 약물로 가장 적절한 것은?

## 선택지

A. 발프로산
B. 플루옥세틴 단독
C. 할로페리돌 등 적절한 항정신병약
D. 카바마제핀

## 해설

임신 중 발생한 급성 조증에서는 산과·정신건강의학과와 이득과 위험을 따져 적절한 항정신병약을 고려한다. 발프로산이나 카바마제핀을 통상적 초기 선택으로 쓰지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000500
- https://www.nice.org.uk/guidance/cg192/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/37486661/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 임신 중 리튬을 절대금기라고 단정한 해설 교정. 급성 조증의 항정신병약 선택과 재발 위험에 따른 리튬 개별 판단 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
