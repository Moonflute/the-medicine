---
type: qbank
schema_version: 1
id: medqa-us-train-009751
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:49c18f50ee23eb29a7568e92af16739213f2ffb6e336265d5159adc725f7f0b3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "연쇄상구균 감염 후 사구체신염"
  - "ASO 역가"
  - "혈뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
  - MDUg7Iug7J6lL-2YiOuHqC5tZA
question_type: investigation
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
curation_reason: "ASO 단독이 신염을 확진하거나 언제나 가장 민감하다는 과장 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

12세 남아가 인후통을 앓은 지 3주 뒤 콜라색 소변과 눈 주위 부종으로 내원했다. 혈압이 오르고 C3가 낮으며 소변에 적혈구 원주가 보인다. 선행 A군 연쇄상구균 인두염을 뒷받침할 검사는?

## 선택지

A. 소변 그람염색
B. 혈청 항핵항체
C. 혈청 항스트렙톨리신 O 역가
D. 혈청 항사구체기저막 항체

## 해설

인두염 수 주 뒤에 발생한 신염 소견과 낮은 C3는 감염 후 사구체신염을 시사한다. 항스트렙톨리신 O 역가가 상승하면 최근 연쇄상구균 감염을 뒷받침한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009751

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: ASO 단독이 신염을 확진하거나 언제나 가장 민감하다는 과장 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/post-streptococcal-glomerulonephritis.html
