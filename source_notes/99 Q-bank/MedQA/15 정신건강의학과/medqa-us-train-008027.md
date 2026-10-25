---
type: qbank
schema_version: 1
id: medqa-us-train-008027
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea06b433324068cad68be0a46f95dc6a8bcefdb3c499d71916ca6617d12c2d68
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "acute mania"
  - "bipolar disorder"
  - "haloperidol"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 서점에서 물건을 훔치려다 캠퍼스 경찰에 붙잡힌 지 20분 후 응급실에 왔다. 룸메이트는 지난 2주 동안 이상하게 행동했고 4일 동안 잠을 자지 않았으며 그동안 방을 두 번 칠했다고 한다. 저축한 돈을 온라인 쇼핑과 복권에 모두 썼다. 정신과 질환이나 약물 남용 병력은 없고 복용 약물도 없다. 진찰에서 비협조적이고 공격적이며 치료를 거부한다. “놔주세요, 신이 나를 위한 계획이 있고 그것을 끝내러 가야 해요!”라고 소리친다. 활력징후는 정상이고 신체검사에서 이상은 없다. 기분을 “최고”라고 표현하며 정동은 불안정하고 말이 빠르며 사고는 접선적이다. 환각은 부인한다. 가장 적절한 초기 약물치료는?

## 선택지

A. 할로페리돌
B. 리튬
C. 발프로산
D. 설트랄린

## 해설

수면 욕구 감소·과소비·과대성과 심한 초조·비협조가 있는 급성 조증 양상이다. 제시된 초기 약물 중 1세대(전형적) 항정신병약 할로페리돌로 빠른 증상 조절을 고려한다. 리튬도 조증과 장기 유지에 사용하는 약이지만 즉각적인 초조 조절과 효과 발현 시점은 구별한다. 할로페리돌을 비정형 항정신병약으로 분류하거나 리튬이 조증에 효과 없다고 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008027

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 할로페리돌 비정형 오분류와 리튬은 조증에 효과 없다는 식의 해설 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
