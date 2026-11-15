---
type: qbank
schema_version: 1
id: medqa-us-train-004650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:786be0a35b55f201bccfb6cf288b3003ebee51f09b76fa871942cb03e884621f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 B12 결핍"
  - "위소매절제술 후 흡수장애"
  - "말초신경병증"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

위소매절제술을 받은 환자의 대적혈구성 빈혈이 엽산을 복용한 뒤 호전됐다. 하지만 새로 양발 저림과 보행 불안정이 생겼고 진동감각이 감소했다. 다음 조치는?

## 선택지

A. 비타민 B12 검체를 채취하고 결과가 나오기 전에도 보충치료를 시작한다
B. 혈색소가 좋아졌으므로 엽산만 유지한다
C. 신경 증상이 진행할 때까지 영양 검사를 미룬다
D. 철분을 추가하고 비타민 B12는 평가하지 않는다

## 해설


엽산으로 빈혈이 호전돼도 B12 결핍에 의한 신경 손상은 지속될 수 있다. 신경학적 증상이 있을 때는 검사 결과를 기다리며 B12 치료를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004650 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 엽산만 투여할 때 동반 B12 결핍의 혈액학적 소견은 가려져도 신경 손상은 진행할 수 있다는 실제 출제기전으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004650
