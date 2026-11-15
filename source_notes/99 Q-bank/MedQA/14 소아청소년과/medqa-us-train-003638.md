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
answer: C
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

7세 아이가 감기 뒤 점상출혈과 멍을 보인다. 혈소판은 25,000/μL지만 혈색소·백혈구와 말초도말의 다른 소견은 정상이다. 면역성 혈소판감소증으로 판단했다. 점막출혈은 없고 빠른 추적 진료가 가능하다. 초기 처치는?

## 선택지

A. 혈소판 수혈
B. 정맥 면역글로불린
C. 출혈 경고 증상을 안내하고 약물 없이 관찰
D. 전신 스테로이드

## 해설

소아 면역성 혈소판감소증의 초기 치료는 혈소판 수치만으로 결정하지 않는다. 점상출혈이나 멍만 있고 추적이 가능하면 약물을 시작하기보다 관찰한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ITP에서 혈소판 숫자만으로 치료·비장절제술을 결정하는 설명을 출혈 중심의 관찰 원칙으로 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003638
- https://ashpublications.org/bloodadvances/article/3/23/3829/429213/
