---
type: qbank
schema_version: 1
id: medqa-us-train-003334
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57338613e7da549f556a1a8d12c378bca52159b0173e0555509ce467a5ca2e56
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "rheumatic mitral stenosis"
  - "rheumatic fever"
  - "secondary penicillin prophylaxis"
  - "opening snap"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
question_type: prevention
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성이 이민 신청을 위한 건강검진을 받으러 왔다. 심첨부에서 개방성음 뒤에 이어지는 저음의 이완기 잡음이 들리며, 운동할 때 숨을 참아야 하는 느낌이 든다고 한다. 소아기에 심한 감염을 앓았던 기억은 없다. 다음 중 이 상태의 발생을 예방하기 위해 사용했을 약물은?

## 선택지

A. 페니실린
B. 설파살라진
C. 인도메타신
D. 프로스타글란딘 E1 주입

## 해설

심첨부의 opening snap 뒤 저음 이완기 rumble은 승모판 협착의 소견이다. 류마티스성 판막병 예방에는 적절한 A군 연쇄상구균 인두염의 penicillin 치료 A가 관련되며, 류마티스열 재발 예방에도 penicillin을 쓴다. 이 잡음은 수축기와 이완기 내내 지속되는 연속성 잡음이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 승모판협착의 opening snap+이완기 rumble을 연속성 잡음이라 한 해설 수정.
- https://www.who.int/publications/b/59223

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003334
