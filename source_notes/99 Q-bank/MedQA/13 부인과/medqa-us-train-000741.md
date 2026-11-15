---
type: qbank
schema_version: 1
id: medqa-us-train-000741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:326549ca876569ee1f9fa045cb24cc21c2130a96378f472cb6a72ff10e1e42e3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ectopic pregnancy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
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

29세 여성이 통증이 점점 심해지는 2 cm 난관임신으로 내원했다. 혈압은 안정적이지만 활동성 간질환과 뚜렷한 간기능 장애가 있어 메토트렉세이트를 쓰기 어렵다. 적절한 치료는?

## 선택지

A. 메토트렉세이트 단회 투여
B. 복강경 수술로 난관임신 치료
C. 미소프로스톨 투여
D. 치료 없이 한 달 뒤 초음파만 반복

## 해설

지속적으로 심해지는 통증과 메토트렉세이트 금기가 있으면 안정적인 상태라도 수술적 치료가 적절하다. 반대편 난관과 임신 계획 등을 고려해 난관절제와 보존 수술을 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://www.nice.org.uk/guidance/NG126/chapter/management-of-tubal-ectopic-pregnancy
- https://rightdecisions.scot.nhs.uk/media/rvbmcsna/medical-management-of-ectopic-pregnancy_1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000741
- https://www.nice.org.uk/guidance/ng126/chapter/recommendations
