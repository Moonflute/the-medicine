---
type: qbank
schema_version: 1
id: medqa-us-train-007602
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5a41302b3f163bee4fd2fd9bdca6ef38f7c7a383578386472af4cdb1ecebad3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "산전 감염 선별"
  - "매독"
  - "HIV"
  - "B형간염"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 산전 보편 감염 선별에 HCV를 추가."
curation_status: "revised"
curation_reason: "산전 보편 감염 선별에 HCV를 추가."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

임신 26주 산모가 첫 산전 검사에서 B형간염 표면항원 양성으로 확인됐다. ALT는 정상이나 HBV DNA는 1,000,000 IU/mL다. 신생아 예방접종과 면역글로불린을 계획 중이다. 모자감염을 더 줄이기 위한 산모의 조치는?

## 선택지

A. 간효소가 정상이므로 산모 치료는 분만 이후까지 미룬다
B. 임신 중 인터페론을 시작한다
C. 산모에게 B형간염 백신을 다시 접종해 바이러스량을 낮춘다
D. 지금 테노포비르 계열 항바이러스 예방치료를 시작한다

## 해설

대한간학회는 임신부의 HBV DNA가 200,000 IU/mL 이상이면 모자감염 예방을 위해 임신 24–32주에 항바이러스 치료를 시작하도록 권고한다. 테노포비르는 신생아의 출생 직후 예방접종과 면역글로불린을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 산전 보편 감염 선별에 HCV를 추가.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/pregnancy-hiv-std-tb-hepatitis/php/screening/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007602
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13430407/
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=133&menuLv=1

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
