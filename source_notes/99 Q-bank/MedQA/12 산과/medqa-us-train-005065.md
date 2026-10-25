---
type: qbank
schema_version: 1
id: medqa-us-train-005065
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c751148098e61b101e7332bc523517902b8cd3ea360a4b59966e7119dbfdaf2d
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자간증"
  - "임신성 고혈압"
  - "황산마그네슘"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOqwhOymnSAoRWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL1Byb3BvZm9sLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

과거 간질로 발프로산을 복용했으나 10년 이상 발작 없이 중단했고, 기능성 발작 진단으로 플루옥세틴·클로나제팜을 복용하는 20세 여자가 통증성 복부 경련으로 응급실에 왔다. 5개월째 월경이 없었고 혈청 hCG는 100,000 mIU/mL, 소변 hCG와 단백은 양성이다. 혈압은 174/104 mmHg이고 평가 중 5분간 지속되는 전신 강직간대성 움직임이 한 차례 발생했다. 다음 중 가장 적절한 치료는?

## 선택지

A. 로라제팜
B. 황산마그네슘
C. 페노바비탈
D. 프로포폴

## 해설

임신 가능성이 확인된 여성에서 심한 고혈압·단백뇨와 전신 발작이 있으면 자간증을 우선 치료해야 하며 황산마그네슘(B)이 적절하다. 과거 간질·기능성 발작 병력이 있어도 현재 발작을 그 병력으로만 치부해서는 안 된다. 기도·산소화 확보, 혈압 조절과 분만 계획을 병행하고 지속 발작은 추가 응급 처치한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 경련이 발생한 자간증을 자간전증으로 잘못 표기; 원문 경련 병력 누락 복원.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005065
