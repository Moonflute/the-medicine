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
question_type: mechanism
difficulty: complex
answer: "C"
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

55세 남성이 중증 다낭성 신장병으로 오른쪽 신장이식을 받은 지 한 달 후 흉통과 요통, 잦은 기침, 하루 5~6회의 묽은 설사와 간헐적 구토로 진료를 받으러 왔다. 창백하고 혈색소 10 g/dL, 백혈구 2,500/mm³, 혈소판 80,000/mm³이다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 타크로리무스
B. 다클리주맙
C. 미코페놀레이트 모페틸
D. 아자티오프린

## 해설

이식 후 면역억제제 중 mycophenolate mofetil은 설사·구토 등의 GI 독성과 골수 억제를 함께 유발할 수 있어 선택지 중 가장 적합하다. Azathioprine도 골수 억제를 일으키므로 혈구 감소만으로 두 약을 구별하지 않는다. 실제로는 복용약 확인과 감염·다른 독성 원인 평가가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001190

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 골수 억제만으로 azathioprine과 구별하지 않고 뚜렷한 설사 단서를 함께 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
