---
type: qbank
schema_version: 1
id: medqa-us-train-007205
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0937199fa8ee8ab7aadeec016ff091d7730bfe77fb7a49451f75359cad230b47
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "당뇨병성 말초신경병증"
  - "신경병증성 통증"
  - "당뇨병성 족부궤양"
  - "프레가발린"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QcmVnYWJhbGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9UcmFtYWRvbC5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제2형 당뇨병 환자가 양발의 대칭적인 작열통으로 잠을 잘 못 잔다. 진찰에서 발끝 감각과 발목반사가 줄었다. 혈당 및 발 관리와 별도로 신경병증성 통증에 사용할 적절한 초기 약물은?

## 선택지

A. 옥시코돈
B. 프레가발린
C. 이부프로펜
D. 클로나제팜

## 해설

프레가발린은 통증성 당뇨병성 말초신경병증에서 사용할 수 있다. 신기능에 맞춰 용량을 조절하고 졸림·어지럼 등을 살핀다. 오피오이드를 보통 첫 치료로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 통증성 당뇨병 신경병증의 pregabalin D 확인. GABA 리간드라는 불명확한 약리 설명을 α2δ 결합으로 교정.
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/WNL.0000000000013038
- 공식/학회 근거: https://diabetesjournals.org/compendia/article/2022/1/1/147001/Diagnosis-and-Treatment-of-Painful-Diabetic

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007205
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
