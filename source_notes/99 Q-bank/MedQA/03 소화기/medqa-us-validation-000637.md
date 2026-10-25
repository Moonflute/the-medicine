---
type: qbank
schema_version: 1
id: medqa-us-validation-000637
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f8d6924534266e89c65b2db574583321ea771fb7baf60e31ceca390f8f03ced1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "궤양성 대장염"
  - "연속성 대장염"
  - "메살라민"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
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
---

# MedQA US 임상문제

## 문제

16세 남아가 3주간 하루 2~3회의 묽은 변과 간헐적인 혈변, 복통, 피로, 체중감소로 진료를 받으러 왔다. 대변 기생충 검사는 음성이고 대장내시경에서 직장을 넘어 연속적으로 퍼지는 접촉 출혈성 염증성 점막이 보이며 생검으로 진단이 확인되었다. 가장 적절한 치료는?

## 선택지

A. 무글루텐 식이
B. 대장직장절제술
C. 메살라민 치료
D. 사이클로스포린 치료

## 해설


정답 C. 직장에서 연속적으로 이어지는 접촉 출혈성 점막과 생검은 궤양성 대장염에 부합한다. 비교적 경증의 원위부 질환에서 mesalamine(5-ASA)이 적절하며 범위에 따라 직장 투여 또는 경구·직장 병용을 선택한다. 이 문항에는 급성 중증 대장염이나 구조 약물 실패가 없어 cyclosporine 또는 즉시 대장직장절제를 선택할 근거가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000637 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경증 원위부 UC mesalamine C 유지, 전신이라는 모호 표현 대신 경구/직장 경로 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gut.bmj.com/content/74/Suppl_2/s1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000637
