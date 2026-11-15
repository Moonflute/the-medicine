---
type: qbank
schema_version: 1
id: medqa-us-train-004746
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a3a92e24f8d05f98db49f64c1638eeca5ccb36e0b8dd761453b6e87390df251
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "영아 보툴리누스증"
  - "보툴리눔 독소"
  - "꿀 섭취"
  - "Infant botulism"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
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

6개월 영아가 변비가 시작된 뒤 수유량이 줄고 울음소리가 약해졌다. 진찰에서 양측 눈꺼풀처짐, 빠는 힘 저하, 전신 저긴장이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 척수성 근위축증
B. 비대날문협착증
C. 영아 보툴리눔증
D. 선천성 갑상샘기능저하증

## 해설

새로 생긴 변비에 뇌신경 증상과 이완성 근력저하가 이어지는 양상은 영아 보툴리눔증을 시사한다. 호흡 악화가 가능하므로 응급 평가와 전문 진료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 영아 보툴리눔증의 human immunoglobulin을 일반 IVIG가 아닌 특이 항독소로 명확화.
- https://www.fda.gov/media/150406/download

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004746
- https://www.cdc.gov/botulism/hcp/clinical-overview/infant-botulism.html
