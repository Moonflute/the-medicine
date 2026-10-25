---
type: qbank
schema_version: 1
id: medqa-us-train-003638
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e3537c07fbc1dc4c87649535d9363cf28c08062f94cc4b1ce812c1002e7ec328
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "immune thrombocytopenia"
  - "postviral ITP"
  - "petechiae"
  - "observation"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 최근 상기도감염이 호전된 지 2주 후 갑자기 발생한 전신 점상출혈로 내원했다. 혈소판은 6만5천/mm3였고 다른 혈구 수치는 정상이었다. 아이는 전반적으로 건강해 보였다. 다음 중 가장 적절한 치료는?

## 선택지

A. 정맥 면역글로불린
B. 관찰
C. 리툭시맙
D. 비장절제술

## 해설

감염 후 발생한 고립성 혈소판감소와 피부 점상출혈은 소아 ITP에 부합한다. 중대한 점막출혈 없이 혈소판 65,000/μL인 이 경우 관찰(B)이 적절하며 추적·출혈 경고 교육이 필요하다. 치료는 출혈·생활 영향 등에 따라 결정하며 특정 수치 미만이면 모두 IVIG나 비장절제술을 시행하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ITP에서 혈소판 숫자만으로 치료·비장절제술을 결정하는 설명을 출혈 중심의 관찰 원칙으로 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003638
