---
type: qbank
schema_version: 1
id: medqa-us-train-007535
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69e24fc7f00be454c56a25d44fdf55cd5820bd3b93d8df9d32b9af67e1e7a3f0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부암 선별"
  - "자궁경부 세포검사"
  - "21세 시작"
  - "HPV"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18세 여자가 정기 검진을 위해 내원했다. 특별한 증상은 없는 대학생이다. 2갑년의 흡연력이 있고 술은 가끔 마신다. 15세에 첫 성관계를 했고 성 파트너는 2명이다. 경구피임약과 차단피임을 사용한다. 이모가 자궁경부암을 앓았다. 다음 중 이 환자의 자궁경부암 선별검사에 대한 설명으로 옳은 것은 무엇인가?

## 선택지

A. 가족력 때문에 매년 자궁경부 세포검사가 필요하다
B. 차단피임을 사용하는 한 자궁경부 세포검사가 필요 없다
C. 21세가 된 후 3년마다 선별검사를 받아야 한다
D. 21세 미만 성생활 여성에서는 HPV 검사가 자궁경부 세포검사보다 선호된다

## 해설

평균위험 환자는 현재 18세에 선별검사를 하지 않고, 제시된 USPSTF 전략에서는 21–29세에 세포검사 단독을 3년마다 시행한다(C). 이모의 자궁경부암이나 성생활 시작만으로 더 일찍 매년 검사하지 않는다. 21–29세의 정기 공동검사를 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 18세 현재 선별 불필요, 21세부터 세포검사 q3y C 유지. 21–29세 HPV 공동검사가 선택이라는 잘못된 보충 삭제.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007535
