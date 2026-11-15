---
type: qbank
schema_version: 1
id: medqa-us-train-004330
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c5b00662ea90e205828e57c8a7868dfcc199d1b2604153d7512b8ef1e9cc5ed
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "수막종"
  - "시신경 압박"
  - "결핍성 동공반응"
  - "Meningioma"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

환자가 수개월 동안 한쪽 시력이 떨어지고 냄새를 잘 못 맡는다. 안저에서 시력이 나쁜 쪽 시신경이 위축되고 반대쪽 시신경유두는 부어 있다. 다음 검사는?

## 선택지

A. 안압만 측정해 추적한다
B. 앞쪽 두개저와 시신경을 포함한 조영 MRI를 시행한다
C. 정기 안경 검사만 예약한다
D. 압력을 재기 위해 요추천자를 먼저 한다

## 해설

한쪽 시신경 위축과 반대쪽 유두부종에 후각 저하가 동반되면 전두개저 종괴를 의심한다. 시신경 압박과 두개내압 위험을 먼저 영상으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 좌측 시신경 위축·우측 유두부종·후각저하의 Foster Kennedy 양상을 양측 유두부종으로 잘못 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004330
- https://pubmed.ncbi.nlm.nih.gov/34181733/
