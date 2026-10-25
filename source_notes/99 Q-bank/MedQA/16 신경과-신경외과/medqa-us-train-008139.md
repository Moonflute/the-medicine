---
type: qbank
schema_version: 1
id: medqa-us-train-008139
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1fc475fc3885bd21c4376d91f6c6e47b39244182a5625da60a0cbf045beff69e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "migraine without aura"
  - "acute migraine treatment"
  - "triptan"
  - "migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 반복되는 두통을 호소했다. 우측 머리 통증이 오심을 동반하고 무거운 물건을 들 때 악화되며 보통 2일간 지속된다. 박동성이고 초콜릿을 먹으면 유발되며 전조는 없다. 불편감이 심해 어두운 방에 있고 여러 일반의약품을 사용했지만 효과가 없었다. 급성 발작의 다음 치료로 가장 적절한 것은?

## 선택지

A. D2 수용체 차단제
B. 베타차단제
C. GABA 트랜스아미나제 억제제
D. 5-HT1B/1D 작용제

## 해설

일측 박동성 두통, 활동 시 악화, 구역과 빛 회피는 편두통에 맞는다. 일반 진통제에 반응하지 않는 급성 발작에서 보기 중 5-HT1B/1D 작용제(D, triptan)를 고려한다. 베타차단제는 주로 예방 치료에 쓰인다. D2 수용체 차단제인 metoclopramide 등도 구역 치료 및 일부 급성 편두통 상황에서 사용되므로 다른 모든 선택지가 편두통 치료와 무관하다고 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 트립탄 D 유지. D2 차단제는 편두통 급성 치료에 전혀 적합하지 않다는 오류 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008139
