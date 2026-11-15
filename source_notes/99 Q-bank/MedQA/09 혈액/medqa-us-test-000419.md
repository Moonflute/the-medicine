---
type: qbank
schema_version: 1
id: medqa-us-test-000419
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:98cbbad988336f2f05ed42fefeb91730940f29a4d984c7fbd80e5d38013e652b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "저색소성 소구성 빈혈"
  - "영양결핍"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
question_type: management
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZXRoeWxwaGVuaWRhdGUubWQ
---

# MedQA US 임상문제

## 문제

16세 환자에게 피로가 있고 혈색소 10.9g/dL, MCV 72fL, 페리틴 7ng/mL다. 혈역학적으로 안정적이고 흡수장애 소견이 없다. 원인을 평가하면서 시작할 치료는?

## 선택지

A. 경구 철분 보충
B. 정기적 적혈구 수혈
C. 엽산 단독 보충
D. 철분을 투여하지 않고 조혈자극제 시작

## 해설


안정적인 철결핍성 빈혈에서 경구 철분은 적절한 초기 치료다. 복용과 반응을 확인하는 동시에 식이, 출혈 등 철결핍의 원인을 찾는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000419`와 직접 대조했다.
- 판정: 소구성 빈혈·높은 RDW·숟가락손발톱으로 철결핍과 C 유지. 혈청 철분 보충이라는 부정확한 표현을 경구 철분으로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.hematology.org/education/patients/anemia/iron-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000419
- https://doi.org/10.1542/peds.2026-077414
