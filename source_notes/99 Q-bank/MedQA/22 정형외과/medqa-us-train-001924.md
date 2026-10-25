---
type: qbank
schema_version: 1
id: medqa-us-train-001924
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e28222669ad6da9cc37cace524007bfa72bad0606c5117ce691e954cdb0c4c56
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "anterior cruciate ligament tear"
  - "pivot shift injury"
  - "knee hemarthrosis"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-ygleykkSDsi6Dqsr0g7IaQ7IOBIChNZWRpYW4gTmVydmUgSW5qdXJ5KS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남성이 왼쪽 무릎 통증으로 내원했다. 대학 미식축구팀의 주전 러닝백이며 장래가 촉망된다. 이틀 전 시즌 마지막 경기에서 발을 고정한 채 바깥쪽으로 돌리고 무릎이 안쪽으로 꺾이는 방향 전환 중 다쳤다. ‘뚝’ 소리와 즉각적인 통증이 있었으나 이후 잠김, 딸깍거림 또는 무릎이 빠지는 느낌은 없다. 절뚝거리며 능동적 무릎 폄을 피하고 관절선에 중등도 미만성 부종과 심한 압통이 있다. 가장 손상된 구조는 무엇인가?

## 선택지

A. 전방십자인대
B. 외측 반월상연골
C. 내측곁인대
D. 후방십자인대

## 해설

발을 고정한 방향 전환 중 무릎이 안으로 꺾이며 pop과 즉각 통증·종창이 생긴 기전은 전방십자인대(ACL, A) 파열을 가장 지지한다. 잠김·catching이 없다는 점도 반월상연골을 우선할 근거를 줄인다. ACL 손상에서 불안정감을 항상 즉시 자각하는 것은 아니며 양쪽 무릎이 부어야 하는 것도 아니다. 이 문항의 정답은 외측 반월상연골 B가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 ACL A에 외측 반월상연골을 정답으로 결론 낸 다른 구조 설명이 붙어 있어 케이스용 올바른 해설로 교체한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001924
