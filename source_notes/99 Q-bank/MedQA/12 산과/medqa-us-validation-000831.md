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
answer: B
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

임신 32주인 29세 여성(임신 2회, 출산 1회)이 4년 전 진단된 만성고혈압으로 현재 메틸도파를 복용하며, 과거 전자간증과 35주 제왕절개 분만의 병력이 있다. 현재 혈압 140/80 mmHg, 단백뇨 2+, 24시간 단백 배설 1 g/L이다. 다음으로 평가해야 할 검사실 수치는?

## 선택지

A. 응고검사
B. 간 트랜스아미나제
C. 총 빌리루빈
D. 소변검사

## 해설

기존 만성고혈압에서 새 단백뇨가 나타나 중첩 전자간증을 평가해야 한다. 선택지 B의 AST/ALT는 간 침범 평가에 필요하며 혈소판·크레아티닌 등도 함께 확인한다. 원문의 ‘24시간 배설1g/L’는 농도 단위로 총24시간 배설량과 다르므로 임의로1g/일로 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 만성고혈압·새 단백뇨의 중첩 전자간증 평가 맥락 복원 및 소변 단위 한계 표시.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000831
