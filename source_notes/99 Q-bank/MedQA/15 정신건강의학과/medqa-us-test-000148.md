---
type: qbank
schema_version: 1
id: medqa-us-test-000148
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:20c740b723a2faf8591e364d9913696939d590d4e616e4e0e9d462a1d0743a91
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "도벽"
  - "불안"
  - "인지행동치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uPhOuyvSAoS2xlcHRvbWFuaWEpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 수개월 동안 심한 스트레스로 긴장을 풀기 어렵고 걱정이 머릿속을 가득 채운다고 내원했다. 회계사무소에서 일하며 집중하기 어렵고 동료 휴가로 근무시간이 늘어 피곤하다. 남편과 자주 다투며 스트레스를 다루기 위해 쇼핑하다가 작고 사소한 물건을 훔치면 즉시 안도감을 느낀다. 훔친 물건은 버리고 수치심과 죄책감을 느끼지만 절도를 멈출 수 없다. 다음 중 가장 적절한 치료는?

## 선택지

A. 리튬 투여
B. 대인관계 치료
C. 정신역동적 정신치료
D. 인지행동치료

## 해설

필요하거나 금전적으로 가치 있는 물건을 얻으려는 목적이 아니라, 훔치기 전 긴장과 훔친 뒤 안도감·죄책감이 반복되는 양상은 도벽에 부합한다. 제시된 선택지 중 인지행동치료로 충동의 유발 상황과 대처 행동을 다루는 것이 적절하다. 치료 근거가 제한적이므로 모든 환자에서 가장 효과적인 단일 치료로 단정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000148

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 도벽에서 CBT 선택은 유지하되 근거가 제한적인 상황에 '가장 효과적인 1차'로 단정한 해설을 완화.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.mayoclinic.org/diseases-conditions/kleptomania/diagnosis-treatment/drc-20364753?p=1
