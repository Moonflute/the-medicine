---
type: qbank
schema_version: 1
id: medqa-us-train-008835
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bbf2196f5e16dbb311272ef9bda36e5df8a054442495765698b334f73836c5f5
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "chronic myeloid leukemia"
  - "BCR-ABL"
  - "Philadelphia chromosome"
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

54세 여성이 한 달 동안 지속된 왼쪽 상복부 불편감으로 내원했다. 최근 약간 피곤하기도 하다. 특별한 질환 병력이나 복용약은 없다. 활력징후는 정상이다. 타진에서 비장 크기는 15cm(5.9인치)이다. 그 외 신체검사는 정상이다. 혈색소 10g/dL, MCV 88μm³, 백혈구 65,000/mm³, 혈소판 500,000/mm³이고 말초혈액 도말 사진 두 장이 제시되어 있다. 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. Auer 소체
B. JAK2 돌연변이
C. 필라델피아 염색체
D. 15번과 17번 염색체 사이 전좌

## 해설


백혈구 65,000/µL, 혈소판 500,000/µL, 비장 비대, 그리고 필라델피아 염색체 양성은 만성 골수성 백혈병(CML)을 시사한다. Auer 소체는 급성 골수성 백혈병, JAK2는 골수증식성 질환, 15·17 전위는 급성 전골수성 백혈병과 관련된다. 따라서 필라델피아 염색체가 가장 가능성 높은 소견이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008835
