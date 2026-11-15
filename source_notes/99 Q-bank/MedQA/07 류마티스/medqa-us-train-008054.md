---
type: qbank
schema_version: 1
id: medqa-us-train-008054
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:59dc0d3c6fdc6a3dd95d21474ce5de49090763b0e74fc1837b10f242463ae2a4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "sarcoidosis"
  - "erythema nodosum"
  - "bilateral hilar lymphadenopathy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
  - MTkg7ZS867aA6rO8L-qysOygiCDtmY3rsJggKEVyeXRoZW1hIE5vZG9zdW0pLm1k
question_type: diagnosis
difficulty: simple
answer: B
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

41세 여성이 양쪽 발목 관절염과 정강이의 아픈 붉은 결절로 내원했다. 흉부 X선에서 양측 폐문 림프절이 대칭적으로 커져 있다. 이 조합이 가장 전형적인 질환은?

## 선택지

A. 급성 류마티스열
B. 사르코이드증
C. 세균성 봉와직염
D. 전신홍반루푸스

## 해설


발목 관절염, 결절홍반과 양측 폐문 림프절비대는 사르코이드증의 급성 양상인 뢰프그렌 증후군에 맞는다. 임상 상황에 따라 결핵 등 다른 원인도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008054 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: erythema nodosum을결절성피부염이라 부른 용어 교정; 원문CBC값을 일괄 정상이라고 바꾼 부분 복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008054
- https://doi.org/10.1164/rccm.202002-0251ST
