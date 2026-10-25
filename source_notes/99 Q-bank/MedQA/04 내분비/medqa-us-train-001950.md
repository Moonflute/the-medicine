---
type: qbank
schema_version: 1
id: medqa-us-train-001950
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b1b75fbfb24070bf5d026df2fab1c9ff6b05588e9eaad22796a8098d6975309c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "primary hyperparathyroidism"
  - "MEN2A"
  - "medullary thyroid carcinoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: mechanism
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

불안, 만성 변비, 만성 두통 및 만성 고혈압 병력이 있는 34세 환자가 음낭으로 방사되는 심한 오른쪽 옆구리 통증으로 응급실에 왔다. 결석 분석이 시행되었고 고혈압이 지속되며 칼슘과 PTH가 모두 상승해 있다. 다음 중 이 환자 상태의 잠재적 합병증을 나타내는 갑상선 조직은 무엇인가?

## 선택지

A. 갑상선 수질암
B. 갑상선 유두암
C. 림프종
D. 갑상선 여포암

## 해설


원발성 부갑상선 기능항진증과 고칼슘혈증·고PTH는 MEN 2A와 연관되며, 이때 동반되는 갑상선 암은 수질암이다. 따라서 잠재적 합병증을 나타내는 갑상선 조직은 수질암이다. 다른 갑상선 암은 MEN 2A와 관련이 적다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 A/해설 읽음. 고Ca·고PTH/결석과 고혈압·두통에서 MEN2A의 수질암 연관이 보기 중 합당. 원문은 조직 슬라이드를 언급하지만 현 선지는 진단명이 명시되어 명칭 비교는 가능하며, 슬라이드/결정 이미지 자체를 검증한 것은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001950
