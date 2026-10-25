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
question_type: investigation
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

52세 남성이 4개월 동안 지속된 불안과 피로로 내원했다. 두근거림, 근력 약화, 발한 증가, 배변 횟수 증가도 있다. 과거력은 특이사항이 없다. 음주와 흡연은 하지 않는다. 맥박 104회/분으로 불규칙하고 혈압 140/80mmHg이다. 양측 안구돌출과 양손의 미세한 떨림이 보인다. 갑상선 패널에서 예상되는 결과는 무엇인가?

## 선택지

A. TSH 감소, T4 증가, T3 증가
B. TSH 정상, T4 감소, T3 감소
C. TSH 정상, 총 T4 감소, 유리 T4와 T3 정상
D. TSH 증가, T4 증가, T3 증가

## 해설


정답 A. 안구돌출·발한·빈맥/부정맥과 떨림은 Graves병에 의한 원발성 갑상선기능항진증을 시사한다. 갑상선호르몬 증가가 뇌하수체 TSH를 억제하므로 TSH 감소, T4·T3 증가가 예상된다. 본문에는 체중감소가 제시되지 않아 실제 소견으로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008679 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문에 없는 체중감소 추가를 제거하고 Graves 항진의 예상패널 A를 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008679
