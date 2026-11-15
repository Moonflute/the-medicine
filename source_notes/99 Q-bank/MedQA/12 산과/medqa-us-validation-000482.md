---
type: qbank
schema_version: 1
id: medqa-us-validation-000482
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:36191813ce1ab723c4576b2a59b763c1f0f0fb35483bf86e55d6c6679861a553
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "파열된 자궁외임신"
  - "복강내 출혈"
  - "혈역학적 불안정"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신반응이 양성인 29세 여성이 갑자기 심한 한쪽 골반통과 실신으로 왔다. 혈압은 71/37 mmHg이고 복강 내 액체가 보인다. 파열된 자궁외임신이 의심될 때 확정적 처치는?

## 선택지

A. 메토트렉세이트 처방 후 외래 추적
B. 48시간 간격 혈청 β-hCG 추적만 시행
C. 출혈이 저절로 멈출 때까지 진통제만 투여
D. 수혈·소생과 함께 응급 수술로 출혈을 조절한다

## 해설

파열이 의심되고 저혈압과 복강 내 출혈이 있으면 응급 수술이 필요하다. 약물이나 연속 혈액검사를 위한 기다림으로 출혈 조절을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 영어원문의발열38.4와호흡21누락복원. 불안정한파열의심자궁외임신A,초음파를안정환자에게만가능하다는단정제거.
- https://www.nice.org.uk/guidance/NG126/chapter/management-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000482
- https://www.nice.org.uk/guidance/ng126/chapter/management-of-tubal-ectopic-pregnancy
