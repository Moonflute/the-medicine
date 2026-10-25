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
answer: D
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

어머니가 16세 아들을 데리고 가정의학과에 내원했다. 어머니는 성적이 떨어지고 수업을 빼먹으며 체중이 증가하고 눈이 자주 충혈되는 등 아들에게 문제가 있다고 말한다. 어머니와 따로 면담하자 환자는 위축되어 있고 사회력에 대해 물으면 때때로 화를 낸다. 학대와 성력은 부인한다. 이 행동의 가장 가능성 높은 원인을 평가하기 위한 초기 검사는 무엇인가?

## 선택지

A. 전혈구검사
B. 혈액 배양
C. 성매개감염(STI) 검사
D. 소변 독성검사

## 해설

학업·행동 변화, 체중 증가와 결막 충혈은 대마 등 물질 사용 가능성을 평가하게 한다. 제시된 검사 중 소변 독성 선별검사가 적절하지만, 음성이 모든 물질 사용을 배제하지 않고 양성도 현재 중독·사용장애나 행동 변화의 원인을 단독 확정하지 않는다. 검출 대상·시점·교차반응을 고려해 병력·진찰과 필요 시 확증 분석으로 해석한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008880

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 소변 선별검사 하나로 약물 사용을 배제한다는 과장 교정. 임상적 의심을 평가하는 선택으로 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/medical-devices/drugs-abuse-tests/drugs-abuse-home-use-test
