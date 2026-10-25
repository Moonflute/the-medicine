---
type: qbank
schema_version: 1
id: medqa-us-train-002125
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86b65573a802eb2c40211b31751fff64a3a1ed71704b259091d327f8998c76f7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bipolar I disorder"
  - "acute mania"
  - "valproate"
  - "olanzapine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
original_answer: B
answer_change_reason: "가임기 여성의 발프로산은 태아 기형·발달 위험 때문에 피하고, 이전 유지약이 없는 첫 급성 조증의 초기 선택으로 제시된 할로페리돌 단독이 적절하다. 임신검사 음성이 발프로산의 생식 안전성 평가를 대체하지 않는다."
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 3주간 이상한 행동을 보여 남편의 권유로 일차진료의를 방문했다. 환자는 밤새 이베이에서 온라인 쇼핑을 하며 지냈다. 잠을 거의 자지 않았는데도 낮에는 교사로 일하면서 에너지가 넘쳤고, 자신의 일이 어차피 자신에게는 수준 이하라고 생각한다. 과거 정신과 치료를 받은 적은 없지만 2년 전 스스로 우울증이라고 진단한 삽화가 있었다고 한다. 자살 사고는 부인한다. 임신검사는 음성이다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 발프로산과 벤라팍신
B. 발프로산과 올란자핀
C. 할로페리돌
D. 전기경련치료

## 해설

수면 욕구 감소·과다한 지출·고에너지·과대성은 급성 조증을 시사한다. 가임기 여성에서 임신검사가 음성이더라도 발프로산을 일률적인 초기 선택으로 삼지 않는다. WHO는 가임기 여성의 발프로산 사용을 피하도록 안내하며, NICE는 기존 항정신병약이나 기분조절제를 복용하지 않는 조증에서 할로페리돌 등 항정신병약을 초기 선택으로 제시한다. 따라서 현재 선택지 중 할로페리돌로 정답을 교정했다. 발프로산·올란자핀 병합이 모든 첫 조증의 표준이라는 기존 해설은 삭제한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002125

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 가임기 여성의 첫 조증에서 임신검사 음성만으로 발프로산 병합을 기본 초기 치료로 고르는 원정답 B를 C(할로페리돌)로 교정. WHO 가임기 발프로산 회피 및 NICE 미치료 조증 초기 항정신병약 근거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations
- https://www.who.int/news/item/02-05-2023-use-of-valproic-acid-in-women-and-girls-of-childbearing-potential/
