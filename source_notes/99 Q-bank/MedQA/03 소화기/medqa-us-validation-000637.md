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

24세 환자가 소량의 혈변과 배변 절박감으로 내원했다. 전신 증상은 없고 내시경과 조직검사에서 경증 궤양성 직장염이 직장에만 국한돼 있다. 관해 유도를 위한 초기 약물은?

## 선택지

A. 무글루텐 식이만 시행
B. 경구 프레드니솔론을 먼저 장기간 투여
C. 메살라민 좌약
D. 정맥 사이클로스포린

## 해설


경증 또는 중등도 궤양성 직장염에는 염증 부위에 직접 도달하는 국소 5-아미노살리실산 제제를 우선 사용한다. 직장에 국한된 경우 메살라민 좌약이 적절하며 전신 면역억제제부터 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000637 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경증 원위부 UC mesalamine C 유지, 전신이라는 모호 표현 대신 경구/직장 경로 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gut.bmj.com/content/74/Suppl_2/s1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000637
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714434/
