---
type: qbank
schema_version: 1
id: medqa-us-train-002118
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3285bb8c7b929496ee294a9e537eef46423c0e45394e17ba3add51e476c77f29
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Alzheimer disease"
  - "moderate dementia"
  - "memantine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

73세 여성이 길을 잃는 문제로 진료실에 왔다. 지난 몇 년 동안 교회에 가려고 운전하던 동네처럼 익숙한 장소에서도 길을 잃기 시작했다고 한다. 공과금을 내는 것도 기억하기 어렵다. 다른 증상은 부인한다. 활력징후는 정상이고 신체검사에서 국소 신경학적 결손은 없다. 간이정신상태검사 점수는 30점 만점에 19점이다. 인지 저하의 이차적 원인에 대한 검사는 음성이었다. 인지·기능 증상의 치료를 위해 다음 중 어떤 약물을 치료 계획에 포함할 수 있는가?

## 선택지

A. 로피니롤
B. 메만틴
C. 프라미펙솔
D. 페르골리드

## 해설

길 잃음과 공과금 관리 장애 등 기능 저하가 동반된 인지장애는 알츠하이머 치매를 시사한다. 제시된 선택지 중 메만틴은 NMDA 수용체 길항제이며 콜린에스터레이스 억제제가 아니다. 보통 중등도~중증 알츠하이머병에서 증상 치료로 고려하며, MMSE 점수 하나만으로 적응증과 병기를 확정하지 않는다. 이를 경증 치매의 보편적 일차 치료나 병리 진행을 막는 질병조절 치료라고 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002118

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 메만틴을 콜린에스터레이스 억제제로 오분류한 오류, 경증 일차 및 질병 진행 억제 단정 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng97/chapter/Recommendations
