---
type: qbank
schema_version: 1
id: medqa-us-train-003084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24029042efe10a670bc9eb4688bd016e89c6d3437bc255feb31c059e3e98f549
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "myotonic dystrophy"
  - "myotonia"
  - "ptosis"
  - "distal muscle weakness"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
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

9세 아이에게 눈꺼풀처짐과 손 근력저하가 있다. 손을 세게 쥐었다 펴라고 하면 바로 펴지 못하고, 엄지 근육을 두드린 뒤에도 수축이 느리게 풀린다. 가장 가능성 높은 진단은?

## 선택지

A. 척수성 근위축증
B. 뒤센 근이영양증
C. 중증근무력증
D. 근긴장성 이영양증

## 해설

수축 뒤 이완 지연은 근긴장증이다. 얼굴과 원위근 약화가 동반되면 근긴장성 이영양증을 고려하고 심장 전도 이상도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 근긴장성 이영양증을 근이완성 질환이라고 부른 모순을 교정하고 타진 후 이완 지연이 근긴장증임을 설명했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003084
- https://pubmed.ncbi.nlm.nih.gov/41488597/
