---
type: qbank
schema_version: 1
id: medqa-us-train-006243
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0dc53e30bfaf0872a905981a3a180d7011c7baa92e7cd76035489bc9a14576f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "원위 신세뇨관 산증"
  - "정상 음이온차 대사성 산증"
  - "수소 이온 분비 장애"
  - "Distal renal tubular acidosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2MpeyEuOq0gCDsgrDspp0gMe2YlSAoUmVuYWwgVHVidWxhciBBY2lkb3NpcyBUeXBlIDEpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "양이온 차 오역을 음이온차로 고치고 산증인데 높은 요 pH라는 결정 단서를 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

3개월 영아가 성장 부진으로 내원했다. 반복 검사에서 정상 음이온차 대사성 산증과 K 3.0 mmol/L가 확인됐다. 설사는 없고 요배양은 음성이다. 혈액이 산성인데도 소변 pH는 6.9이고 신장 초음파에서 석회화가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 제4형 신세뇨관산증
B. 설사에 의한 중탄산염 소실
C. 제1형 원위 신세뇨관산증
D. 당뇨병성 케톤산증

## 해설

전신 산증에도 소변을 적절히 산성화하지 못하는 소견, 저칼륨혈증, 신장 석회화는 원위 신세뇨관산증에 맞는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006243
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7889554/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 양이온 차 오역을 음이온차로 고치고 산증인데 높은 요 pH라는 결정 단서를 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
