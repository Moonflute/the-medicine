---
type: qbank
schema_version: 1
id: medqa-us-train-009534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ae9343c654861554097b60e369ce5f7292dfccb52ea8a73b630bee2f293f1e6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "severe dehydration"
  - "중증 탈수"
  - "hypernatremia"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOuCmO2KuOulqO2YiOymnSAoSHlwZXJuYXRyZW1pYSkubWQ
difficulty: complex
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

2세 아이가 많은 물설사 뒤 처졌다. 사지가 차고 모세혈관 재충만은 4초, 혈압은 72/45mmHg이다. 혈청 나트륨은 155mmol/L다. 가장 먼저 할 수액 처치는?

## 선택지

A. 0.45% 생리식염수를 빠르게 투여한다
B. 5% 포도당 수액으로 나트륨을 신속히 낮춘다
C. 혈청 나트륨이 정상화될 때까지 수액을 미룬다
D. 0.9% 생리식염수로 즉시 정맥 소생한다

## 해설

고나트륨혈증이 있어도 쇼크에서는 등장성 수액으로 순환을 먼저 회복시킨다. 안정화한 뒤 혈중 나트륨을 반복 확인하면서 남은 수분 부족을 서서히 교정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저혈압을 단정하지 않고 관류 저하의 초기 등장액과 후속 고나트륨 교정 속도를 구별.
- https://www.rch.org.au/clinicalguide/guideline_index/Hypernatraemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009534
- https://www.rch.org.au/clinicalguide/guideline_index/hypernatraemia/
- https://www.nice.org.uk/guidance/CG84/chapter/recommendations
