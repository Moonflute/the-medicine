---
type: qbank
schema_version: 1
id: medqa-us-train-007944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35b6a3f7a34e8403887142e96420fd915358cf1fbca37765812f37f32cb10058
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Wiskott-Aldrich syndrome"
  - "thrombocytopenia"
  - "eczema"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAvV2lza290dC1BbGRyaWNoIOymne2bhOq1sCAoV2lza290dC1BbGRyaWNoIFN5bmRyb21lKS5tZA
  - MDgg6rCQ7Je8L-ykkeymneyXtOyEsSDtmIjshoztjJDqsJDshowg7Kad7ZuE6rWwIChTRlRTKSAoU2V2ZXJlIEZldmVyIHdpdGggVGhyb21ib2N5dG9wZW5pYSBTeW5kcm9tZSAoU0ZUUykpLm1k
question_type: diagnosis
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

11개월 남아가 반복 중이염, 심한 습진과 점상출혈로 진료받는다. 혈소판은 29,000/μL이고 말초도말에서 혈소판 크기가 작다. 가장 가능성 높은 진단은?

## 선택지

A. 면역성 혈소판감소증
B. 체디악-히가시 증후군
C. 중증 복합면역결핍
D. 비스코트-올드리치 증후군

## 해설


남아에게 반복 감염과 습진, 작은 혈소판을 동반한 혈소판감소가 함께 나타나면 비스코트-올드리치 증후군을 의심한다. 면역 표현형과 유전 검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007944 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: WAS의 고IgE를 고전 삼징 자체로 부른 오류 교정; D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007944
- https://www.ncbi.nlm.nih.gov/books/NBK1178/
