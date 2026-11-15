---
type: qbank
schema_version: 1
id: medqa-us-validation-000502
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8ffb04b52155c1959c429b7e4ae8333bbd82f9beca46a5f3d4d668f5cd85afe1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "ACE 억제제 유발 혈관부종"
  - "입술 부종"
  - "상기도 폐쇄"
  - "ACE inhibitor-induced angioedema"
question_type: management
related_disease_slugs: []
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

리시노프릴을 복용하는 63세 남성의 혀와 입술이 붓고 목소리가 쉬었다. 가려움과 두드러기는 없다. 급히 기도 위험을 평가하며 재발을 막기 위해 할 처치는?

## 선택지

A. 리시노프릴을 중단하고 ACE 억제제 재투여를 피한다
B. 증상이 가라앉으면 리시노프릴을 증량한다
C. 증상이 없는 동안에는 같은 종류 다른 약으로 교체한다
D. 항히스타민제만 주고 기도 평가를 보류한다

## 해설


ACE 억제제 혈관부종은 브래디키닌과 관련돼 두드러기 없이 혀와 후두가 부을 수 있다. 기도 관리를 우선하며 원인 계열의 약을 중단한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000502
