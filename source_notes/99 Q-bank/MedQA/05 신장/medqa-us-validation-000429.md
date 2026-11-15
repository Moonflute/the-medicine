---
type: qbank
schema_version: 1
id: medqa-us-validation-000429
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:82f3dc7bb162428905d9f9934d07331be64f75462df5cdedfeca6c9cc7c7a93f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "반복 요로감염"
  - "방광요관역류"
  - "수신증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyalOq0gOyXreulmCAoVmVzaWNvVXJldGVyYWwgUmVmbHV4KS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmaXhpbWUubWQ
curation_status: "revised"
curation_reason: "미제시 복통·요관 확장을 제거하고 방광요관역류의 정확한 용어와 시점 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

1세 여아가 두 번째 발열성 요로감염으로 치료받아 호전됐다. 초음파에서 왼쪽 수신증이 보인다. 방광요관역류를 확인할 다음 검사는?

## 선택지

A. 정맥신우조영술
B. 신장 기능 평가용 동적 신장스캔
C. 요역동학검사
D. 배뇨방광요도조영술

## 해설

반복되는 발열성 요로감염과 수신증은 방광요관역류를 평가할 근거다. 급성 감염이 호전된 뒤 배뇨방광요도조영술로 역류를 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000429
- https://uroweb.org/guidelines/paediatric-urology/chapter/urinary-tract-infections-in-children

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 미제시 복통·요관 확장을 제거하고 방광요관역류의 정확한 용어와 시점 설명.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.nice.org.uk/guidance/ng224/chapter/Recommendations
