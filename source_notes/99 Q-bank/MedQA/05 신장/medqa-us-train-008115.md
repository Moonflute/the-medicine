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
answer: C
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

45세 여성이 진행성 만성콩팥병으로 추적 중이다. eGFR은 14 mL/min/1.73m²이고 6~12개월 안에 신대체요법이 예상되나 지금은 긴급 투석 적응증이 없다. 환자가 이식을 원하고 생체 공여 희망자가 있다. 적절한 계획은?

## 선택지

A. 투석을 최소 2년 한 뒤에만 이식 평가를 한다
B. 증상이 없으므로 이식과 투석 교육을 모두 미룬다
C. 생체 신장이식 평가를 지금 의뢰하고 필요 시 투석 계획도 함께 세운다
D. 이식 평가 없이 수액 제한만 한다

## 해설

이식 적합성을 조기에 평가하면 생체 공여자 검사를 거쳐 투석 전 이식도 고려할 수 있다. 평가 중 요독 합병증이나 불응성 체액·전해질 이상이 발생하면 필요한 투석을 늦추지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008115
- https://kdigo.org/guidelines/transplant-candidate/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 생체 신장이식의 우위를 이식 적합성과 공여자 조건을 갖춘 경우로 한정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://doi.org/10.1097/TP.0000000000003136
