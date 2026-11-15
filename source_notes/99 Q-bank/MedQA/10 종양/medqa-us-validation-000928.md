---
type: qbank
schema_version: 1
id: medqa-us-validation-000928
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:42cac8d9551ff323a6aee2242a528692f51efa50463d54302b449a9a6504f232
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "항문암"
  - "HIV 감염"
  - "방사선화학요법"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tla3rrLjslZQgKEFuYWwgQ2FuY2VyKS5tZA
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: complex
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

42세 남성이 항레트로바이러스 치료를 받고 있다. 항문관의 3 cm 종괴가 생검에서 편평세포암으로 확인됐다. 원격·림프절 전이는 없고 전신 상태는 양호하다. 표준 근치치료는?

## 선택지

A. 항문관 종괴 국소 절제
B. 복회음절제술
C. 동시 항암방사선치료
D. 항암화학요법 단독

## 해설


국소 항문관 편평세포암의 표준 근치치료는 괄약근을 보존하는 동시 항암방사선치료다. HIV 감염만으로 일차 수술을 선택하지 않으며 면역 상태와 치료 독성을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000928 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항문관 SCC의 항암방사선 A 유지. HIV 자체가 무조건 치료를 바꾼다는 일반화 교정; 원문 CD4·ART는 해설에 복원.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/anal/hp/anal-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000928
- https://pubmed.ncbi.nlm.nih.gov/39680825/
- https://www.astro.org/provider-resources/guidelines/clinical-practice-guidelines/anal-cancer-guideline
