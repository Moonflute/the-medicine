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

다발성경화증이 있는 32세 여성이 배뇨 중 소변줄기가 자주 끊기고 잔뇨가 많다. 요역동학검사에서 배뇨근이 수축할 때 외요도괄약근도 수축한다. 이 소견을 무엇이라고 하는가?

## 선택지

A. 방광질 누공
B. 배뇨근-괄약근 부조화
C. 복압성 요실금
D. 배뇨근 무수축

## 해설

정상적으로 배뇨근이 수축할 때 외요도괄약근은 이완한다. 중추신경 손상으로 둘이 함께 수축하면 배뇨가 끊기고 잔뇨가 남을 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 배뇨근-괄약근 부조화를 신경학적 탈위축이라고 설명한 비표준 기전을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003844
