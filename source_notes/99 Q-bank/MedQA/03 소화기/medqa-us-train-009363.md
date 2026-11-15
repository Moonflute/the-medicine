---
type: qbank
schema_version: 1
id: medqa-us-train-009363
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cdf9b4cf8dd674ad3e24de4bab6196a7d68aff5ee7d36dfd2424868ebb8ef37d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "vomiting-induced metabolic alkalosis"
  - "구토 유발 대사성 알칼리증"
  - "hypokalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: management
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

54세 남성이 사흘간 반복해 구토했다. 점막이 마르고 기립 시 어지럽다. pH 7.51, HCO₃⁻ 34 mEq/L, K 2.9 mEq/L, 소변 염소 8 mmol/L이며 이뇨제를 쓰지 않는다. 원인 평가와 함께 어떤 수액·전해질 보충이 적절한가?

## 선택지

A. 5% 포도당액만 투여
B. 0.9% 식염수와 염화칼륨 보충
C. 정맥 중탄산나트륨
D. 수분 제한과 루프이뇨제 투여

## 해설


구토로 위산과 염소가 소실되어 저혈량성 대사알칼리증이 발생했다. 소변 염소가 낮은 염소 반응성 알칼리증은 염소를 포함한 등장성 수액과 칼륨 보충으로 교정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009363 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 구토의 위산·염소 소실과 체액 감소에 따른 신장 K/H 배설로 저칼륨 대사성 알칼리증을 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009363
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10947768/
