---
type: qbank
schema_version: 1
id: medqa-us-train-004396
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b2bee80a73ece67ef6acc135028dbeb3e5074ebc16ff935e2ac97bc01118e513
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "고칼륨혈증"
  - "민감도"
  - "특이도"
  - "검사 임계값"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: mechanism
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

신장내과 실습 중인 전공의가 환자 수는 변하지 않았는데 병원 전자 의무기록을 통해 고칼륨혈증 알림을 받은 환자가 늘어난 것을 알아차렸다. 검사 결과를 확인하니 3일 전에는 칼륨 수치가 5.5 mEq/L보다 높을 때 중요 알림 표시가 나타났지만, 어제부터는 5.0 mEq/L를 초과한 값에 같은 알림이 나타났다. 환자 중 한 명의 간호사가 심전도를 찍어야 하는지 묻는다. 칼륨 수치 보고의 특성은 어떻게 변한 것인가?

## 선택지

A. 민감도 감소, 특이도 감소
B. 민감도 감소, 특이도 증가
C. 민감도 증가, 특이도 감소
D. 민감도 증가, 특이도 불변

## 해설


알림 임계값을 5.0 mEq/L로 낮추면 더 많은 환자를 포착해 민감도가 증가하지만, 정상인도 포함돼 특이도가 감소한다. 따라서 민감도 증가·특이도 감소가 맞다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 양성경고 임계값을 낮추면 고정된 참질환 분류 대비 민감도↑/특이도↓ C인 기초통계.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004396
