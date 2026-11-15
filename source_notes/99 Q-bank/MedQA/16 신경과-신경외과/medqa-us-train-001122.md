---
type: qbank
schema_version: 1
id: medqa-us-train-001122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:23d04f4c02640353702f0083cc72cda6c18f7c810984aae1ae7b2984ee7757a0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Neurofibromatosis type 2"
  - "Vestibular schwannoma"
  - "Meningioma"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK9IOyErOycoOyiheymnSAoTmV1cm9maWJyb21hdG9zaXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_si6Dqsr3stIjsooUgKFNjaHdhbm5vbWEpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 환자가 양쪽 청력이 점차 떨어진다. MRI에서 양쪽 내이도를 따라 전정신경에 붙어 자라는 신경초종이 보인다. 가장 의심할 유전질환은?

## 선택지

A. 제1형 신경섬유종증
B. 폰히펠–린다우병
C. NF2 관련 신경초종증
D. 결절성 경화증

## 해설

양측 전정신경초종은 NF2 관련 신경초종증의 핵심 단서다. 관련 수막종과 다른 신경계 종양 여부도 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NF2의 동반 수막종 C를 유지하되 기존 양측 소뇌교각 종양을 수막종과 혼동하지 않도록 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001122
- https://pubmed.ncbi.nlm.nih.gov/35674741/
