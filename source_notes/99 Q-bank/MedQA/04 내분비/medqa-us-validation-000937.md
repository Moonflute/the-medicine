---
type: qbank
schema_version: 1
id: medqa-us-validation-000937
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ba6aedcec306767c07dd6174e64532c00817eeabc5b05852fb3e69dc9005e901
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "음이온차 대사성 산증"
  - "제1형 당뇨병"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

12세 여아가 깨우기 어렵고 간헐적으로 구토하여 응급실에 왔다. 구강 점막이 건조하고 입에서 과일 냄새가 나며, 호흡은 느리고 깊고 힘들다. 가장 가능성 높은 일차 대사 이상은?

## 선택지

A. 음이온차 대사성 산증
B. 정상 음이온차 대사성 산증
C. 대사성 알칼리증
D. 호흡성 알칼리증

## 해설


구강 건조·과일 냄새·케톤성 호흡은 케톤산증을 시사한다. 케톤산증은 음이온 차가 증가한 대사성 산증을 일으킨다. 따라서 음이온 차 대사성 산증이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000937 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 과일 냄새·탈수·의식변화의 ketosis 임상상에서 케톤산 축적에 의한 고음이온차 대사성 산증 A 기전은 일치. 느린호흡이라는 원문 묘사를 전형적 tachypnea로 덮어쓰지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000937
