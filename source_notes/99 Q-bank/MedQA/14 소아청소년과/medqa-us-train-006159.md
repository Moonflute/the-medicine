---
type: qbank
schema_version: 1
id: medqa-us-train-006159
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:148f7ccc9523469042d36dba61977e549bc992511497194e83de7d9180291f9b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 비만"
  - "성조숙증"
  - "비만 합병증"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "고도 비만 남아의 가장 타당한 합병증을 성조숙증 C에서 고혈압 B로 변경. 이미 높은 혈압이 있으며 남아 비만을 성조숙증으로 단정할 근거 부족."
---

# MedQA US 임상문제

## 문제

11세 아이의 BMI가 연령·성별 99백분위수다. 아직 비만 관련 대사 합병증을 평가한 적은 없다. 올바른 초기 평가는?

## 선택지

A. 키가 계속 자라고 있으므로 성인기까지 검사하지 않는다
B. 혈압을 적절한 커프로 측정하고 혈당, 지질, ALT를 평가한다
C. 공복 인슐린만 측정해 모든 대사 위험을 판단한다
D. 무증상이어도 뇌하수체 MRI부터 시행한다

## 해설

10세 이상 소아청소년의 비만에서는 혈압과 당대사, 이상지질혈증, 대사 관련 지방간 위험을 함께 평가한다. 한 번 높게 나온 혈압만으로 고혈압을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고도 비만 남아의 가장 타당한 합병증을 성조숙증 C에서 고혈압 B로 변경. 이미 높은 혈압이 있으며 남아 비만을 성조숙증으로 단정할 근거 부족.
- https://doi.org/10.1542/peds.2022-060640

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006159
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11000513/
