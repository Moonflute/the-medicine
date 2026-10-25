---
type: qbank
schema_version: 1
id: medqa-us-train-002098
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3fc58d483a7bb3d35fa2b26a04a065d3754b4a7ddde95a1ed6753bc8dc57ff57
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "epilepsy in pregnancy"
  - "carbamazepine"
  - "folic acid"
  - "neural tube defects"
  - "Epilepsy"
question_type: prevention
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsoITspp0gKEVwaWxlcHN5KS5tZA
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 정기검진을 위해 내원했다. 임신 20주이며 임신 중 발작으로 여러 차례 입원했다. 알려진 발작장애가 있지만 임신을 알게 된 후 발프로산을 중단했다. 그 외 과거력은 특이사항이 없다. 흡연·음주·약물 사용은 하지 않는다. 평소 약물 복용을 꺼리고 주로 무당에게 진료를 받는다. 최근 입원 후 카바마제핀을 시작하기로 동의했다. 현재 이 환자에게 가장 적절한 치료는?

## 선택지

A. 엽산
B. 철분
C. 마그네슘
D. 비타민 D

## 해설

항경련제를 복용하는 임산부에게 엽산(A)을 권고한다. 신경관 결손 예방에는 임신 전·아주 초기 보충이 특히 중요하며 20주에 시작해 이미 생긴 결손을 되돌릴 수는 없다. 반복 발작은 전문팀이 약제의 효과와 태아 위험을 함께 평가해야 하며 임의 중단을 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 20주 엽산이 이미닫힌 신경관결손을 예방·역전한다고 오해하지 않도록 교정.
- https://www.cdc.gov/folic-acid/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002098
