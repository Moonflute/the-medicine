---
type: qbank
schema_version: 1
id: medqa-us-validation-001190
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:253bae26640a8aa1ef5f0f574d1fbe00560aef162d38c363498196985de58ad3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "미코페놀레이트 모페틸"
  - "이식 후 면역억제"
  - "골수억제"
  - "Mycophenolate-induced bone marrow suppression"
related_disease_slugs: []
question_type: adverse_effect
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "골수 억제만으로 azathioprine과 구별하지 않고 뚜렷한 설사 단서를 함께 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

신장이식 1개월 뒤 55세 남성이 묽은 설사와 백혈구 감소를 보인다. 타크로리무스, 미코페놀레이트 모페틸, 프레드니솔론을 복용하고 있으며 적절히 시행한 감염 평가에서 원인이 확인되지 않았다. 두 소견을 함께 설명할 수 있어 이식팀과 우선 재검토할 약은?

## 선택지

A. 타크로리무스
B. 프레드니솔론
C. 미코페놀레이트 모페틸
D. 판토프라졸

## 해설

미코페놀레이트는 설사와 골수억제를 일으킬 수 있다. 이식 직후에는 감염이나 다른 약물도 평가하며, 면역억제제를 임의로 중단하지 않고 이식팀과 조정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001190
- https://doi.org/10.1111/ctr.13550

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 골수 억제만으로 azathioprine과 구별하지 않고 뚜렷한 설사 단서를 함께 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
