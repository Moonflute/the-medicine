---
type: qbank
schema_version: 1
id: medqa-us-test-000962
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ba1fa5aa92fea609f77247d31d1521fbb4da471ea42f9b85bc230a7e4ff7a8e7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 장애"
  - "리튬"
  - "임신 중 약물 조절"
question_type: prevention
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 여성이 한 달 전 양극성 I형 장애로 진단받고 첫 추적 진료를 왔다. 당시 심한 조증으로 응급실에 왔고 리튬을 시작한 뒤 호전되어 퇴원했다. 퇴원 일주일 후 며칠간 약을 잊고 복용하지 않자 조증 증상이 재발해 다시 응급실에 왔지만 이후에는 약을 잘 복용하고 현재 불편감은 없다. 향후 임신에서 태아 위험을 줄이는 데 가장 도움이 되는 권고는?

## 선택지

A. 임신 기간 동안 약물 용량을 조절한다
B. 모든 환자에게 매일 엽산 5 mg을 보충한다
C. 단독요법보다 저용량 병합요법을 선호한다
D. 임신에 가장 안전한 발프로산으로 바꾼다

## 해설

중단 직후 조증이 재발한 병력이 있어 임신 계획 시 산과·정신과에서 태아 위험과 모체 재발 위험을 함께 평가해야 한다. 리튬을 계속 사용한다면 혈중농도·신기능·수분 상태와 임신/산후의 약동학 변화를 모니터링하여 치료 범위를 유지하도록 용량을 조절한다. 임신 내내 일률적으로 감량하거나 임의 중단한다는 뜻은 아니다. 제시된 선택지 중 임신 기간에 걸친 용량 조절이 적절하며 발프로산을 가장 안전한 약으로 바꾸거나 불필요한 병합요법을 선호하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000962

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리튬을 임신 내내 무조건 감량한다는 인상을 교정. 재발 위험과 치료 범위 혈중농도·임신 중 약동학 변화에 따른 개별 조절로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
