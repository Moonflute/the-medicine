---
type: qbank
schema_version: 1
id: medqa-us-test-000339
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a1a82cbbcb64468837862333729b6db1a9ae515da65365fe241273a6d6414bfe
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "오피오이드 금단"
  - "약물 사용장애"
  - "자율신경 과활성"
  - "Opioid withdrawal"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

장기간 복용하던 오피오이드 진통제가 끊긴 다음 날부터 콧물, 눈물, 소름과 복통·설사가 생겼다. 동공은 커져 있고 호흡은 느리지 않다. 가장 가능성 높은 상태는?

## 선택지

A. 오피오이드 중독
B. 오피오이드 금단
C. 알코올 중독
D. 항콜린성 중독

## 해설

오피오이드 금단에서는 산동, 콧물·눈물, 입모와 장운동 증가가 함께 나타날 수 있다. 중독에서 흔히 보는 의식 저하, 축동과 호흡 억제와 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000339
- https://pubmed.ncbi.nlm.nih.gov/39532476/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로니딘 원정답 유지. 원문에 없는 안구 충혈 대신 실제 콧물·눈물·입모와 교감항진에 근거하도록 해설 최소 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
