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
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: complex
answer: D
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

생후 2일 된 남아가 16시간 동안 피부와 공막이 노래져 내원했다. 임신 38주에 합병증 없는 질식분만으로 태어나 출생체중 3.1kg이다. 산모는 의료보험이 없어 산전관리를 받지 못했다. 4세 형은 겸상적혈구병이 있다. 진찰에서 황달, 약간의 복부팽창, 간 1cm 비대, 왼쪽 늑골연 바로 아래에서 만져지는 비장 끝이 있다. 혈색소 11 g/dL, 망상적혈구 9%, 백혈구 9,100/mm³, 혈소판 244,000/mm³이다. 산모 혈액형 O Rh 음성, 항-Rh 항체 역가 양성, 태아 혈액형 B Rh 음성이다. 총 빌리루빈 11.3 mg/dL, 직접 0.3 mg/dL이다. 다음 중 이 상태의 가장 가능성 높은 원인은?

## 선택지

A. 적혈구 겸상화
B. 항-D 항체
C. 담도관 기형
D. 항-B 항체

## 해설

O형 산모의 IgG 항-B 항체가 태반을 통과해 B형 영아 적혈구를 용혈시키는 ABO 부적합이 가장 적합하므로 D이다. 빈혈, 망상적혈구 증가와 간접 고빌리루빈혈증이 용혈을 뒷받침한다. 모체의 항-Rh 항체가 양성이어도 영아가 Rh(D) 음성이면 항-D가 표적으로 삼는 D항원이 없어 이 사례의 원인으로 적합하지 않다. 신생아기는 HbF 비율이 높아 겸상화가 이 시기 증상의 일반적인 설명이 아니며, 담도 기형의 담즙정체와도 빌리루빈 양상이 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 모체Rh음성과 항B항체 관계를 혼동한 해설 수정. O형모체 IgG항B가 B형영아 용혈 D 유발; 영아Rh음성이라 항D 설명안됨.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4317097/
- https://www.ncbi.nlm.nih.gov/books/NBK2267/?report=classic

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000101
