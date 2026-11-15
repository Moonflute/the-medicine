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

27세 여성이 일상 활동에서 흉통과 숨참이 계속된다. 심초음파에서 폐쇄성 비후성 심근병증이 확인됐다. 혈압과 맥박은 안정적이고 약물 금기는 없다. 돌연사 위험평가와 별개로, 유출로 폐쇄에 따른 증상을 줄이는 첫 약제는?

## 선택지

A. 암로디핀
B. 니트로글리세린
C. 도부타민
D. 메토프롤롤

## 해설

증상이 있는 폐쇄성 비후성 심근병증에서는 비혈관확장성 베타차단제가 초기 치료다. 전부하나 후부하를 과도하게 낮추거나 수축력을 높이면 동적 폐쇄가 심해질 수 있다. 실신·돌연사 가족력에 대한 위험평가는 따로 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 HCM의 D를 유지하며 반복 운동 실신·돌연사 가족력의 위험평가 필요성을 보완.
- https://www.jacc.org/doi/10.1016/j.jacc.2024.02.014

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000080
- AHA/ACC 비후성 심근병증 진료지침(2024): https://professional.heart.org/en/-/media/PHD-Files/2/Science-News/2/2024/2024-Guideline-for-HCM-Slide-Set.pdf
