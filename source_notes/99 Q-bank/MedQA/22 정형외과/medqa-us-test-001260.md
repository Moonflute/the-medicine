---
type: qbank
schema_version: 1
id: medqa-us-test-001260
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:fb854bc3436ac7cb46b12a6ae78343caffd55cd692aa2b94663103a68b870d41
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "쇄골 골절"
  - "소아 쇄골 골절"
  - "보존적 치료"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOygiCDstJ3roaAgKEZyYWN0dXJlIEdlbmVyYWwgUHJpbmNpcGxlcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 자전거에서 넘어져 오른쪽 쇄골 부위에 통증과 부종이 생겼다. X선에서 크게 어긋나지 않은 쇄골 골절을 확인했다. 피부 손상이나 신경혈관 이상은 없다. 초기 고정 방법은?

## 선택지

A. 긴장대 고정술
B. 간단한 어깨걸이
C. 오른쪽 어깨 MRI
D. 동맥조영술

## 해설

피부 손상과 신경혈관 이상이 없는 단순 쇄골 골절은 팔걸이로 고정하는 보존 치료가 적절하다. 전위나 단축 정도, 피부 압박 등에 따라 정형외과 치료가 달라질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 폐쇄성 쇄골 외상에 sling B가 적절한 초기 안정화이나 원문에 없는 X선 판독을 한국어가 만들어낸 부분을 되돌리고 모든 형태가 단순 골절이라고 단정하지 않는다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/clavicle-fracture-broken-collarbone/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001260
