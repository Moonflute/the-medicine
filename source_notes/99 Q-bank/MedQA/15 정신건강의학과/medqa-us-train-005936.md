---
type: qbank
schema_version: 1
id: medqa-us-train-005936
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f758ade0153ca86ccf1c274b1b0e43d83bdbba9c628920b6ccee6f1a6ddc7ae
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "기면증"
  - "입면 환각"
  - "주간 졸림"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZldGlyYWNldGFtLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 피로와 ‘목소리가 들린다’는 주호소로 외래 정신과를 방문했다. 잠들기 전 여러 목소리가 자신의 이름을 부르거나 말도 안 되는 이야기를 한다고 한다. 가끔 깨어나 방 안의 ‘이상한 사람들’을 보며 무서워하지만 곧 사라진다. 20대에 조현병이 발병한 삼촌 때문에 특히 걱정한다. 며칠 전 갑자기 예고 없이 바닥에 쓰러져 발작을 했다고 생각하지만 당시를 기억하고 이상운동은 없었다. 대학 3학년으로 예전에는 우수한 학생이었으나 지난 1년 동안 집중이 어렵고 시험 중 잠들어 성적이 C와 D로 떨어졌다. 기분 변화는 없고 최근에도 밤에 8시간 자며 하루 세 끼를 먹는다. 다음 중 가장 도움이 될 약물은 무엇인가?

## 선택지

A. 할로페리돌
B. 레베티라세탐
C. 모다피닐
D. 발프로산

## 해설

충분한 야간 수면에도 지속되는 주간 수면발작과 입면·각성 시 환각은 기면증을 시사한다. 의식이 보존된 채 쓰러진 사건은 탈력발작 가능성을 평가해야 하며 이 설명만으로 발작 원인을 확정하지 않는다. 제시된 약물 중 모다피닐은 기면증의 주간졸림 치료 선택이다. 수면과 연결된 환각을 조현병으로 단정해 할로페리돌을 시작하지 않으며 실제 진단에는 수면평가와 객관적 검사가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005936

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 비표준 '전형적 삼중증후군'과 낙하 사건 확정 표현 제거. 수면 관련 환각·주간졸림의 기면증 의심과 모다피닐 선택으로 한정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
