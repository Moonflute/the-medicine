---
type: qbank
schema_version: 1
id: medqa-us-train-003632
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4d9c572afc171f325148a38c34bebf08dfe6118ce22cb963feef88c17fb0873
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "discoid lupus erythematosus"
  - "scarring alopecia"
  - "photosensitive skin disease"
  - "erythematous scaly plaques"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVhO2GoO2UvCDtlLzrtoDsl7wgKEF0b3BpYyBEZXJtYXRpdGlzKS5tZA
difficulty: standard
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

30세 여성이 3개월간 통증을 동반한 탈모로 내원했다. 두피에 가렵고 아픈 반점이 생긴 뒤 흉터와 과다색소침착을 남기며 탈모가 진행되었다. 지난 몇 년간 간헐적인 발열, 근육통, 관절통, 피로도 있었다. 두피에 홍반성 인설성 판이 관찰되었다. 가장 가능성 높은 진단은?

## 선택지

A. 원형탈모증
B. 원반형 홍반성 루푸스
C. 두부백선
D. 발모벽

## 해설

통증·가려움이 있는 홍반성 인설성 두피 판이 흉터와 색소 변화를 남기며 탈모로 진행하여 원반형 홍반성 루푸스(B)를 지지한다. 원형탈모증·발모벽은 보통 비흉터성이다. 광과민성은 DLE와 연관될 수 있으나 이 환자에서 보고된 사실은 아니다. 전신 증상은 동반 전신성 루푸스 여부를 별도로 평가할 이유가 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 흉터성 인설성 두피 탈모의 DLE B를 유지하고 본문에 없는 광과민성 발진을 관찰된 소견처럼 제시한 설명을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003632
