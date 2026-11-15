---
type: qbank
schema_version: 1
id: medqa-us-train-005156
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca7595d4c40858c0738748049ee587bb24056086a40df2c8acee4d02ba7f571a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "일차 매독"
  - "경성하감"
  - "Treponema pallidum 암시야 검사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: investigation
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

며칠 전 생긴 통증 없는 단단한 생식기 궤양으로 내원했다. 이전 매독 치료력은 없다. 일차 매독이 의심될 때 국내 일반 진료에서 기본이 되는 혈청검사 조합은?

## 선택지

A. 정량 RPR과 트레포네마 특이 항체검사
B. 정량 RPR 단독
C. 트레포네마 특이 항체검사 단독
D. HIV 항원·항체 검사와 일반 세균배양

## 해설


일반적인 혈청 진단은 비트레포네마 검사와 트레포네마 특이 검사를 함께 해석한다. 궤양이 시작된 직후에는 초기 혈청검사가 음성일 수 있어 의심이 높으면 추적 검사나 병변 특이 검사도 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005156 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초기 매독의 암시야 D는 유효하나 모든 단계에서 가장 민감하다는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005156
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
