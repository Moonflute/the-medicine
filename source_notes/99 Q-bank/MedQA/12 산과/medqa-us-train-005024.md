---
type: qbank
schema_version: 1
id: medqa-us-train-005024
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff66ba7f952e675a904caa40b94e619fc52a21a67abcc9ab53f32dcff07d43b7
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "항인지질증후군"
  - "재발성 자연유산"
  - "임신 중 저분자량 헤파린"
question_type: management
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 8주 산모가 반복 초기 유산과 지속적인 항인지질항체 양성으로 산과적 항인지질증후군을 진단받았다. 본인에게 혈전증 병력은 없다. 임신 중 권고되는 조합은?

## 선택지

A. 치료 용량 와파린과 아스피린
B. 저용량 아스피린 단독
C. 저용량 아스피린과 예방 용량 저분자량 헤파린
D. 매일 고용량 스테로이드 단독

## 해설

혈전 병력이 없는 산과적 항인지질증후군에는 저용량 아스피린과 예방 용량 헤파린을 병용한다. 과거 혈전증이 있는 항인지질증후군에서 필요한 치료 용량과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: aPL 직접검사 양성은 본문에 없으며 APS 의심과 병합치료 범위를 구분.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/art.41191

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005024
- https://doi.org/10.1002/acr.24130
