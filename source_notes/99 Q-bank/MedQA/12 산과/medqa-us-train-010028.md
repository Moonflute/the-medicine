---
type: qbank
schema_version: 1
id: medqa-us-train-010028
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4c811d9bf90890675a8e658a1166703e49a8bae1a3ae2695d36af754100b170b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자간증"
  - "중증 전자간증"
  - "황산마그네슘"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOqwhOymnSAoRWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-ykkeymnSDsoITsnpDqsITspp0gKFNldmVyZSBQcmUtZWNsYW1wc2lhKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 36주 산모가 심한 두통과 반복 측정한 수축기 혈압 170 mmHg로 평가받던 중 전신 강직간대 발작을 했다. 기도와 산소화를 확보하면서 자간증 발작을 치료하고 재발을 막기 위한 1차 약은?

## 선택지

A. 디아제팜을 첫 약으로 정기 투여
B. 황산마그네슘
C. 페니토인
D. 라모트리진

## 해설

자간증의 발작 치료와 재발 예방에는 황산마그네슘을 우선 사용한다. 중증 고혈압 치료와 산모 안정화, 분만 준비를 별도로 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Mg를 혈압조절제로 오해하지 않도록 역할 교정.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010028
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
