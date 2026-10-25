---
type: qbank
schema_version: 1
id: medqa-us-train-003818
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d7425a269bc93764f25d0330a0d6d450aeb4255e371afe632198232327bc846
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "opioid overdose"
  - "respiratory depression"
  - "miosis or unreactive pupils"
  - "naloxone"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhO2OuOycoOyCrOygnCDspJHrj4UgKE9waW9pZCBQb2lzb25pbmcpLm1k
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvRmx1bWF6ZW5pbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

한 남성이 공원에서 졸린 상태로 발견되어 응급실에 왔다. 소지품에 알프라졸람, 디아제팜, 대마초, 코카인, 알코올, 아세트아미노펜과 정체불명의 가루가 있었다. 호흡수는 9회/분이고 양쪽 동공은 빛에 반응하지 않았다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 플루마제닐
B. N-아세틸시스테인
C. 날록손
D. 지지요법, 티아민, 포도당

## 해설

의식저하와 느린 호흡은 opioid를 포함한 중독성 환기저하를 우려하게 한다. 기도·환기를 즉시 지지하면서 naloxone(C)을 투여해 호흡 회복을 평가할 수 있다. 동공 무반응 자체가 opioid에 특이한 것은 아니고 혼합 중독일 수도 있다. 만성 benzodiazepine 사용이나 발작 유발 동시섭취 가능성을 모르는 상태에서 flumazenil을 일률적으로 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동공 무반응만으로 opioid를 확진하는 오류 제거. 혼합 중독의 호흡억제에서 경험적 naloxone C 근거 보완.
- 공식/학회 근거: https://www.cdc.gov/stop-overdose/response/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003818
