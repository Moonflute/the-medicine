---
type: qbank
schema_version: 1
id: medqa-us-train-009479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ce3503ed5035e18d635771c44eebdb19f207d6138091c5746c382b078a55805
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "HIV-associated nephropathy"
  - "HIV 관련 신병증"
  - "focal segmental glomerulosclerosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-q1reyGjCDthqDrpqzqtbPsnYzspp0gKEZvY2FsIFNlZ21lbnRhbCBHbG9tZXJ1bG9zY2xlcm9zaXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "정답 B와 모순되게 crescent를 FSGS 특징으로 설명한 핵심 오류 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

조절되지 않은 HIV 감염이 있는 35세 남성에게 심한 단백뇨와 빠른 신기능 저하가 생겼다. 신장 생검에서 허탈형 국소분절 사구체경화증이 확인돼 HIV 관련 신병증으로 진단됐다. 신장질환 진행을 막는 치료의 핵심은?

## 선택지

A. 항레트로바이러스 치료를 보류하고 스테로이드 단독 투여
B. 신기능에 맞춰 효과적인 항레트로바이러스 치료를 시작한다
C. 소변이 맑아질 때까지 유지 약물을 모두 중단한다
D. 단백뇨 감소를 위해 ACE 억제제와 ARB를 병용한다

## 해설

HIV 관련 신병증에서는 항레트로바이러스 치료가 바이러스 억제와 신기능 보존의 핵심이다. 신기능에 맞는 요법을 선택하고 혈압과 단백뇨도 관리한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009479
- https://www.idsociety.org/practice-guideline/chronic-kidney-disease-in-hiv/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 정답 B와 모순되게 crescent를 FSGS 특징으로 설명한 핵심 오류 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
