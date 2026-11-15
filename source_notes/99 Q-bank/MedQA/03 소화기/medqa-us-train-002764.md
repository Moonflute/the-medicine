---
type: qbank
schema_version: 1
id: medqa-us-train-002764
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a7bbfee862636a6d89104cd2560207a1bf6ca5d83e4997bf87aca5e39980d53
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "chronic pancreatitis"
  - "pancreatic exocrine insufficiency"
  - "steatorrhea"
  - "low fecal elastase"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEg7LeM7J6l7Je8IChDaHJvbmljIFBhbmNyZWF0aXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: management
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 췌장염 환자가 지방변과 체중 감소를 보인다. 고형 대변에서 엘라스타제가 70 μg/g으로 확인됐다. 영양 상태를 회복시키기 위해 치료를 어떻게 시작하는가?

## 선택지

A. PPI를 식전 단독 투여
B. 췌장효소를 식사와 함께 보충
C. 췌장효소를 식사와 무관하게 취침 전에 한 번 복용
D. 지방을 완전히 끊고 효소는 투여하지 않음

## 해설


증상과 현저히 낮은 대변 엘라스타제는 외분비 췌장기능부전을 지지한다. 췌장효소는 음식과 섞여야 하므로 식사 및 간식과 함께 투여하고 영양 상태를 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 복통에 지방변·새 당뇨는 만성 췌장 외분비저하를 뒷받침; 낮은 trypsin/stool elastase B. 누락 CT 세부 소견은 가정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002764
- AGA 췌장 외분비기능부전 임상 권고: https://pubmed.ncbi.nlm.nih.gov/37737818/
