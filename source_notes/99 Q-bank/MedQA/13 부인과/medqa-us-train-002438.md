---
type: qbank
schema_version: 1
id: medqa-us-train-002438
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d1b89ed75e25fd219b40e56b7f1d153718a682aba1cba051e88e874ed40e379b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervical cancer screening"
  - "Pap smear"
  - "age 21 screening"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: complex
answer: A
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

22세 여성이 신체검사를 위해 시골 진료소를 방문했다. 주요우울장애 병력이 있고 매일 담배 한 갑을 5년간 피웠다. 현재 성생활은 하지 않지만 과거 성관계 경험은 있다. 매일 아침 시탈로프람을 복용한다. 심장 청진에서 왼쪽 상부 흉골 경계에 2/6등급 범수축기 잡음이 들린다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 자궁경부 세포검사
B. 자궁경부 세포검사와 HPV 검사
C. 질확대경검사와 생검
D. 고지혈증 선별검사

## 해설

미국 USPSTF/ACOG 체계에서 21–29세 평균위험 여성은 세포검사 단독 3년 간격을 사용하므로 미시행이라면 A가 적절하다. 현재 성생활 여부나 흡연이 검진 시작 연령을 결정하지 않는다. ACS는 다른 시작 연령·전략을 사용하므로 모든 학회가 동일하다고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 실제22세이며21세시작선별은미국USPSTF/ACOG기준임을명시.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002438
