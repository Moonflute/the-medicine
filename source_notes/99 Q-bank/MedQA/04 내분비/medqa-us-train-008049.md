---
type: qbank
schema_version: 1
id: medqa-us-train-008049
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b28b937f085d4d30d13a925802eb35a665b22440cec9d5762a47ee34aa1fe47
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "exogenous hyperthyroidism"
  - "thyrotoxicosis"
  - "weight-loss supplement"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
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

28세 여성이 두근거림과 체중 감소로 내원했다. 최근 체중 감량을 목적으로 성분이 불명확한 약을 복용했다. TSH는 억제되고 유리 T4는 높다. 갑상선 요오드 섭취율과 혈청 갑상선글로불린은 모두 낮고 항갑상선글로불린 항체는 음성이다. 가장 가능성 높은 원인은?

## 선택지

A. 그레이브스병
B. 무통성 갑상선염
C. 외인성 갑상선호르몬 섭취
D. 독성 갑상선선종

## 해설


외부에서 호르몬을 복용하면 갑상선 자체 활동이 억제되어 요오드 섭취율과 갑상선글로불린이 모두 낮아질 수 있다. 파괴성 갑상선염에서는 섭취율은 낮아도 갑상선글로불린은 보통 증가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008049 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 한방 감량제 이후 갑상선중독 증상은 외인성 호르몬 C 의심이나 제품 성분과 검사 없이 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008049
- https://doi.org/10.1089/thy.2016.0229
