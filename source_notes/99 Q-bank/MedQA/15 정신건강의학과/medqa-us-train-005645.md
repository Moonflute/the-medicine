---
type: qbank
schema_version: 1
id: medqa-us-train-005645
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84bf246ba1442208f82cafe241fa722ea41c007475cf4e671a1ffbcfe25c2339
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "청소년 자살 위험"
  - "자해"
  - "비밀보장의 예외"
  - "Major depressive disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 청소년이 단독 면담에서 가까운 시일에 자살할 구체적인 계획이 있다고 말한다. 보호자는 안전한 지원 인물이지만, 청소년은 절대로 알리지 말아 달라고 한다. 적절한 대응은?

## 선택지

A. 비밀 유지를 약속하고 혼자 귀가시킨다
B. 보호자에게 이야기하되 진료는 끝내고 가족에게만 맡긴다
C. 안전을 위한 비밀보장의 한계를 설명하고, 필요한 정보만 안전한 보호자·진료팀과 공유하며 응급 평가를 연결한다
D. 비밀 요청을 무시하고 평가와 관계없는 정보도 학교에 모두 알린다

## 해설


당장 심각한 위해를 막기 위해 필요한 보호자·진료팀에 최소한의 정보를 공유하고 응급평가를 진행한다. 가능한 한 청소년에게 이유와 범위를 설명하며, 가족이 위험의 원인이면 다른 보호 경로를 찾는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005645
- https://www.nice.org.uk/guidance/ng225/chapter/Recommendations
- https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030469067

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 미성년 환자의 현재 반복 자해·명확한 자살계획과 비밀 요청, 모든 선지·답·해설을 영한 대조. 즉각 보호·입원 평가 및 비밀보장 예외의 정답 타당.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
