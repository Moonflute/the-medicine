---
type: qbank
schema_version: 1
id: medqa-us-validation-000863
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:099172e9c958bee63c296b369d40faa82a0273722c0032d82d2d8b37d73281c7
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요독성 뇌병증"
  - "중증 급성 신손상"
  - "혈액투석"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
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
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
curation_status: "revised"
curation_reason: "누락된 SLE 병력을 복원하고 숫자만이 아닌 요독성 뇌병증을 투석 근거로 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

중증 신부전으로 소변량이 줄어든 44세 여성이 구역과 함께 점점 혼돈이 심해졌다. 다른 급성 신경학적·대사성 원인을 확인했으나 없고 요독성 뇌병증으로 판단했다. 가장 적절한 처치는?

## 선택지

A. 락툴로오스만 투여
B. 응급 혈액투석
C. 유지 수액만 늘려 경과 관찰
D. 요소질소가 정해진 수치를 넘을 때까지 기다린다

## 해설

요독성 뇌병증은 신대체요법의 긴급 적응증이다. 투석 여부는 크레아티닌이나 요소질소 수치 하나가 아니라 요독 증상과 전해질·체액 상태로 판단한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000863
- https://kdigo.org/guidelines/acute-kidney-injury/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 누락된 SLE 병력을 복원하고 숫자만이 아닌 요독성 뇌병증을 투석 근거로 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
