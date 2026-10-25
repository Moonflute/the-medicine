---
type: qbank
schema_version: 1
id: medqa-us-train-003754
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:034b9fa5ded13c5eb6b7ad5fcba6b748fcfbd06677901bd4410a58f976488da6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "clozapine"
  - "treatment-resistant schizophrenia"
  - "agranulocytosis"
  - "neutropenia monitoring"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 남성이 조현병 약물이 더 이상 효과가 없고 어머니를 해치라는 목소리가 다시 들린다고 내원했다. 효과가 더 우수하지만 빈번한 추적관찰이 필요한 약물을 처방받은 뒤 1주 후 백혈구 2,500 cells/mcL, 분절 호중구 55%, 밴드형 호중구 1%가 확인되었다. 처방한 약물은?

## 선택지

A. 할로페리돌
B. 클로르프로마진
C. 클로자핀
D. 루라시돈

## 해설

치료 반응이 부족한 조현병에서 처방한 약과 백혈구 감소의 맥락으로 제시된 선택지 중 클로자핀이 적절하다. ANC는 2,500×(0.55+0.01)=약 1,400/μL로, 이를 중증 호중구감소증이나 무과립구증으로 부르지 않는다. 클로자핀은 중증 호중구감소증 위험이 있어 ANC를 기준으로 지속 모니터링·치료 조정을 판단하며, 전체 백혈구수만으로 중증도를 확정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003754

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. WBC 2500·호중구55%를 무과립구증으로 오분류한 오류 수정. 원문 1주 후·bands1% 복원하고 실제 질문인 약명으로 답.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7c748f8a-73ce-4bd3-aa30-9c66657f06ec&version=6
