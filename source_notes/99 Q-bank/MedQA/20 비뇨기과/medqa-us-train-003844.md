---
type: qbank
schema_version: 1
id: medqa-us-train-003844
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b6b0f47f928722db96db4aee8af4058878ee9821766681bc6fb69b2c0615566
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "multiple sclerosis neurogenic bladder"
  - "detrusor sphincter dyssynergia"
  - "urinary incontinence"
  - "postvoid residual"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
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

다발성 경화증이 있는 32세 여성이 절박감 없이 소량의 소변이 새고 간헐적으로 소변줄기가 끊기는 증상으로 내원했다. 배뇨 후 잔뇨량은 131 mL였다. 다음 중 요실금의 가장 가능성 높은 원인은?

## 선택지

A. 인지기능 저하
B. 방광질 누공
C. 배뇨근-괄약근 부조화
D. 배뇨근 수축력 저하

## 해설

MS의 중추 신경경로 손상은 배뇨근이 수축하는 동안 외요도괄약근이 적절히 이완하지 못하는 배뇨근-괄약근 부조화 C를 일으킬 수 있다. 이로 인해 간헐적 요류, 불완전 배뇨와 잔뇨 증가·요 누출이 생긴다. 단순히 신경학적 탈위축이라고 부르거나 괄약근 자체의 구조적 결함으로 설명하는 것은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 배뇨근-괄약근 부조화를 신경학적 탈위축이라고 설명한 비표준 기전을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003844
