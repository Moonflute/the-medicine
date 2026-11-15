---
type: qbank
schema_version: 1
id: medqa-us-test-000101
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8fd0606b5130a114c7c1c88cc7efcedd9144bc6403484a0ff6929e85d4c1ce40
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "ABO 부적합 용혈"
  - "신생아 황달"
  - "항-B 항체"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 16시간 신생아에게 황달과 빈혈이 생겼다. 간접 빌리루빈이 빠르게 오르고 망상적혈구가 증가했다. 산모는 O형 RhD 음성, 아이는 B형 RhD 음성이고 직접 항글로불린검사는 양성이다. 가장 가능성 높은 원인은?

## 선택지

A. RhD 부적합에 의한 용혈
B. 적혈구 겸상화
C. ABO 부적합에 의한 용혈
D. 수유량 부족에 의한 빌리루빈 상승

## 해설

O형 산모의 IgG 항-B 항체가 태반을 통과해 B형 신생아의 적혈구를 용혈시킬 수 있다. 출생 24시간 안의 황달, 빈혈과 망상적혈구 증가가 단서다. 아이도 RhD 음성이므로 항-D가 이 용혈을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 모체Rh음성과 항B항체 관계를 혼동한 해설 수정. O형모체 IgG항B가 B형영아 용혈 D 유발; 영아Rh음성이라 항D 설명안됨.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4317097/
- https://www.ncbi.nlm.nih.gov/books/NBK2267/?report=classic

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000101
- https://doi.org/10.1542/peds.2022-058859
