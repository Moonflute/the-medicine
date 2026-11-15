---
type: qbank
schema_version: 1
id: medqa-us-train-008553
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:474dc127f90598a987fe9eca06fd9addeec2993f8863ca479935cd9fde65726e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Behçet disease"
  - "oral and genital ulcers"
  - "uveitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uyoOyytO2KuOuzkSAoQmVow6dldCdzIERpc2Vhc2UpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

베체트병 환자가 시력저하와 통증으로 내원했고 안과검사에서 시력을 위협하는 후포도막염과 망막혈관염이 확인됐다. 국소점안에 더해 필요한 치료 방향은?

## 선택지

A. 안과·류마티스 협진으로 전신 면역억제 치료를 신속히 시작한다
B. 인공눈물만 쓰며 1개월 기다린다
C. 항생제 점안만 한다
D. 전신 스테로이드 단독을 장기간 유지한다

## 해설


시력을 위협하는 후안부 베체트병은 전신 치료가 필요하다. 스테로이드 단독에 의존하지 않고, 중증도와 금기에 따라 생물학제 등을 전문팀이 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008553 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Behcet의 GI·혈관 합병증을 연관없다고 잘못 배제한 해설 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008553
- https://doi.org/10.1016/j.ard.2026.02.009
