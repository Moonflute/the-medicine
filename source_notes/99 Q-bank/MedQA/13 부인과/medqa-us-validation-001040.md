---
type: qbank
schema_version: 1
id: medqa-us-validation-001040
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5069832f868fd79087ad5e59291f8d848cad0a25838a7006fc71b104205d8d0d
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부 상피내종양 3등급"
  - "고등급 편평상피내병변"
  - "질확대경검사"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: CIN3를 임신 계획만으로 관찰하도록 한 선택지 교정."
curation_status: "revised"
curation_reason: "CIN3를 임신 계획만으로 관찰하도록 한 선택지 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

27세 여성이 임신을 계획한다. 현재 임신 중은 아니며, 질확대경 생검에서 침윤 소견 없이 CIN3가 확인됐다. 처치는?

## 선택지

A. 향후 임신 영향을 상담하고 원추절제 등 자궁경부 절제 치료를 시행
B. 임신을 계획하므로 6개월마다 검사만 하며 관찰
C. HPV 검사 음성이 나올 때까지 치료 보류
D. 임신 전 자궁절제술을 우선 시행

## 해설

임신 중이 아닌 CIN3는 관찰 대신 치료한다. 자궁경부 절제 범위와 향후 임신에 미칠 영향을 상담하며, 임신을 계획한다는 이유만으로 치료를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: CIN3를 임신 계획만으로 관찰하도록 한 선택지 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001040

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
