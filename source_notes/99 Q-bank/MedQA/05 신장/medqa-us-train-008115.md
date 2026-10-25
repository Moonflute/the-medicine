---
type: qbank
schema_version: 1
id: medqa-us-train-008115
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d37d584c2a8006664e433dcbeda78db3f7772c40fa51af338de06e4d6f51080
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "end-stage renal disease"
  - "living donor kidney transplant"
  - "renal replacement therapy"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
curation_status: "revised"
curation_reason: "생체 신장이식의 우위를 이식 적합성과 공여자 조건을 갖춘 경우로 한정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

45세 여성이 3개월 동안 악화된 피로, 식욕부진, 피부 가려움, 점점 심해지는 다리 부종으로 내원했다. 매일 물을 2~3 L 마시지만 소변은 소량만 본다. 제1형 당뇨병, 만성콩팥병, 고혈압, 당뇨병성 다발신경병증이 있다. 인슐린, 토라세미드, 리시노프릴, 합성 에리트로포이에틴을 복용한다. 창백하고 하지에 2+ 함요부종이 있다. 혈액검사에서 헤모글로빈 11.4 g/dL, K⁺ 5.3 mEq/L, HCO₃⁻ 20 mEq/L, BUN 85 mg/dL, 크레아티닌 8 mg/dL, pH 7.25이다. 삶의 질과 생존을 가장 잘 향상시킬 장기 치료는?

## 선택지

A. 사체 신장이식
B. 수분 제한
C. 생체 공여 신장이식
D. 복막투석

## 해설

이식 적합 환자이고 적절한 생체 공여자가 있다면 생체 신장이식은 대기 시간을 줄이고 장기 예후·삶의 질 측면에서 선호되는 신대체요법이다. 모든 말기 신부전 환자에게 즉시 가능한 것은 아니다. 이 환자의 요독 증상·산증·체액 과다는 즉시 평가하고 이식 준비 중 필요하면 투석 등 안정화 치료를 시행한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008115

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 생체 신장이식의 우위를 이식 적합성과 공여자 조건을 갖춘 경우로 한정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://doi.org/10.1097/TP.0000000000003136
