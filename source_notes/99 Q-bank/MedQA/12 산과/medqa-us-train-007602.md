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
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
difficulty: simple
answer: "B"
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

27세 G1P0 여성이 첫 산전 진료를 위해 내원했다. 남편과 일부일처 관계이며 평생 성 파트너는 두 명이다. 수혈을 받은 적이 없고 주사 약물도 사용하지 않았다. 다음 중 어떤 감염을 선별검사하는 것이 가장 적절한가?

## 선택지

A. 매독과 HIV
B. 매독, HIV, B형간염, C형간염
C. 매독, HIV, B형간염, 클라미디아
D. 정기 선별검사는 필요 없다

## 해설

첫 산전 진료에서 위험요인이 없어도 HIV·매독·HBV·HCV를 선별한다. 성매개감염의 위험도에 따라 gonorrhea·Chlamydia 등의 검사를 추가하며, 검사 동의와 결과에 따른 치료·주산기 예방을 연결한다. 일부일처 관계라는 이유로 이 기본 검사를 생략하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 산전 보편 감염 선별에 HCV를 추가.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/pregnancy-hiv-std-tb-hepatitis/php/screening/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007602

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
