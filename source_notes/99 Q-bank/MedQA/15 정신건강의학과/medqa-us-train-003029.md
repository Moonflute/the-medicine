---
type: qbank
schema_version: 1
id: medqa-us-train-003029
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a4c9eecf96eed66814cc5503f5c4939d87312301ec4855399975db0bb32c6d9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "neuroleptic malignant syndrome"
  - "chlorpromazine adverse effect"
  - "hyperthermia"
  - "dantrolene"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

항정신병약을 증량한 지 4일 된 환자가 고열·혼돈·전신 강직을 보인다. CK는 4,200 U/L이고 간대는 없다. 즉시 할 처치는?

## 선택지

A. 해열제를 투여하고 항정신병약은 유지한다
B. 도파민 차단 효과가 약한 항정신병약으로 즉시 교체한다
C. 뇌척수액 결과가 나올 때까지 투약을 유지한다
D. 항정신병약을 중단하고 냉각·정맥 수액과 집중 감시를 시행한다

## 해설

신경이완제 악성증후군이 의심되면 원인 약을 중단하고 냉각·수액과 장기 기능 감시를 즉시 시행한다. 단트롤렌 등은 중증도와 상황에 따라 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003029
- https://pubmed.ncbi.nlm.nih.gov/37039129/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. NMS와 단트롤렌 원정답 유지. 가장 먼저 필요한 원인약 중단·지지치료를 생략한 채 단트롤렌이 보편적 1차라고 설명하지 않도록 보완.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7b3ac0-604d-4c78-b545-5e0f8ea3d698
