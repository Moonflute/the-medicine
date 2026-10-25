---
type: qbank
schema_version: 1
id: medqa-us-train-001458
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:801c8a9613462460495652c4e235bf48fb20c329f2b6ce9f1b45c4b36993d759
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "alopecia areata"
  - "trichotillomania"
  - "anxiety"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-ybkO2YlSDtg4jrqqjspp0gKEFsb3BlY2lhIEFyZWF0YSkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uwnOuqqOyepeyVoCAoVHJpY2hvdGlsbG9tYW5pYSkubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZXRoeWxwaGVuaWRhdGUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 여아가 탈모반으로 최근 진단받아 2차 의견을 듣기 위해 어머니와 내원했다. 2개월 동안 눈에 띄는 탈모반이 생겨 가정의에게 진료받았고 치료에 국소 스테로이드가 포함되어 어머니가 걱정한다. 올해 초 고등학교에 입학했고 메틸페니데이트로 치료 중인 주의력결핍/과잉행동장애가 있다. 발열은 없고 활력징후는 정상이다. 중등도로 괴로워하며 머리카락을 만지고 있다. 양손 손톱이 매우 짧고 두피에 탈모반이 있다. 다음 중 이 상태의 가장 적절한 초기 관리는 무엇인가?

## 선택지

A. 행동치료
B. 선택적 세로토닌 재흡수 억제제
C. 항정신병약
D. 리튬

## 해설

스트레스 상황에서 머리카락을 만지고 국소 탈모가 나타나는 맥락은 반복적으로 머리카락을 뽑는 발모광을 시사한다. 손톱이 짧다는 소견은 동반 습관을 시사할 수 있지만 발모광 자체의 정의가 손톱 물어뜯기는 아니다. 제시된 선택지 중 습관반전훈련 등을 포함한 행동치료가 초기 접근이다. 원형탈모증과는 병력·두피 및 모발 소견을 통해 감별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001458

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 발모광을 손톱 물어뜯기·원형탈모증과 혼동한 오류 교정. 행동치료 원정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
