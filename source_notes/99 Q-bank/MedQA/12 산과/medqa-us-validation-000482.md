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
answer: A
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

임신 6주인 29세 여성이 갑자기 시작된 심한 날카로운 골반통과 다량의 질출혈, 어지러움으로 응급실에 왔다. 오른쪽 아랫배 통증이 심하고 복부 및 자궁경부 움직임 압통이 있으며 혈압 71/37 mmHg, 맥박 117회/분, 호흡수 21회/분, 체온 38.4°C이다. 가장 적절한 확정적 처치는?

## 선택지

A. 수술
B. 메토트렉세이트
C. 질식 초음파
D. 연속적인 hCG 측정

## 해설

임신 6주에 갑작스러운 골반통, 출혈과 심한 저혈압·빈맥이 있어 파열된 자궁외임신 등 산과 출혈 응급상황을 우선 고려한다. 즉각적인 소생과 산부인과 수술 평가를 병행하며, 제시된 확정적 처치 중 수술(A)이 적합하다. 메토트렉세이트나 연속 hCG 관찰로 지연해서는 안 된다. 초음파는 불안정한 환자에서도 신속하게 활용할 수 있지만 소생·수술을 지연시키는 전제조건이 되어서는 안 된다. 발열이 있으므로 감염성 원인도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 영어원문의발열38.4와호흡21누락복원. 불안정한파열의심자궁외임신A,초음파를안정환자에게만가능하다는단정제거.
- https://www.nice.org.uk/guidance/NG126/chapter/management-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000482
