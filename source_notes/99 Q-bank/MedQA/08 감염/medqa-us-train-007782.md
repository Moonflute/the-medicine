---
type: qbank
schema_version: 1
id: medqa-us-train-007782
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:98be8d0a936b9d9fb23227bc7a0cdd04490b37d1c33bed30b99ebb0c616e6759
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "febrile neutropenia"
  - "acute lymphoblastic leukemia"
  - "empiric antipseudomonal antibiotic"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2YuOykkeq1rOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
question_type: management
difficulty: simple
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

13세 남자가 급성 림프모구성 백혈병 치료를 위해 입원했다. 입원 중 체온이 39.0°C로 상승했고 전혈구검사에서 백혈구 수가 500/mm³ 미만으로 나타났다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 과립구집락자극인자(G-CSF)
B. 정맥주사 세프타지딤
C. 경구 독시사이클린
D. 경구 시프로플록사신과 아목시실린/클라불란산

## 해설


ALL 치료 중 고열과 WBC<500이면 ANC도500미만인 고위험 FN이다. 배양을 신속히 채취하고 지체 없이 정주 항녹농균 β-lactam을 시작하며 제시된 선택지에서는 B ceftazidime이 해당한다. 실제 기관 내성/환자 상태에 따라 cefepime·piperacillin-tazobactam·carbapenem 등을 선택하며 불안정하면 범위를 확대한다. G-CSF나 경구 저위험 요법이 초기 정주 경험적 치료를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007782 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고위험 소아 FN의 즉시 정주 항녹농균 B 유지;WBC와 ANC 구분 및 기관 내성 기반 약제선택 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10022858/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9669256/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007782
