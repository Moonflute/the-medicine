---
type: qbank
schema_version: 1
id: medqa-us-train-001130
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19b33edf37474665520487c3764cf7d053cf3b838d38e0cfae561f25d866d771
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "acute myelogenous leukemia"
  - "type 1 diabetes mellitus"
  - "infectious mononucleosis"
  - "acute renal failure"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

25세 남성이 급성 골수성 백혈병 유도항암을 앞두고 있다. 종양용해증후군 위험은 중간 정도이며 요산·신기능은 정상이다. 수분 섭취와 검사를 면밀히 관리할 수 있다. 요산 관련 신손상을 예방할 약은?

## 선택지

A. 프로베네시드
B. 알로푸리놀
C. 콜히친
D. 아세타졸아미드

## 해설


중간 위험이고 요산과 신기능이 정상이라면 수분 공급 및 검사 감시와 함께 알로푸리놀을 사용할 수 있다. 알로푸리놀은 새 요산 생성을 줄인다. 고위험이거나 이미 요산이 높으면 라스부리카제를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001130 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AML 항암 전 TLS 예방 약물선지 C 유지. 급성 요산증 비표준 표현 정리, 위험도별 수액·rasburicase 고려 추가.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/prophylaxis-and-treatment/108-prevention-of-tumour-lysis-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001130
- https://doi.org/10.1111/bjh.70092
