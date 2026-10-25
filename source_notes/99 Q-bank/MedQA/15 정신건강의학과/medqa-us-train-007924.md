---
type: qbank
schema_version: 1
id: medqa-us-train-007924
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a02d3c04e0f5faf0972b1d22c8f591520fca1419d8fe8d1e57cb981f8342a15
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "schizophrenia"
  - "auditory hallucinations"
  - "psychosis duration >6 months"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 약혼자의 요청으로 지난 8개월간의 환청을 평가받기 위해 내원했다. 약혼자는 환자가 자신의 생각이 소리 내어 말하는 것처럼 들린다고 자주 말한다고 한다. 환청은 최소 1개월 이상 간헐적으로 발생했다. 고혈압 병력이 있고 리시노프릴과 종합비타민을 복용하지만 자주 거른다. 7개월 전 제시간에 출근하지 않아 경비원 일을 잃었다. 혈압 132/82 mm Hg, 맥박 72회/분, 호흡수 18회/분, 체온 36.7°C(98.1°F)이다. 정동이 둔화되어 있고 시선이 창문과 문 사이를 오가며, 지저분하고 악취가 난다. 대화에 집중하기 어렵고 주변 상황을 잘 이해하지 못한다. 소변 독성검사는 음성이다. 이 환자의 정확한 진단은?

## 선택지

A. 조현병
B. 조현양상장애
C. 분열성 인격장애
D. 조현정동장애

## 해설

8개월에 걸친 장애 경과, 최소 한 달 단위의 환청과 기능저하·음성증상이 있어 제시된 선택지 중 조현병이 적절하다. 6개월은 전체 장애 징후의 기간으로 전구·잔류 증상을 포함할 수 있고, 양성 증상이 내내 6개월 지속돼야 한다는 뜻은 아니다. 뚜렷한 주요 기분삽화가 없어 조현정동장애를 지지하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007924

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 조현병의 6개월 기준을 양성 증상 자체가 6개월 지속해야 하는 것으로 설명한 오류 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
