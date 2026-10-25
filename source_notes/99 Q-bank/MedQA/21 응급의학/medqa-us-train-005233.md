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
answer: A
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

25세 남자가 집에서 거의 반응이 없는 상태로 발견되어 응급실에 왔다. 과도한 음주와 불법 약물 사용력이 있고 명령에는 반응하지 않지만 통증에 사지를 움츠린다. 호흡수 8회/분, 혈당 80 mg/dL, 동공은 축동되어 느리게 반응하며 팔과 다리에 주사 자국이 있다. 다음 중 정맥으로 투여할 가장 적절한 약물은?

## 선택지

A. 날록손
B. 펜톨아민
C. 메타돈
D. 날트렉손

## 해설

의식저하·저호흡·축동과 주사 흔적은 opioid 중독에 맞는다. Bag-mask 환기를 유지하면서 정맥 naloxone(A)으로 호흡 회복을 평가한다. 본문 동공은 산동이 아니라 축동이다. Methadone은 급성 해독제가 아니며 naltrexone은 이런 응급 호흡부전의 적합한 해독제로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 본문의 pinpoint pupil을 동공확대로 바꾼 해설 오류 교정.
- 공식/학회 근거: https://www.cdc.gov/stop-overdose/response/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005233
