---
type: qbank
schema_version: 1
id: medqa-us-train-003006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43115a7031952475e77cce982c2022a20d273a98fc4bf6fa561d20da764bf45a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "post-myocardial infarction ventricular septal rupture"
  - "cardiogenic shock"
  - "new holosystolic murmur"
  - "left-to-right shunt"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: diagnosis
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

전벽 심근경색으로 치료받은 지 4일째인 80세 남성이 갑자기 식은땀을 흘리고 혈압이 72/50 mmHg로 떨어졌다. 왼쪽 아래 흉골연에 새로 생긴 거친 범수축기 잡음과 진전이 만져지며, 도플러 심초음파에서 심실 사이로 고속 혈류가 보인다. 가장 가능성 높은 합병증은?

## 선택지

A. 유두근 파열에 의한 급성 승모판 역류
B. 우심실 경색
C. 좌심실 자유벽 파열
D. 경색 부위 심실중격 파열

## 해설

심근경색 뒤 새로 생긴 왼쪽 아래 흉골연의 거친 범수축기 잡음과 쇼크, 심실 사이의 고속 혈류는 심실중격 파열을 지지한다. 유두근 파열은 급성 승모판 역류를, 자유벽 파열은 혈심낭과 압전을 일으킨다. 의심되면 즉시 심장팀에 평가를 의뢰한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MI4일 후 새 LSB 거친 범수축기 잡음·우심부전은 중격파열 D인데 해설이 자유벽파열로 오연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003006
- https://doi.org/10.1161/CIR.0000000000001309
