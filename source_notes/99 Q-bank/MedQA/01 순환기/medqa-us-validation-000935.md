---
type: qbank
schema_version: 1
id: medqa-us-validation-000935
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:98e45d8f53a9d4e948761f822c818d6f42c0ce61a706da52898e6f4b60c2f086
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "수축성 심낭염"
  - "결핵"
  - "경정맥압 파형"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rs7XsiJggKOqysO2VtSkgKEFzY2l0ZXMgKFR1YmVyY3Vsb3NpcykpLm1k
question_type: mechanism
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 아프리카계 남성이 3개월간의 피로, 호흡곤란, 복부 팽만으로 진료를 받으러 왔다. 약 6개월 전 미국으로 이주했으며 다른 질환이나 복용 약은 없다. 양쪽 다리의 무릎까지 부종, 경정맥 팽창, 복수가 보이고 경정맥압 파형에서 뚜렷한 x 및 y 하강이 관찰된다. 양측에서 흡기 중 요골 맥박이 소실된다. 이 환자의 증상을 일으킨 일차적 기저 원인은?

## 선택지

A. 콕사키 A 바이러스
B. 결핵
C. 원충 감염
D. 삼첨판 심내막염

## 해설

뚜렷한 x·y 하강과 우심부전은 수축성 심낭 생리를 시사하며, 제시된 배경과 선택지에서는 결핵(B)이 대표적인 원인이다. 기이맥이 동반되면 삼출-수축성 질환 등도 평가해야 한다. 이는 제한성 심근병증과 같은 말이 아니며, 실제 결핵 여부는 검사로 확인한다. 누락된 청진 음원을 임의로 판독하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제한성 심낭염 오역을 수축성 심낭질환으로 교정하고 지리적 배경만으로 결핵 확진하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000935
