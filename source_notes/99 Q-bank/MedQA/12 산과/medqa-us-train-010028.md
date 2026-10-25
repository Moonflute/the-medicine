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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 초임부가 임신 36주에 심한 전두부 두통으로 입원했다. 초기 활력징후는 혈압 170/90 mmHg, 심박수 분당 85회, 호흡수 분당 15회, 체온 36.9℃이고 태아 심박수는 분당 159회이다. 하지에 함요부종이 있고 요시험지에서 단백뇨 2+가 보인다. 평가 중 전신 강직간대발작이 발생했다. 다음 중 발작을 조절하기 위해 사용해야 하는 약물은?

## 선택지

A. 디아제팜
B. 페니토인
C. 황산마그네슘
D. 라모트리진

## 해설

고혈압·단백뇨와 전신 발작은 자간증이며 경련 치료·재발 예방에 황산마그네슘(C)을 사용한다. 혈압강하제는 별도로 필요할 수 있으며 Mg가 항고혈압제를 대체하지 않는다. 호흡·반사·신기능을 감시하며 안정화 후 분만을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Mg를 혈압조절제로 오해하지 않도록 역할 교정.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010028
