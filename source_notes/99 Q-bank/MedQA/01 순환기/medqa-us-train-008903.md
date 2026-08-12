---
type: qbank
schema_version: 1
id: medqa-us-train-008903
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eafc70048cf7126602563f9f88842d64918950d0e9090f5087bcaf03c2a8c2ee
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ACE inhibitor adverse effect"
  - "cough"
  - "hyperkalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: other
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 48세 여성이 두통, 피로, 마른기침, 반복되는 기관지경련으로 내원했다. 지난달 안과의사에게 중등도 비증식성 당뇨망막병증을 진단받았다. 진료실 혈압은 158/95mmHg이고 24시간 소변에서 단백질 9.5g이 검출되었다. 신체검사에서 미만성 천명, 경정맥 팽창, 2+ 정강이 압흔성 부종이 있다. 칼륨은 5.2mEq/L이다. 다음 중 현재 상태에 가장 기여하는 약물은 무엇인가?

## 선택지

A. 암로디핀
B. 히드로클로로티아지드
C. 리시노프릴
D. 로사르탄

## 해설


ACE 억제제 리시노프릴은 기침을 유발하고 고칼륨혈증을 악화시킬 수 있다. 환자의 기침과 고칼륨혈증은 리시노프릴 사용과 연관된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008903
