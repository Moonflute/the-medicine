---
type: qbank
schema_version: 1
id: medqa-us-test-000251
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:836880fef47a5c600a090062744f8e78426a4727be08fceb90b098d9a79b1859
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "망상장애"
  - "피해망상"
  - "단일 망상"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-unneyDgSDsnqXslaAgKERlbHVzaW9uYWwgZGlzb3JkZXIpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 이웃의 걱정으로 병원에 왔다. 이웃은 환자가 ‘두더지 인간의 침공’이 임박했다며 집 주변 곳곳에 곰 덫을 설치하는 모습을 자주 본다고 했다. 환자는 마늘 목걸이를 하고 왔으며, 두더지들이 자신을 추적할 때 냄새를 감추기 위한 것이라고 모호하게 설명했다. 과거 정신과 병력은 없고 목소리를 듣거나 사물을 본 적은 없다고 부인했다. 유의한 과거력은 없다. 같은 지역사회에서 수년간 살았지만 평소 혼자 지내고 친구가 많지 않다고 한다. 지역 철물점에서 정규직으로 일하며 혼자 산다. 이 환자에게 처음 시행할 가장 적절한 치료는?

## 선택지

A. 인지행동치료(CBT)
B. 치료적 개입이 필요하지 않다
C. 전기경련치료(ECT)
D. 외래 집단치료에 의뢰한다

## 해설

기이한 믿음과 사회적 고립이 있으나 직업 기능은 유지되는 환자에게 제시된 선택지 중 개별 인지행동치료가 적절하다. 믿음과 고통, 대처 방식을 탐색하고 치료 관계를 형성한다. 다만 이 정보만으로 망상장애 등 특정 진단을 확정할 수 없으며, 실제 진료에서는 물질·신체질환 및 정신병 평가와 곰 덫 설치로 인한 안전 위험 평가가 먼저 함께 필요하다. 정신병이 확인되면 CBT만이 모든 치료를 대체하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000251

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. CBT 원정답 유지. 기간·진단요건이 부족한 사례를 망상장애로 확정하고 CBT가 가장 효과적이라 단정하던 설명을 제한.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/Guidance/CG178/chapter/recommendations
