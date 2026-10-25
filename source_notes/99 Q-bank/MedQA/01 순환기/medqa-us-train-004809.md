---
type: qbank
schema_version: 1
id: medqa-us-train-004809
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50499d0f17aece7f65b1609bea44b7d1975cb4c220bff3d4821c5f8e0ab57b3d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "아미오다론"
  - "폐독성"
  - "간질성 폐렴"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-u5hO2KueydtCDqsITsp4jshLEg7Y-Q66C0IChOU0lQKSAoTm9uc3BlY2lmaWMgSW50ZXJzdGl0aWFsIFBuZXVtb25pYSkubWQ
question_type: adverse_effect
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성이 12시간 동안 간헐적인 두근거림으로 응급실에 왔다. 흉통은 없다. 관상동맥질환과 제2형 당뇨병이 있다. 현재 아스피린, 인슐린과 아토르바스타틴을 복용한다. 맥박은 분당 155회, 혈압은 116/77 mm Hg이다. 신체검사에서 이상은 없다. 심전도에서 단형 심실빈맥이 보인다. 아미오다론 일시주입과 지속주입 후 정상 동리듬으로 전환되었고 경구 아미오다론을 처방받아 퇴원했다. 이 약물을 장기간 사용할 때 가장 가능성 높은 이상반응은 무엇인가?

## 선택지

A. 간세포 선종
B. 심전도 QT 간격 단축
C. 만성 간질성 폐렴
D. 폐쇄각 녹내장

## 해설

장기간 amiodarone의 중요한 독성 중 선택지 C의 만성 간질성 폐렴이 있다. 이는 선택지 중 인정되는 이상반응이지 모든 amiodarone 이상반응 가운데 가장 흔하다는 뜻은 아니다. Amiodarone은 QT를 단축시키는 약으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Amiodarone의 간질성 폐렴 C를 전체 이상반응 중 최다라는 과장 없이 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004809
