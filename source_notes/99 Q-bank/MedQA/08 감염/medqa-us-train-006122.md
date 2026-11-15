---
type: qbank
schema_version: 1
id: medqa-us-train-006122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c5bc44f520cd1295301198ad73fa2466b95e50c21d24cac5c824a3fc132073c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "만성 C형간염"
  - "포르피리아 피부근육증"
  - "HCV RNA PCR"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4년 전 C형간염을 치료한 환자에서 건강검진 항-HCV가 다시 양성이다. 새로운 노출이 있어 현재 감염 여부를 확인하려 한다. 다음 검사는?

## 선택지

A. 혈청 HCV RNA
B. 항-HCV 반복검사
C. HCV 유전자형부터 확인
D. 간 탄성도 검사

## 해설


항-HCV는 치료로 완치된 뒤에도 양성으로 남을 수 있다. 현재 감염 또는 재감염 여부는 HCV RNA로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006122 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-HCV 양성을 오직 과거감염으로 설명한 오류 교정; RNA B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006122
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12835810/
