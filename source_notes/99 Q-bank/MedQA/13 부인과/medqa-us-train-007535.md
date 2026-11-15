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

증상이 없는 18세 여성이 성생활을 시작한 뒤 자궁경부암 검진 시점을 묻는다. 국내 국가암검진 사업의 기본 일정은?

## 선택지

A. 지금부터 매년 자궁경부세포검사
B. 20세부터 2년마다 고위험 HPV 검사만 시행
C. 20세부터 2년마다 자궁경부세포검사
D. 25세부터 5년마다 세포검사와 HPV 공동검사

## 해설

국가암검진 사업은 20세 이상 여성에게 2년마다 자궁경부세포검사를 시행한다. 성생활을 시작했다는 사실만으로 이 사업의 검진 시작 연령이 앞당겨지지는 않는다. 증상이 있거나 별도 고위험 요인이 있는 사람의 진료는 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 18세 현재 선별 불필요, 21세부터 세포검사 q3y C 유지. 21–29세 HPV 공동검사가 선택이라는 잘못된 보충 삭제.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007535
- 국가암정보센터, 국가암검진 사업: https://www.cancer.go.kr/lay1/S1T261C262/contents.do
