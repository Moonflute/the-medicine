---
type: qbank
schema_version: 1
id: medqa-us-train-007603
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c7692edd12f396d5c8c28916e765bd3c34035932bcbc2e61bf423f1dc89dba4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "포도상구균 열상피부 증후군"
  - "황색포도상구균 독소"
  - "표재성 수포"
  - "점막 보존"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 아이에게 열과 함께 피부를 만지기 힘들 정도로 아픈 넓은 홍반과 얇고 쉽게 터지는 수포가 생겼다. 입 주변은 벗겨졌지만 입안과 결막에 미란은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 독성표피괴사용해
B. 수포성 농가진
C. 성홍열
D. 포도알균 열상피부 증후군

## 해설

넓은 피부 압통, 표재성 수포와 박리가 있으면서 점막이 보존되는 양상은 포도알균 열상피부 증후군을 시사한다. 수포성 농가진은 피부 병변이 대개 국소적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 입 주위 병변이 없다는 본문과 반대인 해설 및 질환명 오역을 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007603
- https://www.chop.edu/clinical-pathway/staphylococcal-scalded-skin-syndrome-clinical-pathway
