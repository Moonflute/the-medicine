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

38세 환자는 밤에 쉬면 다리를 움직이고 싶고 걸으면 증상이 줄어든다. 하지불안증후군으로 진단했다. 철 상태를 평가해 보충이 필요하지 않고 악화 약물을 피했는데도 잠을 못 잔다. 장기 증상 조절의 첫 약으로 적절한 것은?

## 선택지

A. 프라미펙솔을 일률적인 장기 1차약으로 시작
B. 가바펜틴
C. 아미트립틸린
D. 디펜히드라민

## 해설

하지불안증후군에서 철과 악화 요인을 먼저 평가한다. 증상이 지속되면 가바펜틴 계열을 우선 고려할 수 있다. 도파민 효능제를 장기 사용하면 증상이 더 일찍 시작하고 심해지는 증강 현상이 생길 수 있어 일률적으로 쓰지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001040
- https://pubmed.ncbi.nlm.nih.gov/39324694/
- https://pubmed.ncbi.nlm.nih.gov/42203073/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 프라미펙솔 원정답 유지하되 현행 2025 AASM에서 표준 일차 사용을 권하지 않는 augmentation 위험과 누락된 우선 약제를 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.irlssg.org/wp-content/uploads/2025/05/Tx-of-RLS-and-PLMD-2025.pdf
