---
type: qbank
schema_version: 1
id: medqa-us-train-005648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4c3aff47aaa3be886a55cf0f1ce33685f82638204c1c08856d35986ae555ebdb
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심장눌림증"
  - "외상성 심낭삼출"
  - "Beck 삼징"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

흉부 둔상 뒤 45세 남성이 호흡곤란과 저혈압을 보인다. 경정맥이 팽창했고 심음은 작게 들리지만 양쪽 호흡음은 유지된다. 소생과 동시에 침상에서 심낭 혈액과 심장눌림증을 평가할 검사는?

## 선택지

A. 가스트로그라핀을 이용한 조영 식도조영술
B. 흉부 X선
C. 뇌 CT
D. 경흉부 심초음파

## 해설

흉부 외상에서 저혈압, 경정맥 팽창, 작은 심음은 심장눌림증을 의심하게 한다. 침상 경흉부 심초음파로 심낭 혈액과 심장 압박을 신속히 평가한다. 불안정한 외상 환자에서 검사가 필요한 응급 처치를 지연시키면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저혈압·경정맥 팽창·심음 감소로 심장압전을 의심할 수 있다. 원문에 없는 흉골 골절을 해설에서 삭제하고 침상 심초음파와 응급 처치의 관계를 명확히 한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005648
