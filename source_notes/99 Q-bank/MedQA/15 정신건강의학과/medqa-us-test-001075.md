---
type: qbank
schema_version: 1
id: medqa-us-test-001075
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7b4b7a7a2300459263d0ee505bb446499ee9835a0c93b27bf558674ed90d0149
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "오피오이드 금단"
  - "메타돈 유지치료"
  - "자율신경 항진"
  - "Opioid withdrawal"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9OYWx0cmV4b25lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

오피오이드 사용장애 환자가 금단 치료를 마치기 전 진료실에서 퇴원 뒤 계획을 상담한다. 오피오이드 사용과 과량 사용 위험을 장기적으로 줄이기 위해 가장 적절한 계획은?

## 선택지

A. 금단 증상만 가라앉으면 후속 치료를 종료한다
B. 벤조디아제핀을 장기 치료로 대신 사용한다
C. 중독 전문 진료에 연결해 근거 기반 유지치료와 추적, 과량 사용 예방을 계획한다
D. 증상이 다시 생기면 한 번씩만 응급실에서 치료한다

## 해설


해독이나 단기 금단 치료만으로는 오피오이드 사용장애를 충분히 치료할 수 없다. 재사용과 과량 사용을 줄이려면 지속 치료와 위해 감소를 함께 계획한다. 사용할 약은 국내 허가·이용 가능성을 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001075
- https://pubmed.ncbi.nlm.nih.gov/39532476/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. '입모양 소름' 오기를 입모로 수정. 오피오이드 금단에서 메타돈 원정답·해설 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
