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
answer: B
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

4세 아이가 7일째 고열을 보인다. 양쪽 눈의 비삼출성 충혈, 갈라진 입술, 몸통 발진과 손발 부종이 있다. 가와사키병이 진단됐고 심초음파를 준비 중이다. 핵심 초기 치료는?

## 선택지

A. 항생제를 먼저 투여하고 열이 끝날 때까지 관찰
B. 정맥 면역글로불린을 신속히 투여하고 아스피린을 병행
C. 아스피린만 투여하고 심장 평가는 증상 발생 후 시행
D. 정맥 면역글로불린은 관상동맥류가 생긴 뒤에만 투여

## 해설

정맥 면역글로불린(일반적으로 2 g/kg 1회)이 관상동맥 합병증을 줄이는 핵심 치료다. 아스피린을 병행하고, 심초음파를 준비하느라 치료를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 가와사키 IVIG 5 mg/kg이라는 중대한 용량 오류를 2 g/kg 단회로 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295
- https://choc.org/wp-content/uploads/careguidelines/Kawasaki_Disease_Care_Guideine_2024.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010133
- https://doi.org/10.1161/CIR.0000000000001295
