---
type: qbank
schema_version: 1
id: medqa-us-test-000356
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:dc99c2406569ae9a4795ac1beab5681cad80167b6ce78eaf7d7ffc1772716641
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "산전 선별검사"
  - "주산기 감염"
  - "HIV·매독·B형간염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: prevention
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 임신 감염 선별 조합에 HCV를 반영."
curation_status: "revised"
curation_reason: "임신 감염 선별 조합에 HCV를 반영."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

32세 여성이 집에서 시행한 임신검사 양성 후 산부인과를 방문했다. 부부는 3개월 동안 임신을 시도해 왔다. 성매개감염, 정맥주사 약물 사용, 수혈 병력은 없고 미국 밖으로 여행한 적도 없다. 임신 전 예방접종은 모두 최신이었다. 초음파에서 임신 8주에 해당하는 임신낭이 보였다. 태아 건강을 해치고 싶지 않지만 가능한 한 적은 검사를 원한다. 다음 중 모든 임산부에게 시행해야 하는 선별검사는?

## 선택지

A. HIV, 매독, B형간염, C형간염
B. HIV, 매독, 임질균
C. HIV, B형간염, C형간염
D. HIV, 매독, B형간염, 임질균, 클라미디아

## 해설

노출 위험을 부인해도 임신마다 HIV·매독·HBV·HCV 선별을 권고한다. Gonorrhea와 Chlamydia는 나이·위험요인에 따른 선별 기준을 적용한다. 예방접종 완료 여부나 최근 성생활 여부만으로 기본 감염 선별을 생략하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 임신 감염 선별 조합에 HCV를 반영.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/pregnancy-hiv-std-tb-hepatitis/php/screening/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000356

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
