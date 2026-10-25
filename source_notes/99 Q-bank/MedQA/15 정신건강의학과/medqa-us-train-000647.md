---
type: qbank
schema_version: 1
id: medqa-us-train-000647
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b7d3e72db050747a8b320b02ac5b643ca6a0948f5ff8a92c364351880a7f52b2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "nicotine dependence"
  - "Nicotine dependence"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByZW5vcnBoaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 니코틴 의존증 치료를 위해 정신건강의학과에 내원하였다. 그는 지난 20년간 헤비 스모커였다. 그는 여러 번 금연을 시도했으나 실패하였다. 그는 니코틴 의존증으로 여러 의사를 만났다. 그들은 니코틴 대체 요법(nicotine replacement therapy)과 바레니클린(varenicline)을 처방하였다. 그는 또한 두 가지 항우울제를 복용했고 상담 치료(talk therapy)에도 참여하였다. 그는 정신건강의학과 의사에게 다른 대안이 있는지 묻는다. 정신건강의학과 의사는 니코틴 대체 요법, 비니코틴 약물 요법, 상담 치료가 니코틴 의존증 관리를 위한 최선의 선택지라고 설명한다. 의사는 환자에게 1차 약물 치료가 실패했기 때문에 2차 비니코틴 약물 요법을 사용할 수 있다고 말한다. 다음 중 정신건강의학과 의사가 이 환자의 니코틴 의존증을 관리하기 위해 가장 사용할 가능성이 높은 약물은 무엇인가?

## 선택지

A. 부프레노르핀(Buprenorphine)
B. 클로니딘(Clonidine)
C. 로라제팜(Lorazepam)
D. 토피라메이트(Topiramate)

## 해설

원문은 니코틴 대체요법, 바레니클린과 항우울제 등 선행 치료에 실패한 뒤의 2차 약제를 묻는다. 제시된 약물 중 클로니딘이 비니코틴성 금연 보조의 2차 선택에 해당한다. 니코틴 대체요법 자체를 비니코틴 약물이라고 분류하지 않는다. 클로니딘은 저혈압·진정 등 부작용을 고려해야 하는 약물이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000647

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 니코틴 대체제를 '비니코틴 약물'로 묶은 분류 오류 제거. 원문 2차 클로니딘 정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
