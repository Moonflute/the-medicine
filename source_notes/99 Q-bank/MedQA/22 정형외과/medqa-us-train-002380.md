---
type: qbank
schema_version: 1
id: medqa-us-train-002380
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09b242a08732206d58b0588daa6770a23c478745a4c9cba034616f112b561907
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "fingertip amputation"
  - "amputated part preservation"
  - "saline-moistened gauze"
  - "ice water"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 칼로 왼쪽 검지 끝을 실수로 절단해 구급대원이 출동했다. 과거력은 특이사항이 없다. 왼쪽 검지 끝이 손톱바닥 수준에서 원위 지관절보다 먼 쪽으로 절단되어 뼈가 노출되고 출혈이 많지만 관절 운동과 감각은 보존되어 있다. 응급실로 이송하기 전에 가장 적절한 처치는?

## 선택지

A. 요오드에 적신 거즈로 감싸 밀폐 비닐봉지에 넣어 얼음 위에 둔다
B. 손가락 끝을 차가운 생리식염수에 보관한다
C. 손가락 끝을 따뜻한 생리식염수에 보관한다
D. 생리식염수에 적신 거즈로 감싸 밀폐 비닐봉지에 넣어 얼음물 위에 둔다

## 해설

먼저 환자의 출혈을 직접 압박 등으로 조절하고 신속히 이송한다. 절단된 손가락 끝은 생리식염수로 살짝 적신 깨끗한 거즈로 감싸 밀폐된 방수 비닐봉지에 넣고, 그 봉지를 얼음물로 간접 냉각하는 D가 적절하다. 조직을 물·식염수에 직접 담그거나 얼음에 직접 닿게 하여 얼리지 않는다. 요오드 용액에 적셔 보관하지 않는다. 재접합 가능성은 손상 정도와 전문 수부외과 평가에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 절단 조직을 직접 얼음·액체에 닿게 하지 않는 보존 방법과 출혈 조절을 명확히 하여 D를 유지했다.
- 공식/학회 근거: https://esshm.org/patients/finger-amputation-replantation/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002380
