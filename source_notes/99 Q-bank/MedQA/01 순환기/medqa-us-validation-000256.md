---
type: qbank
schema_version: 1
id: medqa-us-validation-000256
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:560527fcc9572c6f5f0fc6d2c723105394f67755aa27902693fb483a4424719f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장압전"
  - "심낭삼출"
  - "맥박 역설"
  - "Cardiac tamponade"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: investigation
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

유방암 치료를 받은 49세 여성이 심한 호흡곤란으로 내원했다. 혈압 85/50 mmHg, 맥박 110회/분이다. 심음이 작고 경정맥이 팽창했으며, 흡기 때 요골 맥박이 약해진다. 폐 청진은 깨끗하다. 가장 가능성 높은 심초음파 소견은?

## 선택지

A. 비후한 좌심실과 수축기 좌심실 유출로 폐쇄
B. 심낭삼출과 우심실 자유벽의 이완기 함몰
C. 우심실 확장과 심실중격의 편평화
D. 미만성 좌심실 수축력 저하와 좌심실 확장

## 해설

저혈압, 경정맥 팽창, 작은 심음, 흡기 때 맥박 약화는 심장눌림증을 시사한다. 심초음파의 심낭삼출과 우심실 자유벽 이완기 함몰이 이를 뒷받침한다. 혈역학적 불안정이 지속되면 응급 배액을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 임상 심낭압전 B는 지지하지만 누락 X선의 심장 음영을 실제 판독한 듯한 표현을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000256
