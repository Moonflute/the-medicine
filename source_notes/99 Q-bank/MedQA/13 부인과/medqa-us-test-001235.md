---
type: qbank
schema_version: 1
id: medqa-us-test-001235
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ef7276ec3d3dd5ad9337c82c92013d857882563f440f104b472c7d61eeede20a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "바르톨린선 농양"
  - "소음순 종괴"
  - "절개배농"
  - "Bartholin gland abscess"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 앉기 힘들 정도로 아픈 질 입구 한쪽의 부종으로 내원했다. 바르톨린샘 부위에 파동과 압통이 있다. 처음 생긴 농양이며 전신 상태는 안정적이다. 재발을 줄이면서 배농할 방법은?

## 선택지

A. 전신 증상이 없어도 항생제만으로 치료한다
B. 표면 병변을 냉동치료한다
C. 절개·배액 뒤 워드 카테터로 배액 통로를 유지한다
D. 첫 농양에서 바르톨린샘 전체를 일률적으로 절제한다

## 해설

바르톨린샘 농양은 통증을 줄이기 위해 배농한다. 워드 카테터는 통로가 너무 일찍 닫히는 것을 막는 방법이다. 주위 봉와직염이나 전신 감염이 있으면 항생제를 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단순 절개배농의 재발 문제 및 배액로 유지 보강.
- https://www-preview.rcog.org.uk/for-the-public/browse-our-patient-information/bartholin-s-cyst-and-abscess/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001235
- https://rightdecisions.scot.nhs.uk/ggc-referral-management/womens-health/gynaecology-clinical-guidelines/management-of-bartholin-s-cyst-and-abscess-gynaecology-066/
- https://pubmed.ncbi.nlm.nih.gov/27640367/
