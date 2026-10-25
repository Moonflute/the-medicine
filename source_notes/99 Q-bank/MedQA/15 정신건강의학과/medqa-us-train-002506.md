---
type: qbank
schema_version: 1
id: medqa-us-train-002506
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:abf106cb5d119024588540e8d51fa17619d3ef7e7b873c6dcd0fd726bd782046
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "lithium toxicity"
  - "dehydration"
  - "low sodium intake"
  - "lithium reabsorption"
question_type: adverse_effect
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-umrO2KrCDspJHrj4UgKExpdGhpdW0gUG9pc29uaW5nKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 남성이 며칠간 지속된 손 떨림, 구토, 설사로 응급실에 왔다. 아내는 그가 멍한 상태라고 한다. 조울증과 제1형 및 제2형 당뇨병이 있으며 매일 리튬, 메트포르민, 종합비타민을 복용한다. 리튬 수치는 1.8 mEq/L(치료 범위 0.6~1.2)이다. 다음 중 리튬 농도 상승에 기여했을 가능성이 가장 높은 것은?

## 선택지

A. 염분 섭취 감소
B. 다량의 카페인 섭취
C. 리튬 치료에 플루옥세틴 추가
D. 리튬 치료에 루라시돈 추가

## 해설

염분 섭취가 줄면 신장에서 나트륨과 함께 재흡수되는 리튬의 청소율이 감소해 혈중농도가 상승할 수 있다. 따라서 제시된 선택지 중 염분 섭취 감소가 적절하다. 리튬은 주로 신장으로 배설되므로 간 대사 문제로 설명하지 않는다. 다른 병용약이 임상적으로 항상 무관하거나 무위험하다는 뜻도 아니다. 원문의 제1형 및 제2형 당뇨병 병력 병기는 원자료 표현으로, 이 문항의 정답 근거로 사용하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002506

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 저염식-리튬 상승 정답 유지. 다른 약물 모두 무관하다는 과장 및 대사라는 부정확한 설명 교정. 원문의 제1/2형 병력 이상은 임의 확정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
