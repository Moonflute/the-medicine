---
type: qbank
schema_version: 1
id: medqa-us-validation-001064
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ec4245cedb0f1b207813d4b76cecc1eaa49b17f776ab3a1b723811f64ed74417
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요산 결석"
  - "신장결석"
  - "구연산칼륨"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
curation_status: "revised"
curation_reason: "요산을 알루미노산으로 전환한다는 존재하지 않는 기전 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 남성에게 요산 결석의 재발이 확인됐다. 소변 pH는 반복해서 5.1이고 신기능과 혈청 칼륨은 정상이다. 충분한 수분 섭취와 함께 소변을 알칼리화하기 위해 사용할 약은?

## 선택지

A. 프로베네시드
B. 구연산칼륨
C. 아세타졸아마이드와 고단백 식이
D. 히드로클로로티아지드

## 해설

요산은 산성 소변에서 잘 석출된다. 구연산칼륨으로 소변 pH를 올리면 용해와 재발 예방에 도움이 된다. 소변 pH, 칼륨과 신기능을 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001064
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 요산을 알루미노산으로 전환한다는 존재하지 않는 기전 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention
