---
type: qbank
schema_version: 1
id: medqa-us-test-000968
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:143f0905d0a5ac841c2fc045589baa8a5ed6ca7d95f308d90908ca9f2c6887a7
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "주상골 골절"
  - "잠복 골절"
  - "엄지 스피카 석고"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yjvOyDgeqzqCDqs6jsoIggKFNjYXBob2lkIEZyYWN0dXJlKS5tZA
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOygiCDstJ3roaAgKEZyYWN0dXJlIEdlbmVyYWwgUHJpbmNpcGxlcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

손을 짚고 넘어진 20세 환자의 해부학적 코담배갑에 심한 압통이 있다. 주상골용 X선에서 골절은 보이지 않지만 의심이 높고 MRI를 바로 시행할 수 있다. 적절한 조치는?

## 선택지

A. 고정하지 말고 평소대로 사용한다
B. 손목을 보호 고정하고 조기 손목 MRI를 한다
C. 손목 관절강 안에 스테로이드를 주사한다
D. 초음파가 정상이면 골절을 배제한다

## 해설

코담배갑 압통이 있으면 초기 X선이 정상이더라도 잠복 주상골 골절을 고려한다. 보호 고정 후 MRI로 확인하거나 접근이 어려우면 일정 기간 뒤 재촬영한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 잠복 주상골골절 의심 시 고정·추적 B는 맞고 2주 재촬영 목적을 치유 확인만으로 한정한 오류를 교정한다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/fractures/Scaphoid_Fractures_%E2%80%93_Emergency_Management/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000968
- https://acsearch.acr.org/docs/69418/Narrative/
