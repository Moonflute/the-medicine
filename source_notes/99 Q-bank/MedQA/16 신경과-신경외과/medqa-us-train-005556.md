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
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHsi6wg7LKZ7IiYIOymne2bhOq1sCAoQ2VudHJhbCBjb3JkIHN5bmRyb21lKS5tZA
difficulty: standard
answer: C
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

10세 아이의 양어깨와 팔에 망토 모양으로 통각과 온도감각이 감소했다. 같은 부위의 진동·위치감각은 정상이다. 이 감각해리를 가장 잘 설명하는 병변은?

## 선택지

A. 경수 후주만 침범한 병변
B. 일측 목 신경근 병변
C. 경수 중심부의 척수공동
D. 양측 말초 감각신경병증

## 해설

척수 중심에 공동이 생기면 앞백색맞교차에서 교차하는 통각·온도각 섬유를 먼저 침범할 수 있다. 경수 MRI로 확인하고 동반 키아리 기형 등을 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수공동증의 망토형 해리성 감각소실을 척수 전각 기형이라고 부른 해부학 오류를 수정했다. 연관 질환 A는 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005556
- https://www.ninds.nih.gov/health-information/disorders/syringomyelia
