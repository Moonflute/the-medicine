---
type: qbank
schema_version: 1
id: medqa-us-train-009632
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4398caa15561b0f08d0679404826174e4f1d2e99ed42b7fbed37b98e8f99201e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Vibrio parahaemolyticus"
  - "장염비브리오"
  - "raw oyster-associated gastroenteritis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzoOuemO2ajOy2qSDsnKDstqnspp0gKEFuaXNha2lhc2lzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

48세 여성이 3일 동안 혈성 설사, 배꼽 주위 불편감과 경련, 오심, 구토, 발열로 내원했다. 약 3일 전 해산물 식당에서 생굴을 먹었지만 다른 감염 노출은 없었다. 체온 37.5°C, 호흡수 15회/분, 맥박 67회/분, 혈압 102/68 mmHg이며 진찰은 특이사항이 없다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 로타바이러스 감염
B. C. difficile 대장염
C. 바실루스 세레우스 감염
D. 장염비브리오 감염

## 해설


생굴 섭취와 급성 설사·복통·구토의 조합은 선택지 중 장염비브리오(V. parahaemolyticus) 감염(D)에 가장 부합한다. 원문은 식사와 증상이 약 3일 전이라고만 서술하므로 정확히 24시간 이내 발병했다고 덧붙이지 않는다. 혈성 설사는 다른 침습성 장내 감염도 감별해야 하지만 노출과 제시 선지가 D를 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009632 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 생굴 후 장염에서 V. parahaemolyticus D 유지. 원문에 없는 24시간 이내 발병을 단정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009632
