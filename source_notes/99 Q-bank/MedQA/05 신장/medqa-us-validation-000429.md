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
answer: "D"
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

1세 여아가 2일간 발열과 배뇨 시 울음으로 진료를 받으러 왔다. 3개월 전 요로감염으로 세픽심을 복용했고 현재 체온 39°C, 맥박 144회/분, 혈압 85/40 mmHg, 백혈구 14,000/mm³이다. 소변검사에서 백혈구 에스터레이스와 아질산염, 백혈구와 그람음성 막대균이 보였고 신장 초음파에서 왼쪽 수신증이 있다. 경험적 항균치료 후 호전되었다. 진단을 위한 다음 단계는?

## 선택지

A. 정맥신우조영술
B. 동적 신장 신티그래피
C. 요역동학검사
D. 배뇨방광요도조영술

## 해설

영아의 반복 발열성 UTI와 초음파상 수신증은 방광요관역류(VUR) 등 구조적 문제를 평가할 근거다. 급성 감염 치료로 호전된 뒤 선택지 중 배뇨방광요도조영술로 역류·요도를 평가한다. 모든 첫 UTI에 일률적으로 시행한다는 뜻은 아니며 연령·재발·초음파 소견을 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000429

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 미제시 복통·요관 확장을 제거하고 방광요관역류의 정확한 용어와 시점 설명.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.nice.org.uk/guidance/ng224/chapter/Recommendations
