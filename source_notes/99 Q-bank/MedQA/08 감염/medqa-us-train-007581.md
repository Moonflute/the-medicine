---
type: qbank
schema_version: 1
id: medqa-us-train-007581
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa9184f25f4511f8b0b587cc7ec3ea951dc7644710832f0dd970ed2d372695b7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Bacillus cereus 식중독"
  - "재가열 쌀"
  - "구토형 식중독"
question_type: diagnosis
difficulty: complex
answer: A
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

32세 남자가 2시간 동안 지속된 오심과 구토로 응급실에 내원했다. 설사나 발열은 없다. 4시간 전 전날 밤 주문해 남은 인도식 쌀 요리를 먹었다. 심각한 질환 병력은 없다. 8년 전 인도에서 가족과 함께 이민 와 현재 정육점에서 일한다. 아파 보인다. 체온은 36.7°C(98°F), 맥박 85회/분, 혈압 115/70 mmHg, 실내 공기 산소포화도 98%이다. 다음 중 가장 가능성 높은 원인 미생물은 무엇인가?

## 선택지

A. Bacillus cereus
B. 황색포도상구균
C. Shigella dysenteriae
D. 장출혈성 대장균

## 해설


재가열된 밥에서 독소를 생성하는 Bacillus cereus는 구토형 식중독을 일으키며, 증상이 급성 구토와 연관된다. 따라서 가장 가능성 높은 원인은 Bacillus cereus이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007581
