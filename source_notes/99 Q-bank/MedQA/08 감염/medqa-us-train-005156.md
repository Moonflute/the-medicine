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
---

# MedQA US 임상문제

## 문제

이전에 건강하던 25세 남자가 4일 전 발생한 통증 없는 음경의 단일 병변으로 내원했다. 여러 파트너와 성관계를 하고 콘돔 사용은 일관되지 않다. 생식기 진찰에서 음경 몸통에 얕고 압통 없는 단단한 궤양과 매끈한 바닥, 양측 무통성 서혜부 림프절병증이 있다. 진단 확인을 위한 가장 적절한 다음 검사는?

## 선택지

A. 면봉 배양검사
B. 신속 혈장 리진 검사
C. 형광 트레포네마 항체 흡수검사
D. 암시야 현미경검사

## 해설


4일 된 무통성 경성 음경궤양은 초기 매독에 부합한다. 숙련 검사자가 신선한 병변 삼출물에서 암시야 현미경 D로 운동성 병원체를 직접 확인하면 조기 진단에 유용하며 이 시기에 혈청검사가 아직 음성일 수 있다. 다만 검체·시간·숙련도와 병기에 따라 민감도가 달라 모든 매독 검사의 절대 최민감 검사라고 할 수 없다. Nontreponemal/treponemal 혈청검사를 병행하고 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005156 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초기 매독의 암시야 D는 유효하나 모든 단계에서 가장 민감하다는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005156
