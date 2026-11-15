---
type: qbank
schema_version: 1
id: medqa-us-train-009905
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a465f81b762b670cf7a9b5142a7ce6406eca84a4eed41329103cf7a69896356
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "원발성 담즙성 담관염"
  - "원발성 경화성 담관염"
  - "항미토콘드리아 항체"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg64u07KaZ7ISxIOuLtOq0gOyXvCAoUEJDKSAoUHJpbWFyeSBCaWxpYXJ5IENob2xhbmdpdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg6rK97ZmU7ISxIOuLtOq0gOyXvCAoUFNDKSAoUHJpbWFyeSBTY2xlcm9zaW5nIENob2xhbmdpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 여성이 두 달째 가렵다. ALP와 GGT가 높고 AST·ALT는 경미하게만 상승했다. 초음파에서 담관 확장이나 결석은 없다. 원발성 담즙성 담관염을 가장 강하게 지지하는 항체는?

## 선택지

A. 항평활근 항체
B. 항간신장 미세소체 항체
C. 항미토콘드리아 항체
D. 항조직 트랜스글루타미나제 항체

## 해설


담즙정체형 검사 이상이 있고 초음파에서 명백한 폐쇄가 없다면 PBC를 감별한다. 이 상황에서 AMA 양성이 진단을 지지한다. ALP·GGT 상승만으로는 원인을 구별할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009905 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 담즙정체에서 PBC와 PSC를 구별하는 AMA C라는 진단 표지자 의미를 대조하여 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/practice-guidelines/primary-biliary-cholangitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009905
- https://doi.org/10.1097/HEP.0000000000001875
