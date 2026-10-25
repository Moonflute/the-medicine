---
type: qbank
schema_version: 1
id: medqa-us-test-001180
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:853eece385da4236ed37e565e98f68496d0666616856fbc9d055de7e1224beab
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "척수공동증"
  - "중심척수 손상"
  - "상지 감각운동 저하"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHsi6wg7LKZ7IiYIOymne2bhOq1sCAoQ2VudHJhbCBjb3JkIHN5bmRyb21lKS5tZA
difficulty: complex
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

17세 남성이 교통사고 후 응급실에 왔다. 안전벨트를 매지 않은 정면 충돌이었고 특별한 골절 없이 퇴원했지만 4개월 후 상지 근력저하와 감각저하가 생겼다. 상지 근력은 1/5, 하지 근력과 감각은 정상이었다. 가장 가능성 높은 진단은?

## 선택지

A. 경추 골절
B. 두개내 출혈
C. 척수공동증
D. 전환장애

## 해설

정답은 C, 척수공동증이다. 외상 직후가 아니라 4개월 후 진행한 상지의 심한 근력·감각저하와 상대적으로 보존된 하지 기능은 외상 후 형성된 척수공동을 고려하게 한다. 급성 중앙척수증후군과 같은 뜻이 아니며, 모든 외상 후 상지 약화의 가장 흔한 원인이라고 단정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상4개월 뒤 진행 상지결손은 외상후 척수공동증을 지지하나 외상 직후 중앙척수손상과 혼동하거나 가장 흔한 원인이라 단정하지 않도록 정정.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/syringomyelia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001180
