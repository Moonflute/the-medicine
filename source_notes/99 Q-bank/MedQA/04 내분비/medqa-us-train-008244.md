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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

21세 남자 대학생이 며칠 전 발견한 목의 덩어리로 갑상선암을 걱정해 내원했다. 3일 동안 설사와 얼굴의 열감이 있다. 아버지와 삼촌 모두 갑상선암을 진단받았다. 덩어리는 1 cm로 단단히 고정되어 있고 무통성이다. 초음파에서 낭성이 아닌 결절이 보이며 세침흡인이 필요하다. 원문은 이를 냉결절이라 부르지만 초음파만으로 섭취 기능을 판정할 수는 없다. 갑상선 기능은 정상이고 칼시토닌은 346 μg/mL이다. 이 환자에서 갑상선절제술을 시행해야 하는 유전자 변이는?

## 선택지

A. MEN1 유전자 변이
B. RET 유전자 변이
C. PPARγ 기능상실
D. BRAF 수용체 활성화 변이

## 해설


정답 B. 가족성 수질갑상선암/MEN2는 RET 원암유전자의 기능획득 변이와 연관된다. 가족력·갑상선 결절·높은 calcitonin은 이를 우려하게 한다. 초음파는 고형/낭성 등을 보지만 냉결절 여부는 핵의학 섭취 평가 용어이며 초음파만으로 판정하지 않는다. 원문 calcitonin μg/mL는 통상 pg/mL와 크게 다른 단위이므로 확인 없이 임의 환산하지 않는다. 유전성 수질암 의심 시 유전상담/검사와 수술 전 갈색세포종 배제가 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008244 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RET 원발성이 아닌 원암유전자 기능획득 변이. 초음파만으로 냉결절 판정 불가·calcitonin 단위 원문 이상을 명시, MEN2 수술 전 갈색세포종 평가 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4490627/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008244
