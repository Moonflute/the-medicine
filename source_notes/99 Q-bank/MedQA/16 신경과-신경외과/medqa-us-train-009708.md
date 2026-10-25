---
type: qbank
schema_version: 1
id: medqa-us-train-009708
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27852dd8d2b329a2323a73a47ae503836caa6f111c13e41551840b0e31f5107c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Creutzfeldt-Jakob disease"
  - "크로이츠펠트-야코프병"
  - "prion accumulation"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tgazroZzsnbTsuKDtjqDtirgt7JW87L2U7ZSE67ORIChDcmV1dHpmZWxkdC1KYWtvYiBEaXNlYXNlKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 5개월 동안 진행된 기억력 저하로 내원했다. 최근 2주 동안 옷 입기와 집으로 돌아오는 길 찾기도 어려워졌고 자발적으로 호전되는 반복적 경련이 있었다. 고혈압 외에 병력은 없고 히드로클로로티아지드를 복용한다. 사람과 장소만 지남력이 있으며 물체 이름을 떠올리지 못하고 읽지 못하며 물체 인식이 어렵다. 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 돌연변이 프리온 축적
B. 중증 뇌허혈
C. 흑질 변성
D. 뇌척수액 흡수 감소

## 해설

수개월 내 진행하는 치매와 근간대경련 양상은 CJD를 시사한다. 선택지 A는 병적인 프리온 축적을 의도한다. 정확한 기전은 정상 프리온 단백질이 비정상 구조로 접혀 축적하고 다른 단백질의 구조변화를 유도하는 것으로, 모든 CJD가 PRNP 유전자 돌연변이 때문인 것은 아니다. 본문에 없는 실신을 추가할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CJD A의 오접힌 단백질 기전을 교정하고 원문 mutant를 모든 산발성 질환의 유전자 돌연변이로 일반화하지 않음.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009708
