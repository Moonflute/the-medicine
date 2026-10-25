---
type: qbank
schema_version: 1
id: medqa-us-train-001194
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f5645ea8c19e22f80eb586c011626972d06e6c45f0e2667e987acd4280a761d
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases: []
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 임신 전 상담을 위해 내원하였다. 결혼한 지 2년 되었으며 내년 안에 임신을 계획하고 있다. 월경은 30일 주기로 규칙적이며 4일간 지속되고 양은 정상이다. 흡연이나 음주는 하지 않으며 균형 잡힌 식단을 유지하고 있다. 복용 중인 약물은 없다. 키는 160cm, 체중은 55kg이며 체질량지수(BMI)는 21.5kg/m2이다. 골반 검사를 포함한 신체 검진에서 이상 소견은 없다. 환자는 월경 주기의 가임기에 대해 충분히 알고 있다. 현재 이 환자에게 가장 적절한 권고 사항은 무엇인가?

## 선택지

A. 엽산 보충제 복용 시작
B. 비타민 B12 보충제 복용 시작
C. 철분 보충제 복용 시작
D. 임신 전 2kg 체중 증량

## 해설

건강한 임신 계획 여성에게 신경관 결손 예방을 위한 엽산 400 μg/일을 임신 전부터 권고하므로 A가 적절하다. 균형 잡힌 식사를 해도 엽산 보충이 권장된다. B12·철 등 다른 보충제 필요성은 식사·빈혈·위험인자에 따라 별도로 평가하며 무조건 불필요하다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 엽산 권고는 유지하되 다른 보충제는 필요 없다는 일괄 단정 삭제.
- https://www.cdc.gov/folic-acid/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001194
