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
question_type: complication
difficulty: simple
answer: B
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

병적 비만으로 위소매절제술을 받은 34세 여성이 무릎 관절성형술 전 수술 전 평가를 받으러 왔다. 검사에서 헤모글로빈 8.7 g/dL, 헤마토크릿 26.1%, MCV 106 fL이다. 엽산 결핍이 의심되어 고용량 엽산 보충을 시작했고 추적검사에서 헤모글로빈 10.1 g/dL, 헤마토크릿 28.5%, MCV 96 fL로 나타났다. 이 환자가 장기적으로 발생할 위험이 있는 합병증은 무엇인가?

## 선택지

A. 신경관 결손
B. 말초신경병증
C. 갑상샘기능저하증
D. 소구성 빈혈

## 해설


위소매절제 후 B12 결핍 가능성이 있는데 엽산만 고용량으로 보충하면 빈혈·MCV는 호전되어도 동반 B12 결핍은 남아 신경병증 B가 진행할 수 있다. 따라서 엽산에 반응했다는 이유로 B12 결핍을 배제하지 않는다. 말초신경병증이 모든 위소매절제 환자의 가장 흔한 장기 합병증이라는 의미는 아니며 영양상태와 B12 등을 평가·교정해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004650 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 엽산만 투여할 때 동반 B12 결핍의 혈액학적 소견은 가려져도 신경 손상은 진행할 수 있다는 실제 출제기전으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004650
