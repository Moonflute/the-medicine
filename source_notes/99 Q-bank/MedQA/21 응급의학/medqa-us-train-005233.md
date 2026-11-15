---
type: qbank
schema_version: 1
id: medqa-us-train-005233
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e11eed344f57f70a4fa9e59ecbfaf79de9d87fc9109051e99befdb6343c584b8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "오피오이드 중독"
  - "호흡억제"
  - "날록손"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9OYWx0cmV4b25lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 환자가 반응이 없고 호흡수가 분당 6회다. 혈당은 정상이고 동공이 작다. 아편유사제에 의한 호흡억제가 의심된다. 기도·환기를 보조하면서 투여할 약은?

## 선택지

A. 플루마제닐
B. 날트렉손
C. 메타돈
D. 날록손

## 해설

날록손은 급성 아편유사제 중독의 호흡억제를 역전한다. 투여를 기다리느라 환기를 늦추지 않으며, 회복 후에도 다시 호흡이 억제되는지 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 본문의 pinpoint pupil을 동공확대로 바꾼 해설 오류 교정.
- 공식/학회 근거: https://www.cdc.gov/stop-overdose/response/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005233
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
