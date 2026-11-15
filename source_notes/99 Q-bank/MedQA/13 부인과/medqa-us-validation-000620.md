---
type: qbank
schema_version: 1
id: medqa-us-validation-000620
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a77be443e616a961540032398f5c1f27fbfd1c4addc0ee6148e1e345af622b5d
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부 선암"
  - "침윤성 자궁경부암"
  - "변형 근치적 자궁절제술"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

가임력 보존을 원하지 않는 여성의 자궁경부 일반형 선암은 최대 1.5 cm, 기질 침윤 6 mm다. 림프혈관 침범이 없고 MRI에서 자궁경부에 국한돼 있으며 림프절은 의심되지 않는다. 림프절 평가를 포함해 수술 범위를 줄일 수 있는 선택은?

## 선택지

A. 림프절 평가 없이 원추절제만 시행
B. 림프절 평가 없이 자궁경부 병변만 소작
C. 골반 림프절 평가를 병행한 단순 자궁절제술
D. 자궁경부를 남긴 양측 난관난소절제술

## 해설

엄격한 저위험 소형 자궁경부암에서는 골반 림프절 평가를 병행한 단순 자궁절제술이 근치 수술의 대안이 될 수 있다. 종양 크기·침윤 깊이·조직형과 영상으로 대상자를 선별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 국한 자궁경부 선암의 수술 B는 유효한 보기다. 국소 침윤을 전이성으로 둔 오류를 교정하고 원문 종양 크기를 복원.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10176411/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000620
- https://www.nejm.org/doi/full/10.1056/NEJMoa2308900
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11790984/
