---
type: qbank
schema_version: 1
id: medqa-us-validation-000959
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f0ba8bf9b4e79d85ade95b2e80d5678b98560531f3e37a8451f21b0ba34396ac
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "중추성 갑상선기능저하증"
  - "뇌하수체 선종"
  - "저TSH혈증"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

40세 남성이 피로와 성욕 감소로 내원했다. 유리 T4가 낮지만 TSH는 정상 범위 하단이고, 아침 테스토스테론이 낮은데 LH도 낮다. 급성 중증질환이나 약물 영향은 없다. 다음으로 평가할 부위는?

## 선택지

A. 부갑상선
B. 뇌하수체
C. 갑상선 결절
D. 부신수질

## 해설


유리 T4가 낮을 때 TSH가 올라가지 않고 생식샘 축도 중추성으로 저하되어 뇌하수체 병변을 의심한다. 다른 뇌하수체 호르몬과 MRI로 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000959 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 저TSH+임상저하로 pituitary B 추론은 가능하나 freeT4/다른축 평가 없이 확진하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000959
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6198777/
