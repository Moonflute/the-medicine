---
type: qbank
schema_version: 1
id: medqa-us-train-005498
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a7f6764b52dd88b95fabb1d02db0fad2c86d40d339827c86298f5832d03af57
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요독성 심낭염"
  - "혈액투석 누락"
  - "심낭 마찰음"
  - "Uremic pericarditis"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "장기 투석자의 투석 누락에 따른 요독성/투석 관련 심낭염을 과도한 빈도 단정 없이 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

혈액투석을 두 차례 받지 못한 52세 여성이 몸을 앞으로 숙이면 줄어드는 흉통으로 왔다. 심낭 마찰음이 들리고 심초음파에서 소량의 심낭액은 있으나 압전은 없다. 감염이나 다른 뚜렷한 원인이 없을 때 적절한 다음 대책은?

## 선택지

A. 투석을 일주일 중단한다
B. 바로 심낭 배액만 시행한다
C. 경구 콜히친 단독으로 치료하고 투석 일정은 바꾸지 않는다
D. 신장내과와 긴급히 투석을 재개·강화한다

## 해설

투석이 불충분한 상황에서 발생한 심낭염에는 투석 재개·강화가 중요하다. 임상 상태와 심낭액을 추적하며 압전이 발생하면 즉시 배액이 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005498
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10103325/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 장기 투석자의 투석 누락에 따른 요독성/투석 관련 심낭염을 과도한 빈도 단정 없이 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
