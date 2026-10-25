---
type: qbank
schema_version: 1
id: medqa-us-train-004929
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b1bc43e3c7d9402a0f39d097d62fad32d32b7554db121965ae4874fe6cfef6c6
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "장경인대 증후군"
  - "외측 무릎 통증"
  - "오버 테스트"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-2MlOq_iOy5mCDsmbjsuKEg7IOB6rO87Je8IChMYXRlcmFsIEVwaWNvbmR5bGl0aXMpLm1k
difficulty: standard
answer: A
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

28세 여자가 오늘 아침부터 시작된 외측 무릎 통증으로 응급실에 왔다. 대학 농구 선수이며 무릎을 비튼 뒤 통증이 시작되었다. 오른쪽 외측 무릎에 압통이 있고, 왼쪽으로 누워 오른쪽 고관절을 펴고 벌리면 다리가 매끄럽게 내려가지 않으며 모으면 불편하다. 가장 가능성 높은 진단은?

## 선택지

A. 장경인대 증후군
B. 외측측부인대 손상
C. 근골격계 염좌
D. 거위발 윤활낭염

## 해설

외측 무릎 압통과 옆으로 누운 상태에서 고관절을 신전·외전했다가 내릴 때 내전이 제한되고 불편한 Ober 검사 양상은 장경인대 긴장을 시사한다. 외측 대퇴골 상과 부위의 장경인대 관련 통증인 장경인대 증후군(A)이 주어진 선지 중 가장 합당하다. 이는 슬개골 하부 마찰이나 거위발 부위의 내측 통증과는 다르며, 외측곁인대 손상에서는 내반 스트레스 불안정성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Ober 검사를 무릎 외전으로 잘못 설명하고 마찰 위치를 슬개골 하부로 잘못 기재한 해설을 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004929
