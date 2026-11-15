---
type: qbank
schema_version: 1
id: medqa-us-train-006561
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5b7cdcfee6eae8f060839a36097faf60c833a4260f302381a7b0820b47022337
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "포도당-6-인산탈수소효소 결핍증"
  - "하인즈 소체"
  - "급성 용혈"
  - "G6PD deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

상기도 감염 때마다 황달과 짙은 소변이 생기는 8세 환자다. 용혈 소견과 망상적혈구 증가가 있고 직접항글로불린검사는 음성이다. 혈액도말에서 깨물린 적혈구가 보인다. 가장 가능성 높은 원인은?

## 선택지

A. 글로빈 베타 사슬 합성 감소
B. 포도당-6-인산탈수소효소 결핍
C. 면역성 적혈구 파괴
D. 철결핍

## 해설


산화 스트레스 뒤 반복되는 비면역성 용혈과 깨물린 적혈구는 G6PD 결핍을 시사한다. 회복 뒤 효소 활성 검사로 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006561 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 8세를6세이하로 바꾸고 Heinz body를 절대 특이적이라 한 오류 교정; 원문 haptoglobin 단위 불일치 표시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006561
- https://b-s-h.org.uk/guidelines/guidelines/laboratory-diagnosis-of-g6pd-deficiency
