---
type: qbank
schema_version: 1
id: medqa-us-train-008724
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:954232e3b8c0dbf2eae58b02aa1c74da29eb0fe36bb973feaae08081e0069e4f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hereditary spherocytosis"
  - "extravascular hemolysis"
  - "pigment gallstones"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 여성이 반복되는 황달과 복부팽만으로 내원했다. 비장비대와 여러 담석이 있고 아버지도 황달과 담석 병력이 있다. 혈색소 9 g/dL, MCHC 37 g/dL, 망상적혈구 6.5%다. 직접항글로불린검사는 음성이고 적혈구 삼투 취약성은 증가했다. 가장 가능성 높은 진단은?

## 선택지

A. 유전구형적혈구증
B. 혈액 손실
C. 재생불량성 빈혈
D. 비타민 B12 결핍

## 해설


가족력이 있는 만성 용혈, 황달·비장비대·담석, MCHC 상승은 유전구형적혈구증을 시사한다. 직접항글로불린검사 음성은 자가면역용혈빈혈과 감별에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008724 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가족력·MCHC 증가·DAT 음성 용혈은 유전구형적혈구증이며 삼투취약성 증가 A와 일치. 사진 없이도 본문에 핵심 진단 단서가 명시되어 있다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008724
