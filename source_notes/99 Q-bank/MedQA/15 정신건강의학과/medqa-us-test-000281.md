---
type: qbank
schema_version: 1
id: medqa-us-test-000281
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2ad3b32ad76059f8db94c13c2ce34f9bf334a8a2c9ec74afc225bb032dca0cf2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "특정공포증"
  - "비행공포증"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2KueyglSDqs7Xtj6zspp0gKFNwZWNpZmljIFBob2JpYSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 환자가 여러 해 동안 비행기 탑승을 피했다. 탑승을 생각하면 심하게 불안하지만 평소 일상에서는 예기치 않은 공황발작이 없다. 비행 공포가 직장 생활에 지장을 주며 장기 해결을 원한다. 적절한 치료는?

## 선택지

A. 비행하는 날마다 벤조디아제핀에만 의존한다
B. 비행과 관련된 자극을 앞으로도 전부 피한다
C. 두려운 상황에 단계적으로 노출하는 치료를 한다
D. 비행 전에 항정신병약을 복용한다

## 해설


특정 상황에 대한 지속적인 두려움과 회피가 중심이면 특정공포증을 고려한다. 안전한 환경에서 두려운 상황을 점차 연습하는 노출 치료가 핵심이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000281
- https://pubmed.ncbi.nlm.nih.gov/35900161/
- https://pubmed.ncbi.nlm.nih.gov/25081580/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 특정 비행 공포·회피·기능장애와 한국어 해설 및 CBT 정답 일치. 누락된 18시간 운전 일화는 핵심 진단·정답을 바꾸지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
