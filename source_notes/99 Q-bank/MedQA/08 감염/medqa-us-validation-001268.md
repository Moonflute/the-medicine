---
type: qbank
schema_version: 1
id: medqa-us-validation-001268
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:406bdcbbe1795c1ec96c935b9446a7c83f7cbca2428654de41fea1b005f356ae
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "진드기 마비"
  - "급성 이완성 마비"
  - "진드기 제거"
  - "Tick paralysis"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

37세 남성이 아침에 일어난 후 시작된 불안정한 보행으로 응급실에 왔다. 워싱턴주에서 벌목공으로 일하며 양하지 이완성 마비, 심부건반사 소실과 호흡근 약화가 진행되어 보조호흡을 시작했다. 가장 적절한 다음 처치는?

## 선택지

A. 효소결합면역흡착검사
B. 독시사이클린 투여
C. 보툴리눔 항독소 투여
D. 진드기 찾아 제거

## 해설


워싱턴주 야외근무자에게 무열·보존된 의식과 뇌신경, 급성 상행성 이완마비·반사 소실이 나타나 진드기 마비를 의심한다. 전신과 두피에서 부착 진드기를 찾아 제거하는 D가 적절하다. 이는 진드기 타액의 신경독소 작용이지 진드기가 보툴리눔 독소를 전달하는 질환이 아니다. 호흡 보조와 관찰을 지속하며 제거 후 회복을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001268 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 태평양북서부 야외작업·급성 무열 상행성 이완마비에서 진드기 찾아제거 D 유지. 진드기 독소를 botulinum toxin이라고 혼동한 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/preview/mmwrhtml/00040975.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001268
