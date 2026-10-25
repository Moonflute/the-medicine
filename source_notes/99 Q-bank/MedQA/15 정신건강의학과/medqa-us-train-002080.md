---
type: qbank
schema_version: 1
id: medqa-us-train-002080
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d8b9cd0060ab042b230cb798640e7d6e23f78accfebc1117340d1843875f257
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Alzheimer disease"
  - "moderate-to-severe dementia"
  - "memantine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 아들과 함께 추적 진료를 받으러 왔다. 아들은 알츠하이머 치매 진단을 받았던 이전 방문 이후 아버지의 정신 상태가 악화되었다고 말한다. 환자는 일을 시작했다가 무엇을 하고 있었는지 잊는 경우가 많다. 전날 있었던 일을 기억하는 데 어려움이 커졌고, 집에서 흔히 사용하는 물건의 이름을 잊기도 한다. 고혈압과 고지혈증이 있다. 현재 리시노프릴, 히드로클로로티아지드, 아토르바스타틴, 도네페질을 복용 중이다. 혼란스러워하며 사람만 지남력이 있다. 100에서 7을 연속해서 거꾸로 빼지 못한다. 세 항목을 등록할 수는 있지만 5분 후에는 회상하지 못한다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 리스페리돈
B. 은행잎 추출물
C. 시탈로프람
D. 메만틴

## 해설

도네페질을 복용 중인 알츠하이머 치매 환자에서 인지·일상 기능 저하가 진행하는 상황이다. 제시된 약물 중 메만틴은 NMDA 수용체 길항제로 중등도~중증 알츠하이머병에서 고려하는 증상 치료제이며, 중증도와 기능을 재평가해 추가 여부를 결정한다. 은행잎 추출물은 표준 치매 약물치료가 아니고 시탈로프람은 항우울제, 리스페리돈은 항정신병약이다. 모든 나머지 선지가 정신병 치료제인 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002080

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 메만틴을 경증~중등도 치료로 설명하고 나머지 선지를 모두 정신병약으로 묶은 오류 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng97/chapter/Recommendations
