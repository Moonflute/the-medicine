---
type: qbank
schema_version: 1
id: medqa-us-train-006015
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f97960d7119b1a3575191fc6aef02692fe7d76d2d64834fe354742fe83ed613
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 화농성 관절염"
  - "무릎 관절 감염"
  - "활액 분석"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
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
---

# MedQA US 임상문제

## 문제

3세 아이가 39℃ 고열과 붓고 뜨거운 무릎으로 왔다. 수동으로 조금만 움직여도 아프고 걷지 못한다. 순환은 안정적이고 관절액을 바로 채취할 수 있다. 먼저 확보할 검체는?

## 선택지

A. 인후 검체만 배양한다
B. 활액을 뽑아 세포 수와 그람염색·배양을 확인한다
C. 혈청 류마티스인자만 검사한다
D. 검체 없이 진통제만 투여하고 기다린다

## 해설

세균성 관절염이 의심되면 혈액배양과 활액을 얻고 항생제·배농을 신속히 준비한다. 불안정하거나 검체 채취가 지연될 때는 경험적 항생제를 기다리게 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 관절액 채취가 항생제의 위험한 지연을 정당화하지 않도록 조건을 명확화.
- https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006015
