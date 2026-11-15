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
publication_status: "withheld"
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

25세 여성이 악취가 나는 회색 질 분비물로 내원했다. 가려움은 없고 질 분비물의 pH는 5.0이다. 현미경에서 표면이 세균으로 뒤덮인 질 상피세포가 관찰된다. 가장 가능성 높은 진단은?

## 선택지

A. 외음질 칸디다증
B. 트리코모나스 질염
C. 세균성 질증
D. 임균성 자궁경부염

## 해설

균일한 회색 분비물, pH 상승, 단서세포는 세균성 질증에 부합한다. 세균성 질증은 질내 미생물 균형이 바뀐 상태로, 가드네렐라 한 균의 검출만으로 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Gardnerella를 바이러스라고 한 오류 및 없는 현미경의 clue cell을 관찰했다고 쓴 해설을 교정했다.
- https://www.cdc.gov/std/treatment-guidelines/BV.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007660
