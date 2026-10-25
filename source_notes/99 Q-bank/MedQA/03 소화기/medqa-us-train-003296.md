---
type: qbank
schema_version: 1
id: medqa-us-train-003296
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:61ea9df403f82f93027de83c067dc27cb5c47739918a5b90dd40371980e6f143
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Mallory-Weiss tear"
  - "forceful vomiting"
  - "upper gastrointestinal bleeding"
  - "alcohol binge"
related_disease_slugs:
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: diagnosis
difficulty: standard
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 대학생 남성이 밤새 지속된 구토로 응급실에 왔다. 전날 대학 파티에서 하루 종일 맥주를 마셨고 쇼크 상태로 보이며 한 시간 전 피를 토했다고 한다. 토사물에 혈액 줄무늬가 있고 혈압 90/68 mmHg이다. 즉시 상부위장관 내시경에서 원위 식도에 세로 방향 점막 열상이 보였다. 가장 가능성 높은 진단은?

## 선택지

A. 보어하브 증후군
B. 말로리-바이스 열상
C. 알약 식도염
D. Dieulafoy 병변

## 해설

반복 구토 뒤 토혈이 있고 내시경에서 원위 식도의 세로 방향 점막 열상이 확인되어 Mallory-Weiss tear B이다. 이는 점막 열상이며 전층 파열인 Boerhaave와 다르다. 가로 방향이라는 기존 해설은 원문·본문과 반대이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 longitudinal tear를 해설이 가로 방향이라고 반대로 표현. Mallory-Weiss B 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003296
