---
type: qbank
schema_version: 1
id: medqa-us-train-007388
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:602afa24d4f55c7246f722cea64d3d534539c8c00d7da2e53ee82043008cc77c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "수술 후 창상 감염"
  - "자궁절제술 합병증"
  - "수술부위 감염"
  - "발열"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

복식 자궁절제술 7일 뒤 절개 피부가 벌어져 고름이 나오고 주위 홍반과 38.6℃ 발열이 있다. 근막은 닫혀 있고 깊은 농양은 없다. 처치는?

## 선택지

A. 항생제만 투여하고 창상을 닫아 둔다
B. 절개창을 열어 배농·배양하고 전신 항생제를 병행한다
C. 발적 부위를 소독한 뒤 즉시 다시 봉합한다
D. 배액 없이 발적의 크기만 추적한다

## 해설


고름이 찬 절개 감염에는 감염된 봉합부를 열어 배농하고 배양한다. 발열과 넓은 홍반처럼 전신 반응이 있으면 전신 항생제도 추가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007388
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/
