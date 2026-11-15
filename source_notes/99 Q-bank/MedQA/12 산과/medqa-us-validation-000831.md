---
type: qbank
schema_version: 1
id: medqa-us-validation-000831
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:32593814a0e430f0fe7f9facb9401089c2b95af3d3f113b972925086a29b8870
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전자간증"
  - "단백뇨"
  - "간기능 검사"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 고혈압이 있는 임신 32주 여성이 이전 진료에서는 단백뇨가 없었으나 이번 단회뇨 단백/크레아티닌 비가 0.64 mg/mg다. 요로감염 소견은 없다. 적절한 평가와 해석은?

## 선택지

A. 혈압이 160 mmHg 미만이면 자간전증 가능성을 배제한다
B. 만성 고혈압이므로 새 단백뇨를 정상 임신 변화로 본다
C. 중첩 자간전증을 의심해 혈소판·간효소·크레아티닌과 태아 상태를 평가한다
D. 소변 단백만 반복하고 산모·태아 평가를 분만 때까지 미룬다

## 해설

만성 고혈압 환자에게 새 단백뇨가 생기면 중첩 자간전증을 의심한다. 혈압이 중증 범위가 아니어도 산모의 장기 침범과 태아 상태를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 만성고혈압·새 단백뇨의 중첩 전자간증 평가 맥락 복원 및 소변 단위 한계 표시.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000831
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
