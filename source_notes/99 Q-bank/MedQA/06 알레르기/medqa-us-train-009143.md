---
type: qbank
schema_version: 1
id: medqa-us-train-009143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4471ed5effcd8eb6db09ebc57692308ec7e4b1c0078b56de5d3b0acc37f7b3d2
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "ACE inhibitor-induced angioedema"
  - "ACE 억제제 유발 혈관부종"
  - "angioedema"
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

리시노프릴을 복용 중인 63세 남성이 두드러기 없이 혀와 입바닥이 점점 붓고 목소리가 쉰다. 산소포화도는 아직 정상이다. ACE 억제제 관련 혈관부종이 의심된다. 우선 할 조치는?

## 선택지

A. 세티리진을 투여하고 귀가시킨다
B. C4 검사 결과를 기다린 후 기도를 평가한다
C. 즉시 기도를 평가하고 조기 기도 확보를 준비하며 리시노프릴을 중단한다
D. 리시노프릴을 같은 계열 약으로 바꾸고 관찰한다

## 해설


정상 산소포화도여도 진행하는 혀·후두 부종은 기도를 막을 수 있다. 기도 평가와 확보 준비가 우선이며 ACE 억제제는 중단한다. 아나필락시스를 배제할 수 없는 상황에서는 그에 맞는 응급치료도 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009143`와 직접 대조했다.
- 판정: 리시노프릴 시작 후 혈관부종 C 유지. 원문 자체의 32.0°C(98.6°F) 불일치를 환산값 37.0°C로 고치고 Erysipelas를 단독으로 교정.
- 추가 주의: 영어 원문에도 32.0°C (98.6°F)로 단위 불일치가 있다. 98.6°F의 정확한 환산값 37.0°C를 사용했으며 저체온 사례로 재설계하지 않았다.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009143
- https://www.aaem.org/statements/ed-patients-angioedema-secondary/
