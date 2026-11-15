---
type: qbank
schema_version: 1
id: medqa-us-train-001444
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e817ccb5f3aac7d5e0e5805133bc799308769fd987402cec93185fe2f0933b57
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "SIADH"
  - "small cell lung carcinoma"
  - "symptomatic hyponatremia"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
---

# MedQA US 임상문제

## 문제

68세 남성이 전신 경련 직후 응급실에 왔다. 경련은 멈췄지만 혼돈이 지속된다. 혈청 Na 115 mmol/L, 혈청 삼투압 244 mOsm/kg, 혈당 99 mg/dL이다. 원인을 평가하면서 즉시 시행할 저나트륨혈증 치료는?

## 선택지

A. 수분 제한만 시행
B. 0.45% 식염수 정맥 투여
C. 경구 톨밥탄
D. 3% 고장성 식염수 정맥 투여

## 해설


경련을 동반한 중증 저장성 저나트륨혈증은 고장성 식염수로 응급 교정한다. 처음에는 위험한 신경 증상을 개선할 정도로 올리고 반복 측정해 과교정을 피한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001444`와 직접 대조했다.
- 판정: 경련을 동반한 심한 저나트륨혈증에서 D 유지. 무제한으로 빠르게 정상화하는 해석을 막고 증상 개선까지 부분 교정·과교정 방지 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.endocrinology.org/media/xhrhxhxm/emergency-management-of-severe-and-moderately-severely-symptomatic-hyponatraemia-in-adult-patients-2022.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001444
- https://www.kjim.org/journal/view.php?doi=10.3904%2Fkjim.2022.174
