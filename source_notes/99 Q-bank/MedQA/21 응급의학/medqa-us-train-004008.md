---
type: qbank
schema_version: 1
id: medqa-us-train-004008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33fe8d6d1bd8691cd7c021ac1ca6bb32aa1078e3ea2e799b69bb3c87e8800d7d
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "항콜린성 중독"
  - "항콜린성 증후군"
  - "요폐"
question_type: 임상증례 객관식
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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

67세 남성이 감기약 복용 뒤 몹시 혼란스러워졌다. 맥박이 빠르고 동공이 크며 피부와 입안은 마르고 장음이 적다. 이 독성 양상에서 함께 나타나기 쉬운 소견은?

## 선택지

A. 심한 침 분비
B. 땀이 많은 피부
C. 설사
D. 요폐

## 해설

항무스카린성 독성은 건조함, 산동, 섬망과 장운동 저하를 일으킨다. 배뇨근 수축도 약해져 요폐가 생길 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 항콜린성 요폐의 기전을 장관운동 억제로 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004008
