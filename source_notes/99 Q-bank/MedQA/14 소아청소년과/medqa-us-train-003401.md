---
type: qbank
schema_version: 1
id: medqa-us-train-003401
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1dd642a76869bffb013c774b29ffc30f2bfde5b3d82e6cb6a874795b692a750a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal opioid withdrawal"
  - "neonatal abstinence syndrome"
  - "irritability"
  - "morphine therapy"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yLoOyDneyVhCDquIjri6gg7Kad7ZuE6rWwIChOZW9uYXRhbCBBYnN0aW5lbmNlIFN5bmRyb21lKS5tZA
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 G1P0 여성이 5시간 동안 3~5분마다 반복되는 심한 복통으로 응급실에 왔다. 정기적인 산전 관리는 받지 않았지만 마지막 월경은 9개월 전쯤이었다. 약물 사용은 부인하며 산모의 호흡수는 분당 8회였다. 응급 분만실에서 남아를 출산했고 5분과 10분 Apgar 점수는 9점이었다. 몇 시간 후 신생아가 매우 보채며 높은 음조로 울고, 땀을 많이 흘리며 콧물을 흘리고 팔다리를 허우적거리는 것을 간호사가 발견했다. 이 환자에게 필요한 약물 치료는?

## 선택지

A. 아세트아미노펜
B. 날록손
C. 페노바르비탈
D. 모르핀

## 해설

고음 울음·발한·콧물·과민성은 신생아 오피오이드 금단을 시사한다. 환경 자극 감소와 수유·돌봄 지원을 먼저 제공하며, 심한 증상이 지속되어 약물치료가 필요한 경우 보기 중 모르핀(D)이 적절하다. 날록손은 금단을 악화시킬 수 있다. 모든 노출 신생아에게 처음부터 모르핀을 투여하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산모 호흡수 8회/분의 원문 단서를 복원하고 오피오이드 금단의 비약물적 우선 접근과 약물 적응증을 구분.
- https://publications.aap.org/pediatrics/article/146/5/e2020029074/75310/Neonatal-Opioid-Withdrawal-Syndrome?autologincheck=redirected

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003401
