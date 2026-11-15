---
type: qbank
schema_version: 1
id: medqa-us-train-009981
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ba781ba33d27aa4c3549498d49c4f02598e135c1e3a1e470e443269c73df0ea
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 자율신경병증"
  - "신경인성 방광"
  - "당뇨병성 말초신경병증"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

45세 제1형 당뇨병 환자가 소변을 봐도 덜 나온 것 같고 줄기가 약하다고 한다. 감염은 확인되지 않았고 당뇨병성 자율신경병증이 의심된다. 방광이 실제로 잘 비워지지 않는지 우선 확인할 검사는?

## 선택지

A. 소변 삼투질농도
B. 혈청 전립선특이항원만 검사
C. 배뇨 직후 초음파로 잔뇨량 측정
D. 신장 핵의학 검사

## 해설


방광 감각이나 수축이 저하되면 배뇨 뒤 소변이 많이 남을 수 있다. 배뇨 직후 초음파로 잔뇨량을 확인한다. 잔뇨가 많으면 전립선 등 폐쇄성 원인도 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009981 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장기 조절불량 당뇨의 말초/자율신경 합병증에서 방광 불완전 배출 C 연관성 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009981
- https://doi.org/10.2337/dc26-s012
