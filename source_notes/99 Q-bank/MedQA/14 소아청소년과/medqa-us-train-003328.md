---
type: qbank
schema_version: 1
id: medqa-us-train-003328
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a213dcee93bdfef0c91dcd1ffb1f9364b5207cff0683c2685b8cc879b8fb8a14
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "rickets"
  - "vitamin D deficiency"
  - "metabolic bone disease"
  - "malnutrition"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67mE7YOA66-8IEQg6rKw7ZWN7KadIChWaXRhbWluIEQgRGVmaWNpZW5jeSkubWQ
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 아이가 성장 둔화와 양쪽 휜 다리로 왔다. X선에서 성장판 주위의 골간단이 벌어지고 가장자리가 불규칙하다. 25-하이드록시비타민 D는 매우 낮고 식사로 먹는 칼슘도 부족하다. 영양 구루병 치료는?

## 선택지

A. 비타민 D만 보충하고 칼슘 섭취는 제한한다
B. 비타민 D를 치료 용량으로 보충하고 충분한 칼슘도 함께 공급한다
C. 비타민 D와 칼슘 대신 철분을 보충한다
D. 뼈가 휘었으므로 영양 교정 없이 수술만 한다

## 해설

확진된 영양 구루병은 예방 용량을 유지하는 것과 달리 비타민 D를 치료 용량으로 투여한다. 무기질화 회복에는 칼슘도 충분해야 하며 성장과 검사 수치를 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 없는 손목 영상을 판독한 우레아성 골절 등 무관한 용어를 제거하고 임상적으로 구루병을 지지하는 단서만 사용했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003328
- https://pubmed.ncbi.nlm.nih.gov/26745253/
