---
type: qbank
schema_version: 1
id: medqa-us-validation-000080
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e4474624e30905d7487a618b82869349b2dd0cc734a46f7163be706abbdbbe74
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "비후성 폐쇄성 심근병증"
  - "운동 유발 실신"
  - "베타차단제"
  - "Hypertrophic obstructive cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 눈을 치우다 약 30초간 의식을 잃어 진료를 받으러 왔다. 직전에 어지럽고 숨이 찼으며 두 달 전 달리다가 비슷한 증상이 있었다. 아버지는 44세에 돌연사했고 좌측 흉골연에서 손 쥐기 시 감소하는 수축기 박출성 잡음이 들렸다. 가장 적절한 치료는?

## 선택지

A. 중격근절제술
B. 암로디핀
C. 심장박동기
D. 메토프롤롤

## 해설

운동 실신, 젊은 나이의 가족 돌연사와 손 쥐기로 감소하는 박출성 잡음은 폐쇄성 비후성 심근병증을 시사한다. 선택지 중 메토프롤롤(D)이 증상 조절에 적합하다. 반복 실신과 가족력은 별도의 돌연사 위험평가가 필요한 소견이므로, 약물만 처방하고 평가나 운동 상담을 생략하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 HCM의 D를 유지하며 반복 운동 실신·돌연사 가족력의 위험평가 필요성을 보완.
- https://www.jacc.org/doi/10.1016/j.jacc.2024.02.014

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000080
