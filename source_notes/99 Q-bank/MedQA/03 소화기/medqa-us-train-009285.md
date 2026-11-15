---
type: qbank
schema_version: 1
id: medqa-us-train-009285
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da62a75217891b8812c8ebbef930b2ba52ca1164f8df5dd71f699d460bba1e13
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "diabetic gastroparesis"
  - "당뇨병성 위마비"
  - "gastroparesis"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

당뇨병성 위마비가 있는 57세 여성이 조금만 먹어도 배가 차고 식후 구토를 한다. 기계적 폐쇄는 없고 4시간 검사에서 위배출 지연을 확인했다. 혈당을 조절하면서 우선 권할 식사법은?

## 선택지

A. 작은 입자·저지방 식사를 소량씩 자주 한다.
B. 지방이 많은 음식을 한 번에 충분히 먹는다.
C. 거친 생채소와 밀기울을 매 끼니 많이 먹는다.
D. 하루 한 번 큰 식사를 한다.

## 해설


위마비에서는 작게 다지거나 부드럽게 조리한 저지방 음식을 소량씩 나눠 먹으면 증상 완화에 도움이 된다. 혈당을 함께 조절하고, 식이 조절로 충분하지 않으면 약물 치료 등을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009285 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 당뇨병성 위배출 지연 의심 사례의 식이 A를 작은 입자·저지방 식이로 구체화; 증상만으로 확진하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9373497/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009285
- https://pubmed.ncbi.nlm.nih.gov/40976635/
- https://gastro.org/clinical-guidance/clinical-guidance-on-the-management-of-gastroparesis/
