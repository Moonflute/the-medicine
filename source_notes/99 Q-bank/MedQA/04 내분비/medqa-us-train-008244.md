---
type: qbank
schema_version: 1
id: medqa-us-train-008244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9be520501bfccaaa0a77be16beebce11dac7f5a76ceb665f993c1e3d0c6e70c2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "medullary thyroid carcinoma"
  - "RET mutation"
  - "MEN2"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: management
difficulty: standard
answer: B
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

21세 남자 대학생이 며칠 전 발견한 목의 덩어리로 갑상선암을 걱정해 내원했다. 3일 동안 설사와 얼굴의 열감이 있다. 아버지와 삼촌 모두 갑상선암을 진단받았다. 덩어리는 1 cm로 단단히 고정되어 있고 무통성이다. 초음파에서 낭성이 아닌 냉결절이 보이며 세침흡인이 필요하다. 갑상선 기능은 정상이고 칼시토닌은 346 μg/mL이다. 이 환자에서 갑상선절제술을 시행해야 하는 유전자 변이는?

## 선택지

A. MEN1 유전자 변이
B. RET 유전자 변이
C. PPARγ 기능상실
D. BRAF 수용체 활성화 변이

## 해설


칼시토닌이 크게 상승한 것은 수질 갑상선암(수질암)이며, 이는 RET 원발성 돌연변이와 연관된다. 따라서 RET 유전자 변이가 수술 적응증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008244
