---
type: qbank
schema_version: 1
id: medqa-us-test-001031
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f5ba9d246b5980b5d36213987b01869575ef85f4eac20c98590d3ec6d7b05762
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "디조지 증후군"
  - "22q11.2 결실"
  - "저칼슘혈증"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7Iq07IOYIOustO2YleyEseymnSAoRGlHZW9yZ2UgU3luZHJvbWUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

신생아에게 총동맥간증, 구개 이상과 저칼슘혈증이 있다. 22q11.2 결실이 의심된다. 저칼슘혈증을 설명하는 검사 소견은?

## 선택지

A. 높은 부갑상샘호르몬과 낮은 인
B. 높은 혈청 칼시토닌만 확인
C. 저칼슘혈증에 비해 부적절하게 낮은 부갑상샘호르몬
D. 낮은 TSH와 상승한 유리 T4

## 해설


22q11.2 결실에서 부갑상샘 형성저하가 있으면 칼슘이 낮아도 PTH가 충분히 증가하지 않는다. 심장·면역·기도 문제도 함께 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001031
- https://doi.org/10.1542/peds.2025-072717
