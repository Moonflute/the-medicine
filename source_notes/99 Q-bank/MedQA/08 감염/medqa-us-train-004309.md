---
type: qbank
schema_version: 1
id: medqa-us-train-004309
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce23c4a70885b9fbf342e4aace3b454ec10f8009571460b8f7723b4ce9c5f34c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "만성 C형 간염"
  - "가교성 간섬유화"
  - "HCV RNA"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 구형 interferon 요법을 DAA 기반 HCV 치료로 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvTGFtaXZ1ZGluZS5tZA
curation_status: "revised"
curation_reason: "구형 interferon 요법을 DAA 기반 HCV 치료로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

HCV RNA 양성인 환자에게 복수와 간성뇌증 병력이 있고, 현재 Child-Pugh B 간경변으로 평가됐다. C형간염 치료를 계획할 때 피해야 하는 조합은?

## 선택지

A. 글레카프레비르/피브렌타스비르
B. 소포스부비르/벨파타스비르
C. 소포스부비르/벨파타스비르에 리바비린 추가
D. 소포스부비르/레디파스비르에 리바비린 추가

## 해설

비대상성 간경변에서는 글레카프레비르 등 NS3/4A 단백분해효소 억제제가 들어간 요법을 피한다. 가능한 치료 조합과 기간은 이전 치료력과 리바비린 사용 가능 여부를 확인해 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 구형 interferon 요법을 DAA 기반 HCV 치료로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.hcvguidelines.org/guidance/initial-treatment-of-adults-with-hcv-infection/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004309
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12835810/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
