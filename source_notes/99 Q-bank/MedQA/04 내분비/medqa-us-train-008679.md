---
type: qbank
schema_version: 1
id: medqa-us-train-008679
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:641597c61a6258ebd01f359096c50e6d97ead3f32fce87e9fbcdee083960a330
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Graves disease"
  - "hyperthyroidism"
  - "thyroid function tests"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

29세 비임신 여성이 두근거림과 손떨림이 있다. TSH가 억제되고 유리 T4가 높으며 TSH 수용체 항체가 양성이다. 갑상선폭풍은 아니며 항갑상선제 치료를 선택했다. 우선 선택할 약제는?

## 선택지

A. 메티마졸
B. 프로필티오우라실
C. 프로프라놀롤 단독
D. 요오드화칼륨 단독

## 해설


임신 초기나 갑상선폭풍 등의 예외가 없다면 메티마졸이 일반적인 첫 항갑상선제다. 베타차단제는 증상을 줄이지만 갑상선호르몬 합성을 낮추는 치료를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008679 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문에 없는 체중감소 추가를 제거하고 Graves 항진의 예상패널 A를 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008679
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3871036/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12230266/
