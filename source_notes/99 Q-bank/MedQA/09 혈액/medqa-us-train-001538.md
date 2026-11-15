---
type: qbank
schema_version: 1
id: medqa-us-train-001538
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2992814fdf39bb531b3f5b3475b118c73e46f64bda88dc41e62708b62173b2a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "anemia"
  - "iron deficiency anemia"
  - "reticulocyte count"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
---

# MedQA US 임상문제

## 문제

출혈 증상 없이 피로로 내원한 환자의 혈색소는 9.4g/dL, MCV는 87fL이다. 정구성 빈혈에서 골수의 적혈구 생성 반응이 충분한지 판단하는 데 먼저 도움 되는 검사는?

## 선택지

A. 망상적혈구 수와 빈혈 정도를 반영한 보정
B. 혈색소 전기영동만 시행
C. 혈청 엽산 단독 측정
D. 단순 복부 X선

## 해설


빈혈이 있을 때 망상적혈구가 충분히 증가하면 출혈·용혈 등 적혈구 소실을, 낮거나 부적절하게 정상이면 생성 저하를 고려한다. 단순 백분율은 빈혈의 정도에 따라 보정해 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001538 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정구성 빈혈을 철결핍으로 확정하고 retic을 철저장검사로 설명한 오류를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/lab-tests/reticulocyte-count/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001538
- https://pubmed.ncbi.nlm.nih.gov/35593002/
