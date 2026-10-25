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
answer: "B"
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

27세 미산부 여성이 자궁경부암 선별검사 결과 상담을 위해 산부인과에 왔다. 최근 자궁경부 생검에서 자궁경부 변환대의 CIN 3가 확인되었고 임신을 계획하고 있다. 이 환자 관리에 관한 올바른 설명은?

## 선택지

A. CIN 3의 암 진행률이 연간 10%를 초과하므로 가능한 한 빨리 치료해야 한다
B. 임신 계획과 향후 임신 영향을 상담하면서 CIN3에 대한 적절한 치료를 시행한다
C. 추가 HPV 검사가 치료 방향을 정하는 데 유용하다
D. 고등급 자궁경부 병변 여성은 임신을 권장하지 않으므로 치료가 합리적이다

## 해설

현재 임신 중이 아닌 환자의 조직학적 CIN3는 치료가 권고되며 임신 계획만으로 관찰하지 않는다. 절제 치료 등 적절한 방법과 향후 임신에 대한 영향을 상담해 결정한다. CIN2의 선택적 관찰 기준과 구분하며, 연간 암 진행률이 무조건 10%를 넘는다거나 임신 자체를 금지한다는 설명은 부정확하다.

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
