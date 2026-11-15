---
type: qbank
schema_version: 1
id: medqa-us-train-006912
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:729d77745da9e6cdde73cc56295ecaaac32ab9d072dedd016fd3b86de14ff781
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "척추 골절"
  - "외상성 요통"
  - "기능성 증상 감별"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOygiCDstJ3roaAgKEZyYWN0dXJlIEdlbmVyYWwgUHJpbmNpcGxlcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

강직척추염으로 척추가 굳은 환자가 가벼운 교통사고 뒤 갑자기 심한 허리 통증과 정중선 압통을 호소한다. 팔다리 힘은 정상이다. 가장 적절한 조치는?

## 선택지

A. 척추를 보호하고 골절 평가를 위해 CT를 한다
B. 정상 근력이므로 바로 도수 교정을 한다
C. 통증이 가라앉을 때까지 집에서 지켜본다
D. 강직척추염 약을 증량하고 영상은 생략한다

## 해설

강직된 척추는 낮은 에너지 외상에도 불안정 골절이 생길 수 있다. 정상 신경 진찰로 배제하지 말고 척추를 보호하며 CT로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 시속 11마일 추돌을 고에너지 외상으로 바꾼 해설을 삭제하고 기존 염증성 요통에 의한 강직 척추 가능성과 골절 위험을 설명했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006912
