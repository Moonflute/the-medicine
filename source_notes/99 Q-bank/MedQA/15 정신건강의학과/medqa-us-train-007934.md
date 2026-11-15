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
answer: B
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

27세 여성이 갑자기 피해망상과 와해된 언어를 보였다. 물질 사용이나 기분 삽화는 없었고, 1주 뒤 정신병 증상이 완전히 사라져 이전 기능을 회복했다. 가장 가능성 높은 진단은?

## 선택지

A. 조현양상장애
B. 단기 정신병적 장애
C. 망상장애
D. 조현병

## 해설

하루 이상 한 달 미만 지속되는 정신병 증상 뒤 이전 기능을 완전히 회복했다면 단기 정신병적 장애에 맞는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007934
- https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 단기 정신병에 현실검증 손상이 없다는 오류와 필수 아닌 스트레스 후 1주 기준 삭제. 원문 사망/이상행동 시점 모순을 감추지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
