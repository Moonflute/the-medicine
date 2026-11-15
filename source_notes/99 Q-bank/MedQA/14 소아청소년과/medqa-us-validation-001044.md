---
type: qbank
schema_version: 1
id: medqa-us-validation-001044
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6d07f28e6c2d8d91a63082662cc5346dcad2e714823bb3900770572bc672ac14
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "세균성 수막염"
  - "케르니히 징후"
  - "요추천자"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "혈압57/38의 쇼크 상태에서 요추천자 B를 우선 시행하는 원정답 오류를 즉각적 경험적 항생제 C로 변경."
---

# MedQA US 임상문제

## 문제

1세 아이가 고열·처짐과 목 경직으로 왔다. 혈압 57/38 mmHg, 맥박 170회/분이고 말초 관류가 나쁘다. 세균성 수막염을 동반한 쇼크가 의심된다. 우선 처치는?

## 선택지

A. 혈압과 관계없이 요추천자를 먼저 완료한다
B. CT가 끝날 때까지 소생과 항생제를 미룬다
C. 경구 항생제를 주고 관찰한다
D. 즉시 소생하고 정맥 경험적 항생제를 시작하며 요추천자는 안정된 뒤 시행한다

## 해설

쇼크가 있으면 기도·순환을 먼저 안정화한다. 혈액배양을 신속히 채취할 수 있으면 하되, 요추천자나 영상검사를 기다리느라 정맥 항생제를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 혈압57/38의 쇼크 상태에서 요추천자 B를 우선 시행하는 원정답 오류를 즉각적 경험적 항생제 C로 변경.
- https://www.rch.org.au/clinicalguide/guideline_index/Lumbar_puncture/
- https://www.rch.org.au/clinicalguide/guideline_index/Meningitis_encephalitis/
- https://www.nice.org.uk/guidance/ng240/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001044
- https://www.who.int/publications/i/item/9789240108042
