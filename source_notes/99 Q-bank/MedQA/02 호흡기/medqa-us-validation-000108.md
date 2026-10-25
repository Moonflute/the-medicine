---
type: qbank
schema_version: 1
id: medqa-us-validation-000108
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:16456e08672face210f289f668a6a206b017ac3d078fd64282d550f88eefd910
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "알레르기 비염"
  - "비강 코르티코스테로이드"
  - "졸림 회피"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 5일간 기침, 콧물, 코막힘, 재채기, 눈물을 호소했다. 이사 후 먼지 때문이라고 생각했지만 청소해도 호전되지 않았고 찬물로 세수하면 잠시 좋아졌다. 폐에서 수포음이나 천명은 없었지만 기저부에서 기관지 호흡음이 들렸다. 진료 후 운전해야 하는 환자의 가장 적절한 초기 처치는?

## 선택지

A. 경구 로라타딘
B. 비강 코르티코스테로이드
C. 설하 오셀타미비르
D. 경구 몬테루카스트

## 해설

재채기, 콧물, 코막힘과 눈물은 알레르기 비염을 시사하며, 비강 코르티코스테로이드(B)는 코막힘을 포함한 비증상 조절에 효과적인 초기 선택이다. 진정성 항히스타민제와 달리 졸림이 주된 문제가 되지는 않지만, 모든 상황에서 운전 안전을 보장하는 표현은 피한다. 로라타딘 역시 비교적 진정성이 낮으며, 누락된 사진을 임의로 판독하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비강 스테로이드 B를 지지하되 로라타딘도 저진정성이라는 점을 구별하고 안전을 절대화하지 않음.
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Rhinitis-2020-A-practice-parameter-update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000108
