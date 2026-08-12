---
type: qbank
schema_version: 1
id: medqa-us-train-007059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ff6be6947f5fe8bdd5be06536490ab221b09003e8bffa9a012e2ff9ef11c5f3
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "의료전문직 경계"
  - "비응급 편두통"
  - "의사-환자 관계"
  - "Migraine"
question_type: ethics
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

40세 여자가 의사의 집에 두통으로 찾아왔다. 심한 두통이며 어제 진료실을 방문했는데도 증상이 호전되지 않았다고 한다. 지난 6개월 동안 지속된 편두통으로 진단받았고 현재 증상도 이전 두통과 비슷하며 중증도는 3/10이라고 한다. 여러 약물을 처방받았지만 대체로 치료를 잘 따르지 않는다. 진찰과 증상에 대한 긴급 치료를 요청하고 있다. 의사의 가장 적절한 답변은 무엇인가?

## 선택지

A. 많이 아픈 것 같군요. 제가 어떻게 도울 수 있는지 살펴보겠습니다.
B. 안타깝지만 지금은 진찰하고 치료할 수 없습니다. 진료실에 방문할 예약을 잡아 주세요.
C. 여기로 오는 대신 증상 때문에 응급실에 가야 합니다.
D. 증상이 심해 보입니다. 괜찮은지 확인하기 위해 간단히 진찰해 보겠습니다.

## 해설


환자는 비응급 상황이며, 현재 진료실에 없고 예약이 필요하다는 점을 명확히 해야 한다. 급박한 의료적 위협이 없으므로 즉시 진료를 제공할 의무가 없으며, 예약을 잡아 차후에 평가하는 것이 적절하다. 따라서 "진료실에 방문할 예약을 잡아 주세요"가 올바른 답변이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007059
