---
type: qbank
schema_version: 1
id: medqa-us-validation-000323
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e279bc8996f5b72a9c616b85bb3e3f07ae75c10f70e2cc2a4afdcd038d651d8c
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "전립선암 골전이"
  - "통증성 골전이"
  - "완화 방사선 치료"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

전립선암 환자의 요추 골전이에 통증이 지속된다. MRI에서 척수압박이나 병적 골절은 없고 척추는 안정적이다. 진통제를 유지하며 국소 통증을 줄일 치료는?

## 선택지

A. 통증 부위에 완화 목적의 외부 방사선치료
B. 골절이 없더라도 척추성형술을 우선 시행
C. 원발 전립선만 절제해 요추 통증을 조절
D. 칼슘과 비타민 D만 보충

## 해설


압박이나 불안정성이 없는 통증성 골전이에는 완화 목적의 외부 방사선치료가 효과적이다. 전신치료의 변경 필요성은 따로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000323 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 압박·골절 없는 통증성 척추전이의 국소 방사선 B 유지; D의 kyphoplasty 번역을 풍선척추성형술로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000323
- https://pubmed.ncbi.nlm.nih.gov/38788923/
