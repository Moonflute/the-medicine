---
type: qbank
schema_version: 1
id: medqa-us-train-008615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a8530e9175993902ee787bc9495a59724b99fd9216a0cf11a6a0f38b76ee7af
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "delusional disorder"
  - "erotomanic delusion"
  - "erotomania"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-unneyDgSDsnqXslaAgKERlbHVzaW9uYWwgZGlzb3JkZXIpLm1k
difficulty: complex
answer: A
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

21세 여성이 행동에 대한 걱정으로 어머니와 함께 정신과에 내원했다. 어머니는 딸이 유명 할리우드 배우가 자신을 사랑하고 결혼할 것이라고 믿는다고 말한다. 환자에게 묻자 6개월 전 그 배우가 주빈으로 참석한 행사에 갔고, 배우가 자신에게 손을 흔들어 사랑한다는 뜻으로 이해했다고 한다. 전화로 연락하려 해도 응답하지 않지만 현재 경력 때문에 너무 바쁜 것이라고 생각한다. 성공한 배우가 자신과 결혼하려는 이유를 묻자 ‘연예인들은 평범한 사람과 결혼하는 경우가 많고, 그날 그가 나에게 관심을 표현했다’고 답한다. 그 외에는 건강하고 알려진 질환이 없다. 기분 변화, 환각, 불안은 부인한다. 현재 민간 광고회사에서 부관리자로 일하며 사회·직업 기능은 정상이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 망상장애
B. 조현성 성격장애
C. 조현형 성격장애
D. 조현양상장애

## 해설

6개월간 지속되는 색정형 망상이 있으나 그 외의 정신병 증상이나 전반적 기능 붕괴가 제시되지 않아 망상장애가 가장 적절하다. 조현병형 장애는 성격장애가 아니라 기간이 제한된 정신병적 장애이다. 조현성·조현형 성격장애는 각각 다른 장기적 특성의 패턴이므로 모두 같은 광범위한 사고·행동 이상으로 묶어 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008615

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 망상장애 원정답 유지. 조현병형 장애를 성격장애로 잘못 분류한 비교 해설 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
