---
type: qbank
schema_version: 1
id: medqa-us-train-000001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c8b4967ef68758500b836f062f94e49b0b7a90a486c2dbad05e459fdb8faaf7
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "요로감염"
  - "임신"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTml0cm9mdXJhbnRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 22주 산모가 배뇨통과 빈뇨로 왔다. 열과 옆구리 압통은 없고 소변에서 니트로푸란토인에 감수성인 대장균이 자랐다. G6PD 결핍은 없고 신기능은 정상이다. 적절한 치료는?

## 선택지

A. 경구 니트로푸란토인으로 하부 요로감염을 치료한다
B. 상부 요로감염으로 보고 한 달간 정맥 항생제를 준다
C. 독시사이클린으로 치료한다
D. 열이 없으므로 증상이 있어도 항생제는 주지 않는다

## 해설

이 환자는 신우신염 소견이 없는 급성 방광염이므로 감수성이 확인된 니트로푸란토인으로 치료할 수 있다. 신장 실질 농도가 충분하지 않아 신우신염 치료에는 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 페니실린·세팔로스포린이 임신 1기에 위험하다는 잘못된 약물 안전성 설명 수정.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000001
- https://pubmed.ncbi.nlm.nih.gov/37473414/
