---
type: qbank
schema_version: 1
id: medqa-us-validation-000713
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:72aa4b6b307ae9ec9d182c564d7c4258e19b264e8c11e09d99aefb66a7613104
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "둔상"
  - "복강내 출혈"
  - "외상 FAST 초음파"
question_type: investigation
related_disease_slugs: []
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

복부 둔상으로 온 23세 환자의 혈압이 80/45 mmHg다. 복부 출혈 가능성을 확인해야 하지만 CT실로 이동하기 어렵다. 소생과 동시에 침상에서 시행할 검사는?

## 선택지

A. 복부 조영증강 CT
B. 복부 MRI
C. 외상 집중 초음파(eFAST)
D. 상부위장관 내시경

## 해설


불안정한 외상 환자에서 FAST는 침상에서 복강·심낭의 액체를 신속히 확인할 수 있다. 음성이라도 초기 출혈이나 후복막 손상은 배제되지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000713
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/
