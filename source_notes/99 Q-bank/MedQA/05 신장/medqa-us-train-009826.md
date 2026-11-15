---
type: qbank
schema_version: 1
id: medqa-us-train-009826
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3b4ca9cdfae6c9bc49167bd54d8f9a5a35af9ec2469e61cde47877d038297882
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "아시클로버 결정성 신병증"
  - "급성 신손상"
  - "결정뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
curation_status: "retained"
curation_reason: "영문과 동일한 IV acyclovir 노출 뒤 AKI·옆구리 통증의 결정 신병증 문항으로 결정·백혈구 정답 C 유지."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
---

# MedQA US 임상문제

## 문제

정맥 아시클로버를 시작한 지 이틀 만에 옆구리 통증과 급성 신손상이 생겼다. 약물은 최근 빠르게 주입됐고, 소변에는 바늘 모양 결정이 보인다. 가장 적절한 대응은?

## 선택지

A. 신장 기능과 관계없이 같은 속도와 용량으로 계속 투여한다
B. 루프 이뇨제만 추가하고 같은 투약을 유지한다
C. 약제와 투여 방법을 즉시 재검토하고 체액 상태에 맞춰 수분을 보충한다
D. 요검사 결과와 무관하게 고용량 스테로이드를 먼저 투여한다

## 해설


정맥 아시클로버는 세뇨관 내 결정 침착으로 신손상을 일으킬 수 있다. 약의 필요성, 용량과 주입 속도를 즉시 검토하고, 계속 투여가 필요하면 신기능에 맞춘 용량과 적절한 수액·주입 속도를 적용한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009826
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/dosing-recommendations-drugs-used

## 검수 근거

- 검수일: 2026-10-25
- 판정: 영문과 동일한 IV acyclovir 노출 뒤 AKI·옆구리 통증의 결정 신병증 문항으로 결정·백혈구 정답 C 유지.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
