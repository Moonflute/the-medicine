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
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

사고로 손가락 끝 일부가 완전히 떨어졌다. 환자의 출혈을 조절하고 응급실로 이송하는 동안 떨어진 조직을 어떻게 보관할까?

## 선택지

A. 생리식염수에 촉촉하게 적신 거즈로 감싸 밀봉하고 봉지를 간접 냉각한다
B. 조직을 얼음에 직접 올려 얼린다
C. 조직을 소독약에 푹 담근 채 운반한다
D. 마른 채 실온에 두고 다음 날 가져간다

## 해설

절단 조직은 촉촉한 거즈로 감싸 방수 봉지에 밀봉한 뒤 주변을 차갑게 유지한다. 직접 얼음이나 물에 닿게 하지 않고 환자와 함께 신속히 이송한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 절단 조직을 직접 얼음·액체에 닿게 하지 않는 보존 방법과 출혈 조절을 명확히 하여 D를 유지했다.
- 공식/학회 근거: https://esshm.org/patients/finger-amputation-replantation/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002380
