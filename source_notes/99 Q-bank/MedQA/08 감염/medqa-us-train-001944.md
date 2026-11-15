---
type: qbank
schema_version: 1
id: medqa-us-train-001944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5d09540ff4922383cfe36c66049fd5a92b6181d85c5026a0815e73c25b65bd4
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infective endocarditis"
  - "splenic abscess"
  - "intravenous drug use"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

좌측 판막 심내막염으로 항생제를 투여 중인 환자에게 발열이 계속되고 왼쪽 윗배 통증이 새로 생겼다. 혈압은 안정적이다. 비장 경색이나 농양을 확인하기 위한 우선 검사는?

## 선택지

A. 위내시경
B. 비조영 두부 CT
C. 복부 조영 CT
D. 복부 단순 X선

## 해설


좌측 심내막염의 색전은 비장 경색이나 농양을 일으킬 수 있다. 새 왼쪽 윗배 통증과 지속 열이 있으면 조영 CT로 비장과 복강 합병증을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001944 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열과 좌상복부 압통·심내막염 위험에서 혈행성 비장농양 D가 보기 중 가장 부합함을 대조; 잡음 위치만으로 병변 판막을 특정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001944
- https://doi.org/10.1093/eurheartj/ehad193
