---
type: qbank
schema_version: 1
id: medqa-us-train-003650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76b4346e81491e02fab1854b84ac11c5746d1abb33a77583df51b6ca429bc2fa
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "stage 1 pressure injury"
  - "nonblanchable erythema"
  - "pressure ulcer prevention"
  - "repositioning"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

오래 누워 지낸 환자의 천골에 피부가 벗겨지지 않은 붉은 부위가 있다. 손가락으로 눌러도 희게 변하지 않는다. 이 압박손상의 단계는?

## 선택지

A. 1단계
B. 2단계
C. 3단계
D. 4단계

## 해설

피부는 온전하지만 눌러도 색이 옅어지지 않는 국소 홍반이면 1단계 압박손상이다. 피부가 벗겨지기 전부터 자세를 바꾸고 해당 부위 압력을 줄인다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 압통이 없다는 해설을 본문/원문의 경한 압통으로 교정. 다른 선지 모두 궤양 치료라는 오류 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg179/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003650
