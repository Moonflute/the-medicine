---
type: qbank
schema_version: 1
id: medqa-us-train-004155
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b16d479eba8c32951f011eac631941c70ca8c7e582d47424f379149e27acf20
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주요우울장애"
  - "비정형 우울증"
  - "과다수면"
  - "연마비"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여자가 복통으로 내원했다. 일주일 정도 가벼운 배 아픔이 있었고, 지난 한 달간 일상 활동을 감당하기 어려웠다고 한다. 대부분의 날 슬프고 일어나서 아무것도 할 의욕이 없다. 직장에서 집중하기 어렵고 출근하기 싫을 때가 많다. 어떤 날은 10~12시간씩 자며 다리가 무겁게 느껴져 침대에서 일어나기 어렵다고 한다. 최근 평소보다 많이 먹는다. 이 환자 상태에서 가장 가능성 높은 추가 특징은 무엇인가?

## 선택지

A. 초대받은 사회적 행사에 참여하지 못함
B. 사람들이 몰래 자신을 방해한다고 믿음
C. 겨울에 증상 빈도 증가
D. 타인을 대하는 방식과 관련된 죄책감

## 해설

우울감·흥미와 집중 저하에 과다수면·식욕 증가·팔다리가 무거운 납마비 같은 비정형적 양상이 동반된다. 제시된 선택지 중 사회적 행사에 참여하지 못하는 기능적 제한이 원문 정답이다. 비정형 우울 양상에서는 대인관계의 거절 민감성도 살피지만 이 선지만으로 그 기준을 확정하는 것은 아니다. 겨울 악화나 피해망상을 당연히 동반한다고 가정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004155

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 사회적 활동 회피가 모든 우울증의 가장 흔한 추가 특징이라는 단정을 삭제. 비정형 양상과 기능장애에 제한해 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
