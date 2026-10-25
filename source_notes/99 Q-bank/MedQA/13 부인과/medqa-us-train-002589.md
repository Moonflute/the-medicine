---
type: qbank
schema_version: 1
id: medqa-us-train-002589
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:617d3c29dd5e30c82857627bb95239363d19bd400906b0cccc9cb2c3273827f4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "gestational diabetes screening"
  - "50-g oral glucose challenge test"
  - "24-28 weeks gestation"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
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

22세 백인 G1 여성이 임신 29주 검진을 위해 내원했다. 과거력과 임신 경과는 정상이며 임신 중 13 kg이 증가했다. 다음 중 시행해야 할 선별검사는?

## 선택지

A. 비공복 50 g 포도당 경구부하검사
B. 공복 50 g 포도당 경구검사
C. 비공복 75 g 포도당 부하검사
D. HbA1c 측정

## 해설

통상 24–28주에 GDM 선별을 하지만 미시행 29주 임산부도 현재 검사한다. 2단계 전략에서는 비공복 50 g 부하 후 1시간 혈당(A)을 측정하고 양성이면 진단 OGTT로 이어간다. 75 g 1단계 OGTT는 금식이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문22세를24세로오역;29주미검사자는지금선별시행가능.
- https://doi.org/10.2337/dc26-s002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002589
