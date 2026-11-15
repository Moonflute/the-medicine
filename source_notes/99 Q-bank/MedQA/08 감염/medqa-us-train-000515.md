---
type: qbank
schema_version: 1
id: medqa-us-train-000515
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c1a7deff86e73afb77aa461c5b39d54f47d84a0e7a52290ffd1fd9670db76a2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "laceration"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA
question_type: prevention
difficulty: standard
answer: A
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
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

14세 청소년이 깨끗한 가위로 팔에 작고 얕은 열상을 입었다. 상처를 세척했고 파상풍 기초접종력은 확인할 수 없다. 적절한 파상풍 노출 후 예방은?

## 선택지

A. Tdap을 접종하고 이후 기초접종을 보완하되, 파상풍 면역글로불린은 투여하지 않는다
B. 파상풍 면역글로불린만 투여한다
C. Tdap과 파상풍 면역글로불린을 모두 투여한다
D. 깨끗한 상처이므로 접종력을 더 확인하거나 보완할 필요가 없다

## 해설


깨끗하고 작은 상처라도 접종력이 불명확하면 연령에 맞는 파상풍 백신으로 접종을 시작하거나 보완한다. 깨끗한 경미한 상처에는 면역글로불린을 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000515 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 깨끗한 상처에 파열 위험이 없다는 무관한 설명을 제거하고 Tdap 1회 뒤 추가 접종계획 필요성을 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000515
