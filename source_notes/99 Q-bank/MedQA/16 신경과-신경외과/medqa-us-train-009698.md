---
type: qbank
schema_version: 1
id: medqa-us-train-009698
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7114a0dda9ba8b1726b972853aa0a002ae138e742a553fb374ec5bbf8b85a8e0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "traumatic brain injury"
  - "외상성 뇌손상"
  - "enteral nutrition"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: complex
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

중증 두부외상 수술 뒤 기계환기 중인 환자가 혈역학적으로 안정됐다. 장이 기능하고 두개저 손상이나 위관 금기는 없다. 단기간 사용할 초기 영양 경로는?

## 선택지

A. 기관튜브가 있는 상태에서 경구 식사
B. 총정맥영양을 일률적으로 시작
C. 위관을 이용한 경장영양
D. 첫날부터 모든 환자에게 위루관 삽입

## 해설

경구 섭취가 어렵고 장이 기능하면 가능한 조기에 경장영양을 진행한다. 단기에는 위관 등 적절한 경로를 쓰고, 흡인 위험과 장기 필요성을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초기 비위관 경장영양 C 확인. 비위관을 장기 영양용으로 단정하고 정맥영양을 '전신 영양'으로 번역한 해설 교정.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009698
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13690351/
