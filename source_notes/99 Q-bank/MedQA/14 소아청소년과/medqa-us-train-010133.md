---
type: qbank
schema_version: 1
id: medqa-us-train-010133
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9cadc9c484b5fd6c2a4ea477f4315fd057fe4b330beb0152759242a1d87fc7b7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "가와사키병"
  - "관상동맥류 예방"
  - "정맥 면역글로불린"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 7일 동안 지속된 발열과 경미한 복통으로 부모와 함께 내원했다. 2일 전 발진이 생겼고 설사나 구토는 없다. 4주 전 가족과 콜로라도로 캠핑을 다녀왔으며 예방접종 기록은 확인할 수 없다. 체온 39.4°C, 맥박 분당 111회, 호흡수 분당 27회, 혈압 96/65 mmHg이다. 양측 결막충혈, 아랫입술 균열, 인두 홍반, 압통성 경부 림프절병증, 손발 부종이 있다. 몸통에 반점상 홍역모양 발진이 있고 양쪽 무릎 관절이 붓고 압통이 있으며 통증으로 운동범위가 제한된다. 다음 중 가장 적절한 치료는?

## 선택지

A. 경구 독시사이클린
B. 지지요법만
C. 경구 페니실린
D. 정맥 면역글로불린

## 해설

지속 발열과 결막·구강·사지·림프절·발진 소견은 가와사키병에 부합한다. IVIG(D)는 통상 2 g/kg을 단회 정주하며 aspirin 및 심초음파 평가를 병행한다. 5 mg/kg은 이 적응증의 IVIG 표준 용량이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 가와사키 IVIG 5 mg/kg이라는 중대한 용량 오류를 2 g/kg 단회로 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295
- https://choc.org/wp-content/uploads/careguidelines/Kawasaki_Disease_Care_Guideine_2024.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010133
