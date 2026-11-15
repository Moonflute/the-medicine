---
type: qbank
schema_version: 1
id: medqa-us-test-000247
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ec2132ea8e70cf351405097ef5f57d7f1668bfb65a9fec57df91e4d06a74d869
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "황색포도상구균 균혈증"
  - "정맥주사 약물 사용"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: monitoring
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

혈액배양 두 세트에서 황색포도알균이 자랐다. 적절한 정맥 항생제를 시작한 지 이틀 됐고 감염원과 심내막염을 평가하고 있다. 균혈증이 소실됐는지 확인하기 위해 다음으로 할 일은?

## 선택지

A. 열이 다시 날 때만 혈액배양을 반복한다
B. C반응단백질이 감소하면 혈액배양은 생략한다
C. 항생제를 끝낸 뒤 처음으로 혈액배양을 반복한다
D. 추적 혈액배양을 채취한다

## 해설


황색포도알균 균혈증은 증상이 좋아져도 추적 혈액배양으로 소실을 확인한다. 균혈증이 지속되면 심내막염과 전이성 병소 및 감염원 조절 여부를 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000247 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 주사약물·삼첨판 역류 징후와 S. aureus 배양 뒤 추가 혈액배양 A는 적절. 배양 하나가 확진 전부는 아니며 심초음파와 종합해야 함.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000247
- https://www.idsociety.org/practice-guideline/staphylococcus-aureus-bacteremia/
