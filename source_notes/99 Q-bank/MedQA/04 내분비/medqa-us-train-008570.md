---
type: qbank
schema_version: 1
id: medqa-us-train-008570
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ccc06695155af15be145fd785d8ef6d708700a6bdb8f481eb4d22527ac90301
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Hashimoto thyroiditis"
  - "hypothyroidism"
  - "thyroid lymphoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

오래된 하시모토 갑상선염이 있는 67세 여성이 4주 사이 빠르게 커진 목 종괴와 삼킴곤란으로 내원했다. 호흡은 안정적이다. 초음파에서 미만성 저에코 종괴와 경부 림프절 비대가 보인다. 첫 세침흡인 결과는 림프구가 많고 진단 불충분이다. 다음 검사는?

## 선택지

A. 갑상선호르몬 검사만 6개월 뒤 반복
B. 갑상선 방사성요오드 섭취율 검사
C. 갑상선 조직검사 없이 항갑상선 항체 확인
D. 초음파 유도 중심부바늘생검

## 해설


하시모토 갑상선염 환자에서 갑상선이 빠르게 커지면 원발성 갑상선 림프종 등 악성 질환을 배제해야 한다. 세침흡인이 불충분하고 림프종이 의심되면 중심부바늘생검으로 조직 구조와 면역표현형을 평가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008570 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항체 양성 원발성 갑상선기능저하의 Hashimoto–갑상선 림프종 D 병리 연관성 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008570
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6986975/
