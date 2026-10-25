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
question_type: diagnosis
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

67세 남성이 24시간 동안 왼쪽 눈의 시력 저하와 눈앞에 검은 점이 보이는 증상으로 응급실에 왔다. 눈 위에 커튼이 드리워진 것 같고 간헐적으로 섬광이 보인다고 한다. 통증이나 복시가 없고 2주 전 왼쪽 백내장 수술을 받았다. 고혈압과 제2형 당뇨병이 있으며 활력징후는 정상이다. 오른쪽 시력은 20/25, 왼쪽은 3피트에서 손가락 세기만 가능하고 동공은 양측 같으며 반응성이다. 각막반사는 있고 전방에는 이상이 없다. 대면시야검사에서 오른쪽은 정상, 왼쪽은 비측과 하측 결손이 있다. 안저검사를 위해 산동을 기다리는 중이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 퇴행성 망막분리
B. 망막박리
C. 안내염
D. 출혈성 맥락막박리

## 해설

급성 비문증, 섬광과 커튼 같은 시야 가림, 무통성 시력저하 및 최근 백내장 수술력은 B, 망막박리에 가장 합당하다. 열공성 망막박리는 망막 열공을 통해 액체가 망막 아래로 들어가 신경망막이 분리되는 기전으로 설명한다. 안압 변화가 일반적인 핵심 원인이라는 설명은 부정확하다. 심한 통증과 전방 염증이 더 전형적인 수술 후 안내염과 구별된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 망막박리의 핵심을 막연한 안압 변화가 아니라 광시증·비문증·커튼 시야 및 수술 위험과 연결.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003030
