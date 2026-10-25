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

20세 여성이 영업시간 이후 박물관에 침입하려다 경찰에 의해 이송되었다. 환자는 자신이 거대한 결탁 음모를 추적 중인 탐정이며 사건을 입증하기 위해 박물관의 유물이 필요하다고 진술한다. 가족들은 환자가 지난 일주일 동안 이상하게 행동했다고 보고했다. 환자는 쉬지 않고 밤새 인터넷을 검색하며 깨어 있었다. 남편은 환자가 지난 일주일 동안 성적 욕구가 증가했다고 진술했으나, 처음 이를 알아차렸을 때는 의사에게 보고하지 않았다. 환자는 현재 자신의 이론에서 벗어나지 못해 병력 청취가 불가능하다. 체온은 99.0°F(37.2°C), 혈압은 122/81 mmHg, 맥박은 97회/분, 호흡수는 17회/분, 실내 공기에서의 산소 포화도는 98%이다. 신체 검진상 매우 에너지가 넘치는 것 외에는 특이 사항이 없다. 아래와 같이 검사실 검사가 시행되었다. 소변 검사: 색깔: 노란색, 아질산염: 음성, 세균: 음성, 백혈구: 음성, hCG: 양성, 벤조디아제핀: 음성, 바비튜레이트: 음성, 코카인: 음성, 아세트아미노펜: 음성. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 전기경련요법(Electroconvulsive therapy)
B. 플루옥세틴(Fluoxetine)
C. 할로페리돌(Haloperidol)
D. 리튬(Lithium)

## 해설

수면 욕구 감소·과다활동·성욕 증가와 망상적 사고는 급성 조증에 부합하고 소변 hCG는 양성이다. 제시된 선택지 중 할로페리돌은 임신 중 급성 조증을 조절하기 위한 항정신병약 선택이다. 플루옥세틴 단독은 조증 치료가 아니다. 리튬은 태아 위험을 고려해야 하지만 임신 중 모든 상황에서 절대금기라고 단정하지 않으며, 효과·재발 위험과 대안을 전문적으로 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000500

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 임신 중 리튬을 절대금기라고 단정한 해설 교정. 급성 조증의 항정신병약 선택과 재발 위험에 따른 리튬 개별 판단 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
