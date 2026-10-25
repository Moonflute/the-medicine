---
type: qbank
schema_version: 1
id: medqa-us-train-005973
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:332db3a5d104d71edc2636f3161f93916346fbe1a9617aa123f6a80fec5af092
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부암 선별검사"
  - "HPV 검사"
  - "유방암 선별검사"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 여성이 골반검사와 자궁경부 세포검사를 위해 내원했다. 11세 초경 이후 월경은 28일 간격으로 규칙적이고 5일간 지속된다. 마지막 월경 첫날은 3주 전이었다. 남편과 성생활을 하며 경구피임약을 복용한다. 마지막 자궁경부 세포검사는 3년 전이었고 유방촬영술은 받은 적이 없다. 어머니와 이모가 유방암으로 사망했다. 골반검사에서 질과 자궁경부는 정상이고 양손검사에서 자궁은 정상 크기이며 부속기 종괴는 만져지지 않는다. 다음 중 현재 가장 적절한 건강관리 권고는 무엇인가?

## 선택지

A. 지금 자궁경부 세포검사와 HPV 검사를 시행하고 매년 반복, 유방촬영술은 40세에 시행
B. 자궁경부 세포검사는 5년마다, 유방촬영술은 40세에 시행
C. 자궁경부 세포검사만 매년 시행, 유방촬영술은 50세에 시행
D. 지금 자궁경부 세포검사와 HPV 검사를 시행하고 5년마다 반복, 유방촬영술은 40세에 시행

## 해설

현재 공동검사를 선택하면 음성 결과 이후 5년 간격으로 추적하는 D가 보기 중 적절하다. 다만 어머니와 이모의 유방암 가족력은 별도로 유전성 위험 평가·상담이 필요하며 위험도에 따라 유방 선별 시기와 방법을 조정한다. 모든 30세 여성에게 공동검사만 가능한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 30세 공동검사 5년 D는 유효한 선별 전략이다. 모계 유방암 가족력을 무시한 보편적 40세까지 대기 단정을 교정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening
- https://www.uspreventiveservicestaskforce.org/uspstf/document/RecommendationStatementFinal/brca-related-cancer-risk-assessment-genetic-counseling-and-genetic-testing
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005973
