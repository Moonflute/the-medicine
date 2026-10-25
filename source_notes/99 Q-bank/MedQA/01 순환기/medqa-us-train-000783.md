---
type: qbank
schema_version: 1
id: medqa-us-train-000783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe9223e7cfc6447c0260682c16810f89263bae43ecdac49db68a802d70f7a551
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "high blood pressure"
  - "angioedema"
related_disease_slugs: []
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압을 진단받은 71세 아프리카계 미국인 남성이 외래 진료소에 내원했습니다. 진료소에서 측정한 혈압은 161/88 mm Hg이고 맥박은 88회/분입니다. 과거에도 비슷한 혈압 수치를 보였으며, 이에 캡토프릴(captopril)을 처방했습니다. 그는 약물 복용 시작 직후 입술, 혀, 얼굴이 심하게 부어오르는 증상으로 다시 내원했습니다. 캡토프릴을 중단한 후, 그의 고혈압 관리를 위한 가장 적절한 조치는 무엇입니까?

## 선택지

A. 캡토프릴 재투여
B. ARB 투여 시작
C. 베타 차단제 투여 시작
D. 티아지드 이뇨제 투여 시작

## 해설


ACE 억제제에 의한 혈관성 부종이 발생했으므로 캡토프릴을 중단하고 티아지드 이뇨제로 혈압을 조절하는 것이 안전하다. 따라서 다음 단계는 티아지드 이뇨제 투여이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI 시작 후 입술/혀/안면부종은 ACEI angioedema. 재투여 금지와 별다른 강제 RAS적응증 없는 HTN의 thiazide D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000783
