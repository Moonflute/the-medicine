---
type: qbank
schema_version: 1
id: medqa-us-validation-000791
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:672b6956c8069c002d0048d020d1a0566bbf310b7dbe84048e9f30ff9d83f365
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "파종성 혈관내 응고"
  - "급성 전골수구성 백혈병"
  - "응고인자 소모"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
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

급성 전골수구성 백혈병으로 전트랜스 레티노산을 막 시작했다. 환자의 잇몸 출혈이 이어지고 피브리노겐이 65mg/dL로 낮다. 피브리노겐을 신속히 보충하기 위해 우선 고려할 혈액제제는?

## 선택지

A. 동결침전제
B. 농축적혈구 단독
C. 세척 적혈구
D. 정맥 면역글로불린

## 해설


급성 전골수구성 백혈병의 응고장애에서는 혈액제제로 피브리노겐을 신속히 보충한다. 동결침전제 또는 이용 가능한 피브리노겐 제제를 사용하며, 혈소판 등 다른 요소도 함께 교정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000791 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: APL 관련 소비성 응고장애 패턴 C 유지. ATRA가 DIC를 유발한다는 역전 설명을 APL의 응고장애와 ATRA의 조기 치료 역할로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000791
- https://doi.org/10.1182/blood-2019-01-894980
