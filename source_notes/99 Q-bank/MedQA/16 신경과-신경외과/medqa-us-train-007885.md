---
type: qbank
schema_version: 1
id: medqa-us-train-007885
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c2fff1cac30504057c66f60a041823fc1967ae0fc472aa53e32d119f86719a5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "concussion"
  - "mild traumatic brain injury"
  - "return-to-play protocol"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 뇌진탕 후 고정 기간 제한을 증상 기반 단계적 복귀로 교정"
curation_status: "revised"
curation_reason: "뇌진탕 후 고정 기간 제한을 증상 기반 단계적 복귀로 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

15세 학생이 운동 중 머리를 부딪친 뒤 잠시 혼란과 어지럼이 있었다. 평가 결과 가벼운 뇌진탕으로 판단했고 응급 영상이나 입원이 필요한 소견은 없다. 퇴원 후 적절한 계획은?

## 선택지

A. 증상이 끊긴 당일 바로 시합에 복귀한다
B. 일주일 동안 방에서 모든 활동을 금지한다
C. 하루 이틀 상대적 휴식 뒤 학업·일상을 점진적으로 재개하고 운동은 단계적으로 복귀한다
D. 정상 CT를 확인할 때까지 학업과 운동을 모두 금지한다

## 해설

뇌진탕 후 하루 이틀 상대적으로 쉰 뒤 증상을 크게 악화시키지 않는 일상과 학업부터 늘린다. 당일 경기 복귀는 피하고, 접촉 운동 전에는 단계적 복귀와 의료진 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 뇌진탕 후 고정 기간 제한을 증상 기반 단계적 복귀로 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/traumatic-brain-injury/hcp/clinical-guidance/pediatric-mtbi.html
- https://www.cdc.gov/heads-up/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007885

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
