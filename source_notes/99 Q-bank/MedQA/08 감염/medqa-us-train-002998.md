---
type: qbank
schema_version: 1
id: medqa-us-train-002998
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d276493d0d015f66580b5af1cabef39ac0af7fb2191c8b7a560812d3ddf905e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "isoniazid-induced peripheral neuropathy"
  - "pyridoxine supplementation"
  - "tuberculosis treatment"
  - "vitamin B6 deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: prevention
difficulty: complex
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

당뇨병과 영양부족이 있는 환자에게 이소니아지드를 포함한 결핵치료를 시작한다. 이 약과 관련된 말초신경병증 위험을 줄이기 위해 보충할 약제는?

## 선택지

A. 엽산
B. 티아민
C. 피리독신
D. 시아노코발라민

## 해설


이소니아지드는 피리독신 대사를 방해해 말초신경병증을 일으킬 수 있다. 당뇨병·영양불량 등 위험이 있는 환자의 치료에는 피리독신을 함께 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002998 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Isoniazid의 pyridoxine 대사 방해와 B6 보충 C의 말초신경병증 예방을 원문 및 허가사항과 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b46d1d-2300-457d-a7bd-a88a3f8d2235

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002998
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMjI4MTc4JTJGYXJ0Y2xWaWV3LmRvJTNG
