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
answer: "C"
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

12세 남아가 3일간 지속된 거품 섞인 갈색 소변으로 내원했다. 다른 증상은 호소하지 않는다. 3주 전 발열과 인후통이 있었지만 당시 치료받지 않았다고 한다. 혈압은 152/94 mmHg, 심박수는 분당 72회, 호흡수는 분당 15회, 체온은 37.0°C이다. 4주 전 혈압은 118/74 mmHg였다. 검사에서 혈청 크레아티닌 상승, 적혈구 원주를 동반한 혈뇨, 현성 단백뇨는 없지만 증가한 요단백이 관찰된다. 이 환자에서 가장 가능성 높은 진단의 선행 감염을 뒷받침하는 검사실 검사는?

## 선택지

A. 소변 그람 염색
B. 소변 카테콜아민 측정
C. 항연쇄상구균 용혈소 O(ASO) 역가
D. 대변 검체 검사

## 해설

인두 감염 수 주 뒤의 사구체성 혈뇨·고혈압·신기능 저하에서 PSGN을 의심한다. ASO는 최근 선행 연쇄상구균 감염을 뒷받침하는 검사로 선택지 중 적합하다. ASO 양성만으로 신염을 확진하지 않으며 임상 소견·C3 등과 종합한다. 피부 감염 뒤에는 anti-DNase B가 더 유용할 수 있다.

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
