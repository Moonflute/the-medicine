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

11개월 남아가 출생 이후 반복되는 중이염 평가를 위해 내원했다. 예방접종은 최신 상태이며 키와 체중은 5백분위수이다. 신체검사에서 점상출혈과 두피 및 사지의 습진성 병변이 여러 개 보인다. 백혈구 9,600/mm³(호중구 61%, 림프구 24%), 혈소판 29,000/mm³, 혈청 IgE 상승이 확인되었다. 가장 가능성 높은 진단은?

## 선택지

A. 체디악-히가시 증후군
B. 만성 육아종성 질환
C. 중증 복합면역결핍
D. 비스코트-올드리치 증후군

## 해설


남아의 반복 감염·습진·혈소판감소는 Wiskott–Aldrich D의 고전 삼징이다. 고IgE는 동반 면역 이상을 지지하지만 삼징에서 반복 감염을 대신하는 항목은 아니다. 작은 혈소판·기능/유전검사 등을 실제 평가하여 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007944 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: WAS의 고IgE를 고전 삼징 자체로 부른 오류 교정; D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007944
