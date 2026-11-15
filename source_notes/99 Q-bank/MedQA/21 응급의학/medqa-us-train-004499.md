---
type: qbank
schema_version: 1
id: medqa-us-train-004499
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d178bd0b5c7f07e70d12b93fd65e648047c6469eaf299ff2ca602d841fcdd3e4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "삼환계 항우울제 과량복용"
  - "나트륨 통로 차단 독성"
  - "QRS 연장"
  - "tricyclic antidepressant overdose"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCvO2ZmOqzhCDtla3smrDsmrjsoJwg7KSR64-FIChUcmljeWNsaWMgQW50aWRlcHJlc3NhbnQgUG9pc29uaW5nKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

삼환계 항우울제 중독이 의심되는 환자가 의식이 떨어지고 혈압이 낮다. 심전도에서 QRS가 148 ms로 넓어졌다. 약물에 의한 나트륨통로 차단을 치료할 약은?

## 선택지

A. 정맥 중탄산나트륨
B. 플루마제닐
C. 글루카곤
D. 칼슘글루콘산

## 해설


삼환계 항우울제로 인한 나트륨통로 차단은 QRS 연장, 저혈압, 심실성 부정맥으로 나타날 수 있다. 이런 심장독성에는 정맥 중탄산나트륨을 사용하고 심전도와 전해질을 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004499
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
