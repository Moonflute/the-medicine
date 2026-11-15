---
type: qbank
schema_version: 1
id: medqa-us-test-001262
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9db22af2d22e23414d95f8e44a591262b3ec474fa45821443a2330494539c8a7
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 전골수성 백혈병"
  - "파종혈관내응고"
  - "전트랜스레티노산"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
question_type: management
difficulty: complex
answer: B
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

55세 환자가 잇몸 출혈로 내원했다. 혈소판과 피브리노겐이 낮고, 혈액도말에서 비정상 전골수구와 여러 아우어 막대 다발이 보인다. 급성 전골수구성 백혈병이 강하게 의심된다. 응고장애를 교정하면서 PML::RARA 결과 전 시작할 약은?

## 선택지

A. 이마티닙
B. 전트랜스 레티노산
C. 리툭시맙
D. 아자시티딘

## 해설


급성 전골수구성 백혈병이 의심되면 확진을 기다리지 않고 전트랜스 레티노산을 시작한다. 중증 출혈을 막기 위해 혈소판·피브리노겐을 보충하고 응고검사를 자주 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001262 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Auer rod/MPO가 모든 APL을 확진하고 ATRA가 모든 AML 치료라는 해설 교정. DIC에서 APL 의심 시 C 즉시 및 PMLRARA 확인·혈액제제 병행.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001262
- https://doi.org/10.1182/blood-2019-01-894980
