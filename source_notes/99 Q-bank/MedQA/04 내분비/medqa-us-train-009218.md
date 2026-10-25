---
type: qbank
schema_version: 1
id: medqa-us-train-009218
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43f8592451593dd740c02159c3fa0756a45acbdfd59822bb83baf38eea3049cc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Graves disease"
  - "그레이브스병"
  - "hyperthyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: investigation
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 불면, 설사, 불안, 모발 가늘어짐, 전신 근력저하를 호소하며 내원했다. 가족력으로 제1형 당뇨병과 갑상선암이 있다. 일주일에 와인 1~2잔을 마신다. 활력징후는 특이사항이 없다. 진찰에서 양측 안구돌출도 보인다. 갑상선 패널에서 예상되는 결과는 무엇인가?

## 선택지

A. TSH 감소, T4 증가, T3 증가
B. TSH 감소, T4 감소, T3 감소
C. TSH 증가, T4 증가, T3 증가
D. TSH 감소, T4 증가, T3 감소

## 해설


정답 A. 불안·불면·설사·전신 근력저하와 양측 안구돌출은 Graves병에 의한 갑상선기능항진을 시사한다. 갑상선호르몬 증가의 음성되먹임으로 TSH는 억제되고 T4·T3가 증가할 것으로 예상된다. 본문에는 체중감소가 제시되지 않아 사실로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009218 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 없는 체중감소를 삭제하고 Graves 임상상–저TSH/고T4,T3 A 연결.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009218
