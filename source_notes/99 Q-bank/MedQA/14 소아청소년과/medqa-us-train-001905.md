---
type: qbank
schema_version: 1
id: medqa-us-train-001905
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef26bd7fc9c186a5ce7c65bd4d476109a09c3287a756f4d19be9fec3b302be49
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "posterior urethral valves"
  - "urinary retention"
  - "neonatal urinary obstruction"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
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

생후 10일 남아가 소변을 방울방울 보고 아랫배가 불러왔다. 초음파에서 매우 팽창한 방광과 양측 수신증이 있고 크레아티닌이 상승했다. 후부요도판막이 의심될 때 우선 처치는?

## 선택지

A. 배뇨중방광요도조영술이 끝날 때까지 감압을 미룬다
B. 푸로세미드를 투여하고 방광이 비워지는지 본다
C. 비뇨의학과와 협의해 요도 카테터로 방광을 감압한다
D. 방광을 비우지 않고 수일 뒤 초음파를 반복한다

## 해설

하부 요로 폐쇄와 신기능 이상이 의심되면 방광을 먼저 감압하고 신기능과 전해질을 평가한다. 안정화 후 조영검사로 원인을 확인하고 필요하면 판막 절개를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 배뇨 감소·복부팽만의 도뇨 D 유지. 요로폐쇄 확정과 신생아 발열 평가 누락 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/Recognition_of_the_seriously_unwell_neonate_and_young_infant/
- https://uroweb.org/guidelines/paediatric-urology/chapter/congenital-lower-urinary-tract-obstruction

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001905
