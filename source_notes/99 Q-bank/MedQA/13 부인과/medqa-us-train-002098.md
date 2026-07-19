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
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


카바마제핀은 임신 중 항간질제 중 태아 기형 위험이 높아, 복용 전 엽산 보충이 신경관 결손 예방에 필수적이다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002098
