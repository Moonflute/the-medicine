---
type: qbank
schema_version: 1
id: medqa-us-train-007601
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c7d4fe73a607a5b90da5f0d0da183ef48823d1c71f79fae4f50fb3877c0cd71f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병형 장애"
  - "정신병적 증상"
  - "음성 증상"
  - "망상"
  - "Schizophrenia"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 급성 초조와 이상행동으로 여자친구와 함께 응급실에 내원했다. 여자친구는 지난 3개월 동안 환자가 위축되고 예전에 즐기던 취미를 중단했으며 한 달 전에는 출근하지 않아 직장을 잃었다고 한다. 그동안 FBI가 자신을 감시하고 마음을 조종한다고 믿어 아파트를 거의 나가지 않았다. 고등학교 때 마리화나를 가끔 피웠지만 5년 전에 끊었다. 신체 및 신경학적 검사는 정상이다. 정신상태검사에서 혼돈되고 의심이 많으며 현저한 정신운동성 초조가 있다. 말은 와해되어 있고 정동은 불안정하다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 분열정동장애
B. 단기 정신병적 장애
C. 조현병형 장애
D. 망상장애

## 해설

FBI가 감시하고 마음을 조종한다는 망상과 와해된 말·행동, 사회·직업 기능 저하가 약 3개월 지속되어 제시된 진단 중 조현병형 장애가 적절하다. 조현병형 장애는 전체 경과가 1개월 이상 6개월 미만인 정신병적 장애이며 망상 부재가 특징이 아니다. 뚜렷한 기분삽화가 없어 조현정동장애를 지지하지 않고, 와해 증상과 현저한 기능저하는 고립된 망상장애 설명보다 넓다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007601

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 망상이 본문에 있는데 '망상·환각 부재'라고 한 해설 오류 교정. 조현병형 장애의 기간은 1~6개월로 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
