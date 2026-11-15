---
type: qbank
schema_version: 1
id: medqa-us-test-000805
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:de19aa4c1118c237dba25d7b0db1913a12747cc22889e4d70d5c9af9746aceb4
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "식품매개 보툴리눔중독"
  - "보툴리눔 독소"
  - "신경근 접합부 마비"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uztO2ItOumrOuIlCDspJHrj4UgKEJvdHVsaXNtKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

성인 환자에게 복시와 연하곤란이 시작된 뒤 대칭적으로 근력저하가 내려오고 호흡이 약해졌다. 보툴리눔독소증을 강하게 의심해 기도를 확보했다. 검사 결과를 기다리는 동안 가장 중요한 특이 치료는?

## 선택지

A. 정맥 면역글로불린
B. 혈장교환
C. 네오스티그민
D. 보툴리눔 항독소

## 해설


보툴리눔독소증이 의심되면 호흡을 지지하고, 담당 공중보건기관과 협의해 확진 결과를 기다리지 않고 항독소를 신속히 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000805`와 직접 대조했다.
- 판정: 자가 통조림 섭취 가능성과 뇌신경 증상으로 시작한 하행 마비는 보툴리눔 중독. 항독소 A를 CDC 지침으로 확인; 불일치 플래그는 오연결 아님.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/mmwr/volumes/70/rr/rr7002a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000805
