---
type: qbank
schema_version: 1
id: medqa-us-train-005556
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d927c3a3c1437d7f02b7cc5455f722c9722b088f4d08a1c24b8867533b9a7a4a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "척수공동증"
  - "아놀드-키아리 기형"
  - "해리성 감각소실"
  - "Arnold-Chiari malformation"
question_type: association
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHsi6wg7LKZ7IiYIOymne2bhOq1sCAoQ2VudHJhbCBjb3JkIHN5bmRyb21lKS5tZA
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

10세 남아가 뜨거운 커피가 왼쪽 어깨에 쏟아졌지만 통증을 느끼지 못했다. 양쪽 어깨, 팔과 목에 걸친 망토 모양의 통각과 온도감각 소실, 보존된 촉각·진동·위치감각이 있다. 다음 중 이 상태와 가장 관련된 질환은?

## 선택지

A. 아놀드-키아리 기형
B. 나병
C. 잠재성 척추이분증
D. 횡단척수염

## 해설

양측 어깨·팔의 망토형 통각·온도 소실과 보존된 진동·위치감각은 경수 척수공동증을 시사한다. 중심부 공동이 앞백색맞교차에서 교차하는 통각·온도 섬유를 손상시키고 초기에는 후주를 보존하여 해리성 감각소실을 만든다. Chiari 기형(A)은 척수공동증의 중요한 연관 질환이며 단순 척수 전각 기형의 다른 이름이 아니다. 더 커진 공동은 전각 등 다른 구조에도 영향을 줄 수 있으나 현재 근력은 정상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수공동증의 망토형 해리성 감각소실을 척수 전각 기형이라고 부른 해부학 오류를 수정했다. 연관 질환 A는 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005556
