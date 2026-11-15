---
type: qbank
schema_version: 1
id: medqa-us-train-004926
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7f05bdfe70fef388f948613b878eb1c36751423c114f093c8d82cfc1a9c10a7
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "족근관증후군"
  - "경골신경 포착"
  - "발바닥 감각이상"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-unkOy0iOyLoOqyvSDshpDsg4EubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 오래 걸으면 발바닥이 타듯 아프고 저리다. 발목 안쪽 복사뼈 뒤를 두드리면 저림이 발바닥으로 퍼진다. 가장 가능성 높은 진단은?

## 선택지

A. 족근관증후군
B. 족저근막염
C. 총비골신경병증
D. 모튼 신경종

## 해설

안쪽 복사뼈 뒤 족근관에서 경골신경이 눌리면 발바닥 전체 또는 일부에 저림과 작열통이 생길 수 있다. 족저근막염은 감각 이상보다 발꿈치 부착부 통증이 주된 증상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 족근신경이라는 불명확한 용어와 감각만 손상된다는 일반화를 경골신경 압박의 해부학으로 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004926
