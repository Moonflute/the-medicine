---
type: qbank
schema_version: 1
id: medqa-us-test-001040
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:da2089e4a75799d6f485b6f883747eee3e694133f92e58ebd8d8387bd1d3ee81
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "하지불안증후군"
  - "프라미펙솔"
  - "도파민 작용제"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2VmOyngCDrtojslYgg7Kad7ZuE6rWwIChSZXN0bGVzcyBMZWcgU3luZHJvbWUpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 여성이 2개월 동안 잠들기 어렵고 밤에 자주 깨며 원하는 시간보다 일찍 일어난다고 했다. 밤에 누우면 다리가 불편하고 움직이고 싶은 충동이 생기며 일어나 걷거나 다리를 움직이면 호전된다. 디펜히드라민이 들어 있는 일반 수면제를 복용했더니 악화되었다. 규칙적으로 운동하고 균형 잡힌 식사를 하며 최근 스트레스가 많았다. 오빠도 비슷한 증상이 있다. 혈액검사와 철분검사는 정상이었다. 가장 적절한 약물치료는?

## 선택지

A. 아미트립틸린
B. 프라미펙솔
C. 코데인
D. 에스시탈로프람

## 해설

저녁·휴식 때 다리를 움직이고 싶은 충동과 불편감이 생기고 움직이면 호전되는 양상은 하지불안증후군이다. 원문 선택지 중 프라미펙솔은 증상 완화 효과가 있는 약물이지만, 2025 AASM 지침은 장기 사용 시 증상 악화인 augmentation 위험 때문에 표준적인 사용을 조건부로 권하지 않는다. 현행 우선 치료에 포함되는 가바펜틴·프레가발린 등이 선택지에 없다는 문항의 한계가 있다. 프라미펙솔을 보편적 1차 치료로 암기하지 말고 철 상태 및 악화 약물 평가와 개별 위험·편익 상담이 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001040

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 프라미펙솔 원정답 유지하되 현행 2025 AASM에서 표준 일차 사용을 권하지 않는 augmentation 위험과 누락된 우선 약제를 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.irlssg.org/wp-content/uploads/2025/05/Tx-of-RLS-and-PLMD-2025.pdf
