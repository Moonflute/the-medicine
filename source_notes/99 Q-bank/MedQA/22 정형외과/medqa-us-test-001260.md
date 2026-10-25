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

15세 남아가 자전거에서 넘어져 오른쪽 어깨의 심한 통증과 쇄골 부종으로 응급실에 왔다. 쇄골 위 피부는 온전하고 요골맥박과 감각은 정상이었다. 흉부 X선이 제시되어 있다. 가장 적절한 처치는?

## 선택지

A. 긴장대 고정술
B. 간단한 어깨걸이
C. 오른쪽 어깨 MRI
D. 동맥조영술

## 해설

쇄골 부위 외상·국소 통증과 종창이 있고 피부가 온전하며 신경혈관 이상이 없어 선지 중 단순 sling(B)이 합리적인 초기 안정화이다. 실제 X선이 이 텍스트에 포함되지 않았으므로 전위·단축·정확한 골절 위치를 확인했다고 주장하지 않는다. 영상 분류 및 피부·신경혈관 상태에 따라 최종 치료가 달라질 수 있다. 본문에 없는 골절 형태를 만들어 넣지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 폐쇄성 쇄골 외상에 sling B가 적절한 초기 안정화이나 원문에 없는 X선 판독을 한국어가 만들어낸 부분을 되돌리고 모든 형태가 단순 골절이라고 단정하지 않는다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/clavicle-fracture-broken-collarbone/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001260
