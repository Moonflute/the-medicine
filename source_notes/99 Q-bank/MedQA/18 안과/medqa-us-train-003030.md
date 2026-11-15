---
type: qbank
schema_version: 1
id: medqa-us-train-003030
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f8ab6c4d2842b8dd2e2495fc998c34d869621cdac55f2829c44658479f4a5fe
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "retinal detachment"
  - "flashes and floaters"
  - "curtain-like visual field loss"
  - "post-cataract surgery complication"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-unneunieuwleumrCAocmV0aW5hbCBkZXRhY2htZW50KS5tZA
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

백내장 수술력이 있는 67세 환자에게 갑자기 섬광과 비문이 늘고, 한쪽 눈의 바깥쪽 시야가 커튼처럼 가려졌다. 통증은 없다. 다음 조치는?

## 선택지

A. 인공눈물을 주고 일주일 뒤 본다
B. 망막열공·박리를 의심해 당일 긴급 산동 안저검사를 한다
C. 편두통으로 보고 진통제만 처방한다
D. 도수 검사를 먼저 예약한다

## 해설

갑작스러운 섬광과 비문에 고정된 시야 가림이 더해지면 망막열공 또는 박리 가능성이 있다. 지연 없이 산동 안저로 주변 망막을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 망막박리의 핵심을 막연한 안압 변화가 아니라 광시증·비문증·커튼 시야 및 수술 위험과 연결.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003030
- https://www.aao.org/education/preferred-practice-pattern/posterior-vitreous-detachment-retinal-breaks-latti
