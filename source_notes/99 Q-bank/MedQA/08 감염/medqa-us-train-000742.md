---
type: qbank
schema_version: 1
id: medqa-us-train-000742
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc5817857320dd6541dbb8df104500f1cf53c9e3d9def4e9b40f280ed93b876c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "splenic laceration"
  - "splenectomy"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA
question_type: management
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "withheld"
publication_reason: "직접 재검수 후 복구: 비장절제 후 접종을 고정 PCV13에서 접종력 기반 현행 백신으로 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "비장절제 후 접종을 고정 PCV13에서 접종력 기반 현행 백신으로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

29세 남성이 교통사고로 응급 비장절제술을 받은 뒤 외래에 왔다. 폐렴구균 백신 접종력은 없다. 다른 무비증 관련 예방접종도 함께 평가하는 상황에서, 폐렴구균 접종으로 적절한 것은?

## 선택지

A. PCV20을 1회 접종한다
B. PCV20을 1회 접종한 뒤 PPSV23을 반드시 추가한다
C. 65세가 될 때까지 폐렴구균 백신을 미룬다
D. 폐렴구균 백신을 매년 접종한다

## 해설

해부학적 무비증은 침습성 폐렴구균 감염 위험을 높인다. 대한감염학회 2026년 권고에서 미접종 고위험 성인의 선택지는 PCV20 또는 PCV21 1회, 혹은 PCV15 후 PPSV23 순차 접종이다. PCV20을 선택한 경우 PPSV23을 반드시 덧붙이지 않는다. 수막구균·Hib 등 다른 무비증 관련 접종은 별도로 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 비장절제 후 접종을 고정 PCV13에서 접종력 기반 현행 백신으로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/pneumococcal/vaccines/adults.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000742
- 대한감염학회 성인 폐렴구균 예방접종 권고(2026): https://icjournal.org/DOIx.php?id=10.3947%2Fic.2026.0063

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
