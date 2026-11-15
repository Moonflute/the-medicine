---
type: qbank
schema_version: 1
id: medqa-us-test-000865
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1e5838038df257277033a75e6d8c93fde6bba84efe73f19e665f3414084bdd2f
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "복강내출혈"
  - "비장 손상"
  - "외상성 출혈성 쇼크"
related_disease_slugs:
  - MTEg7Jm46rO8L-u5hOyepSDshpDsg4EgKFNwbGVuaWMgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

26세 남성이 교통사고 뒤 복부 경직을 보이며 FAST에서 복강 내 자유액이 확인됐다. 혈액제제를 투여 중에도 혈압 78/48 mmHg로 쇼크가 지속된다. 다음 처치는?

## 선택지

A. 조영 복부 CT부터 시행
B. 응급 개복술로 출혈 조절
C. 중환자실에서 반복 FAST만 시행
D. 선택적 혈관색전술을 위해 수술을 일단 미룬다

## 해설


양성 FAST와 지속되는 쇼크는 복강 내 출혈에 대한 즉각적인 수술적 조절이 필요한 조합이다. 혈액제제 소생을 계속하며 CT가 수술을 지연하지 않도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000865 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 외상 후 복강내 혈액·복막자극징후·수액에도 악화되는 쇼크는 CT 지연 없이 응급 개복술 D를 지지하며 원문과 해설이 일치한다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000865
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7106618/
