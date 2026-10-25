---
type: qbank
schema_version: 1
id: medqa-us-train-009947
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eef50e242df64735b87dc8fa628d8b5e1159541b6a580e6a79029a63cc8894f1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "항콜린성 독성"
  - "디펜히드라민 중독"
  - "피소스티그민"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-q4ieyEsSDspJHrj4Ug7LSd66GgIChHZW5lcmFsIE1hbmFnZW1lbnQgb2YgQWN1dGUgUG9pc29uaW5nKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남성이 이상 행동으로 아들과 함께 응급실에 왔다. 오늘 등산을 가기로 계획했는데 산으로 운전하던 중 이상하게 행동하기 시작해 아들이 데려왔다. 과거력으로 변비, 계절성 알레르기, 알코올 남용, 정맥주사 약물 남용이 있다. 디펜히드라민, 메토프롤롤, 디설피람을 복용한다. 아들은 아침 내내 함께 있었고 일반의약품을 복용하고 아침을 먹는 것만 보았다고 한다. 체온 102.0°F(38.9°C), 혈압 147/102 mmHg, 맥박 분당 110회, 실내 공기 산소포화도 98%이다. 불편해 보이고 빈맥이 있다. 피부는 건조하고 붉게 달아올라 있으며 혼란스럽고 질문에 적절히 대답하지 못한다. 다음 중 가장 적절한 치료는?

## 선택지

A. 아트로핀
B. 정맥 수액, 티아민, 포도당
C. 날록손
D. 피소스티그민

## 해설

디펜히드라민 노출에 고체온, 건조하고 붉은 피부, 빈맥과 혼돈이 동반되어 항무스카린성 독성을 시사한다. 중추성 섬망이 심한 선택된 환자에서 피소스티그민(D)을 고려할 수 있으며, 이는 혈액뇌장벽을 통과하는 가역적 아세틸콜린에스터레이스 억제제이지 직접 무스카린 수용체 작용제가 아니다. 실제 투여 전 독성학 자문과 심전도 평가로 QRS 연장·전도 장애 및 삼환계 항우울제 등 혼합 중독 위험을 확인하고 감시해야 한다. 냉각과 수액 등 지지 치료도 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 체온 102.0°F를 복원한다. 항콜린성 독성의 피부 건조를 발한으로 바꾼 오류 및 피소스티그민의 직접 작용제 표현을 교정하고 실제 사용 전 안전 평가를 명시한다.
- 공식/학회 근거: https://atlanticcanadapoisoncentre.ca/physostigmine-adult.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009947
