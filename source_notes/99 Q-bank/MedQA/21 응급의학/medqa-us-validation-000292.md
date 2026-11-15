---
type: qbank
schema_version: 1
id: medqa-us-validation-000292
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:af0d8272854d1f137822c8dad99c56ce55283c9cc769b0dbd563cc93e8673df7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "중증 납중독"
  - "납성 신경병증"
  - "킬레이트 치료"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 반복되는 복통과 변비, 소구성 빈혈에 이어 의식 저하를 보인다. 정맥혈 납 농도가 72 μg/dL이고 납성 뇌병증이 의심된다. 가장 적절한 조치는?

## 선택지

A. 노출만 피하고 6개월 뒤 혈중 농도를 잰다
B. 철분만 보충한다
C. 경구 수분 섭취만 권한다
D. 입원해 소아 독성학팀과 응급 킬레이트 치료를 진행한다

## 해설

납성 뇌병증이 의심되는 아동은 긴급 입원과 킬레이트 치료가 필요하다. 약제와 경로는 신장 기능과 임상 상태를 고려해 정하고 노출원을 제거한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 혈중 납 72 μg/dL인 소아의 입원·전문 킬레이트 치료 C를 확인하되 혈청 납 표현과 일률적 최효과 단정을 교정하고 신기능 감시를 명시한다.
- 공식/학회 근거: https://wwwn.cdc.gov/tsp/MMG/MMGDetails.aspx?mmgid=1203&toxid=22
- 공식/학회 근거: https://www.ncbi.nlm.nih.gov/books/NBK575289/?report=reader

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000292
- https://www.who.int/publications/i/item/9789240037045
