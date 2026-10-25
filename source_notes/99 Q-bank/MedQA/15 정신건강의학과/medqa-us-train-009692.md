---
type: qbank
schema_version: 1
id: medqa-us-train-009692
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:150faa76c7f534121d8ab1a08080555db4831154570b69487a215a0363bf594e
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bipolar I disorder"
  - "제1형 양극성장애"
  - "acute mania"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DYXJiYW1hemVwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남자가 이틀 연속 잠을 자지 않아 아버지와 함께 응급실에 왔다. 비정상적인 기분, 손님 앞에서 옷을 벗음, 낯선 사람과 장시간 대화, 한 달 전 시작하지도 않은 사업을 위해 큰 대출, 스위스 여행에서 3만 달러 이상 지출 등의 증상이 있다. 과거에는 침대에서 나오지 않고 15시간씩 잔 에피소드도 있었다. 진찰에서 말이 많고 산만하며 사고비약과 압박된 말을 보인다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 카르바마제핀
B. 에스시탈로프람
C. 리튬
D. 관찰

## 해설

수면 욕구 감소·과대성·과소비·사고비약과 과거 우울 양상은 양극성 장애의 조증을 시사한다. 제시된 약물 중 리튬은 적절한 기분조절 치료이다. 안전 위험과 기능장애를 즉시 평가하며 '1주 이내에 치료하면 된다'는 대기 규칙은 없다. 치료 전 신장·갑상선 기능 등 기준 검사를 확인하고 이후 혈중농도를 모니터링한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009692

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 한 달 전의 대출을 우울삽화 시점으로 옮긴 오역 복원. 조증은 1주 내 치료해야 한다는 잘못된 시간 규칙 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
