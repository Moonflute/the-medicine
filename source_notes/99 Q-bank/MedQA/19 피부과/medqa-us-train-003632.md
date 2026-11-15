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
answer: D
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

30세 여성의 두피에 경계가 뚜렷한 붉은 인설성 판이 반복됐다. 병변 중앙에 위축과 색소 변화가 남고 모낭 입구가 사라진 채 탈모가 진행된다. 가장 가능성 높은 진단은?

## 선택지

A. 원형탈모증
B. 발모벽
C. 안드로겐 탈모증
D. 원반형 피부루푸스

## 해설

인설성 염증 판이 가라앉은 자리에 위축·색소 변화와 흉터성 탈모가 남으면 원반형 피부루푸스를 의심한다. 전신 증상이 있다면 동반 전신성 루푸스도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 흉터성 인설성 두피 탈모의 DLE B를 유지하고 본문에 없는 광과민성 발진을 관찰된 소견처럼 제시한 설명을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003632
