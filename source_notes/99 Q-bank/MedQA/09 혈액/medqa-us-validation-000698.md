---
type: qbank
schema_version: 1
id: medqa-us-validation-000698
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1828480b9e57c8bf3ebd2a9c2bfb20061f9173f640906f311d66b34a660c9080
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "엽산결핍성 빈혈"
  - "거대적아구성 빈혈"
  - "설염"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: prevention
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

9세 남아가 연하통, 구강 작열감, 피로, 호흡곤란으로 진료를 받으러 왔다. 아버지는 30세에 담석으로 담낭절제술을 받았다. 창백한 점막, 경미한 공막 황달, 붉고 부은 혀, 비장비대, 혈색소 9.8 g/dL, MCV 102, 망상적혈구 0.4%, 중심창백이 없는 적혈구가 있다. 이 증상을 예방할 수 있었던 것은?

## 선택지

A. 엽산 보충
B. 담낭절제술
C. 무글루텐 식이
D. 비타민 B12 주사

## 해설


중심창백 없는 적혈구, 비장비대와 아버지의 조기 담석은 유전구형적혈구증을 시사한다. 만성 용혈로 엽산 필요량이 증가하고, 이 사례의 거대적혈구성 빈혈·설염·낮은 망상적혈구는 엽산 결핍성 거대적아구성 위기를 의심하게 한다. 선택지 중 적절한 엽산 보충(A)이 이를 예방할 수 있다. 다만 B12 결핍이나 B19 무형성 위기도 별도 감별해야 하며 모든 경증 HS에 일률 처방한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000698 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 중심창백 없는 RBC·비장비대·조기담석 가족력의 HS에서 엽산 소모와 거대적아구성 위기 예방 A 의도 보완. 원문 아버지 담석력을 복원하고 단순 식이부족으로만 설명하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2141.2011.08921.x

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000698
