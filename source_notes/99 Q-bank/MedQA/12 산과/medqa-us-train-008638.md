---
type: qbank
schema_version: 1
id: medqa-us-train-008638
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:475eba4ee45dfa9cb7c070080b083bc2f0d2583dd345859067551ed9d662d0be
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "syphilis in pregnancy"
  - "false-positive VDRL"
  - "Treponema pallidum hemagglutination assay"
  - "Syphilis"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKcIOunpOuPhSAoQ29uZ2VuaXRhbCBTeXBoaWxpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 15주 산모에게 증상은 없지만 첫 산전 RPR 검사가 양성으로 나왔다. 매독 과거력이나 치료 기록은 없다. 혈청 검사 결과를 확인할 다음 검사는?

## 선택지

A. 정량 HIV RNA
B. 트레포네마 특이 항체검사(TPPA 등)
C. B형간염 표면항체 정량
D. RPR 양성을 위양성으로 간주하고 확인 생략

## 해설

RPR은 비트레포네마 검사이므로 트레포네마 특이 검사로 확인한다. 임신을 이유로 양성을 위양성으로 단정하지 않으며, 감염이 확인되면 병기와 이전 치료 여부에 맞춰 신속히 치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VDRL양성을 임신 위양성으로 먼저 단정한 해설 수정.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008638
- https://ulsancidc.or.kr/_Data/Board/ucidc_gl/a402a0dc2a72cd4dc6907f49b11a6c51.pdf
