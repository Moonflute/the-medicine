---
type: qbank
schema_version: 1
id: medqa-us-train-007934
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:675a9e53fa90e6e21eadf3e56b5181a983df3726cf8949b1eb36e95637c1a6f9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "brief psychotic disorder"
  - "brief reactive psychosis"
  - "psychotic episode"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uLqOq4sCDsoJXsi6Drs5HsoIEg7J6l7JWgIChCcmllZiBwc3ljaG90aWMgZGlzb3JkZXIpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 여성이 오빠와 함께 내원했다. 오빠에 따르면 3일 전 환자는 가장 좋은 정장을 입고 화장을 한 뒤 아마존사의 CEO를 대신하기 위해 직장으로 돌아가 시애틀로 운전하겠다고 주장했다. 남편이 이틀 전 다른 도시에서 교통사고로 사망한 직후였기 때문에 특히 이상했다. 오늘은 회색 운동복을 입고 슬퍼 보인다. 환자는 이상하게 행동한 것을 기억하지 못하지만 남편이 사망한 것은 알고 있다. 활력징후는 정상이고 진찰에서 슬픈 정동 외에 말의 속도와 음량은 정상이다. 환각, 조증, 끼어들기, 우울 증상, 흥미 상실은 없다. 소변 약물검사는 모두 음성이다. 다음 중 이 환자의 상태를 가장 잘 설명하는 것은?

## 선택지

A. 분열성 인격장애
B. 경계성 인격장애
C. 분열형 인격장애
D. 단기 정신병적 장애

## 해설

과대망상적 믿음과 급성 이상행동이 나타났다가 빠르게 회복된 경과는 제시된 선택지 중 단기 정신병적 장애에 가장 가깝다. 이 장애는 정신병적 증상이 1일 이상 1개월 미만 지속되고 이전 기능으로 회복하는 경과를 확인하며, 현실검증이 항상 보존되는 장애가 아니다. 스트레스 후 1주 이내 발병은 필수 기준이 아니다. 원문의 '이상행동 3일 전/배우자 사망 2일 전' 시점은 상충하므로 사망이 반드시 먼저였다고 바꾸거나 그것만을 진단 근거로 삼지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007934

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 단기 정신병에 현실검증 손상이 없다는 오류와 필수 아닌 스트레스 후 1주 기준 삭제. 원문 사망/이상행동 시점 모순을 감추지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
