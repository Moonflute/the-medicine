---
type: qbank
schema_version: 1
id: medqa-us-train-008880
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:82da883b4edcaa555757387aa514ce9868b7cd3a83e70f560be856b827d1f5a9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "substance use disorder"
  - "adolescent behavioral change"
  - "urine toxicology"
  - "Substance use disorder"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 청소년의 결석이 늘고 성적이 떨어졌다. 보호자는 물질 사용이 걱정된다고 하지만, 진찰에서 현재 중독을 시사하는 소견은 없다. 우선 평가할 방법은?

## 선택지

A. 보호자의 추정만으로 사용장애를 기록한다
B. 비밀보장의 범위와 예외를 설명하고 단독 면담에서 물질 사용을 선별한다
C. 당사자에게 알리지 않고 소변 약물검사부터 한다
D. 물질 사용을 먼저 인정하지 않으면 더 묻지 않는다

## 해설

행동 변화만으로 물질 사용을 진단할 수 없다. 안전 관련 비밀보장의 한계를 설명한 뒤 청소년과 단독으로 면담하고, 검증된 선별 도구와 다른 원인 평가를 활용한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008880
- https://crafft.org/use-the-crafft/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 소변 선별검사 하나로 약물 사용을 배제한다는 과장 교정. 임상적 의심을 평가하는 선택으로 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/medical-devices/drugs-abuse-tests/drugs-abuse-home-use-test
