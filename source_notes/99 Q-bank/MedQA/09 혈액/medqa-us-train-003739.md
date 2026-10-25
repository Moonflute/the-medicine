---
type: qbank
schema_version: 1
id: medqa-us-train-003739
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0895ca30e0f9a0bc48e579cedb127455c77ebbc01dab2df2565cc4578d162c36
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "polycythemia vera"
  - "hyperuricemia"
  - "uric acid nephrolithiasis"
  - "allopurinol"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
question_type: prevention
difficulty: complex
answer: A
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

63세 남성이 왼쪽 사타구니로 퍼지는 산통 양상의 통증으로 내원했다. 손발의 작열통과 두통이 있고 혈색소 22 g/dL, EPO 감소, JAK2 돌연변이를 보였다. 큰 왼쪽 요관 결석이 배출되어 분석을 의뢰했다. 향후 신장결석 재발을 예방하는 데 도움이 될 약물은?

## 선택지

A. 알로푸리놀
B. 티아지드
C. 하이드록시우레아
D. 항히스타민제

## 해설


진성적혈구증가증은 세포 회전율 증가로 요산 부하가 늘어날 수 있어, 고요산뇨성 요산 결석이라는 출제 맥락에서는 allopurinol A가 재발 예방에 도움이 된다. 그러나 아직 분석 중인 결석이 실제 요산 결석이라고 확정되지는 않았다. 성분·소변pH·요산 배설을 확인하여 선택하며 요산 결석의 기본 예방은 충분한 수분과 소변 알칼리화이고 allopurinol을 모든 요산 결석의 보편적 단독 일차약으로 쓰는 것은 아니다. PV 자체의 혈전 예방 치료와 결석 재발 예방 목적도 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003739 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PV의 높은 세포 회전율에 따른 요산 관련 결석 예방 A의 조건을 명시; 결석 분석·요산배설 확인 및 요알칼리화 필요성을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003739
