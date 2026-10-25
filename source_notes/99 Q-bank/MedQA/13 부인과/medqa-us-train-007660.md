---
type: qbank
schema_version: 1
id: medqa-us-train-007660
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f1edb2351ffe8882c6bab0d88c4de1a768a0d15e52f25634e82fa60ce677b05
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "bacterial vaginosis"
  - "Gardnerella vaginalis"
  - "vaginal discharge"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEuOq3oOyEsSDsp4jsl7wgKEJhY3RlcmlhbCBWYWdpbm9zaXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 4일간 지속된 질 분비물 때문에 내원했다. 통증이나 가려움은 없다. 월경은 27일 간격으로 규칙적이고 5일간 지속되며, 마지막 월경은 2주 전이었다. 두 명의 남성과 성관계를 하고 피임을 위해 질격막을 사용한다. 3개월 전 자궁경부 세포검사는 정상이었다. 중대한 질환 병력은 없고 약물도 복용하지 않는다. 체온은 37.3°C, 맥박 75회/분, 혈압 115/75 mm Hg이다. 골반검사에서 악취가 나는 회색 질 분비물이 보이며 분비물의 pH는 5.0이다. 질 분비물의 현미경 사진이 제시되어 있다. 다음 중 가장 가능성 높은 원인균은?

## 선택지

A. Escherichia coli
B. Neisseria gonorrhoeae
C. Gardnerella vaginalis
D. Candida albicans

## 해설

가려움 없이 악취 나는 회색 분비물과 높은 pH는 세균성 질증을 시사하며 보기 중 Gardnerella vaginalis(C)가 관련된다. Gardnerella는 바이러스가 아니라 세균이며, 질증은 여러 세균이 관련된 질 미생물 불균형이다. 원문의 현미경 사진은 제공되지 않았으므로 clue cell을 실제 관찰했다고 단정하지 않았다. 임상 묘사로 보기 내 판단은 가능하지만 모든 Amsel 진단 기준이 확인된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Gardnerella를 바이러스라고 한 오류 및 없는 현미경의 clue cell을 관찰했다고 쓴 해설을 교정했다.
- https://www.cdc.gov/std/treatment-guidelines/BV.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007660
