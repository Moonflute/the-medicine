---
type: qbank
schema_version: 1
id: medqa-us-train-008942
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:91f6520939f901b29a2e2ac339f6fa4eda83b3a827960ff7ac6f632d36e1fe0e
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "poststreptococcal glomerulonephritis"
  - "subepithelial immune complex deposition"
  - "nephritic syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: mechanism
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "감염 후 잠복기를 인두염·피부 감염 구별 없이 1–3주로 고정한 설명 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

7세 여아가 일주일 동안 전신 피로와 짙은 소변으로 내원했다. 4주 전 피부감염으로 국소 무피로신을 사용했다. 5세 남동생은 스테로이드 저항성 신증후군을 앓고 있다. 체온 37°C(98.6°F), 맥박 90회/분, 호흡수 14회/분, 혈압 132/89mmHg이다. 양측 눈 주위와 정강이에 1+ 부종이 있다. 혈색소 12.9g/dL, 백혈구 7,200/mm³, 혈소판 230,000/mm³, BUN 32mg/dL, 크레아티닌 1.8mg/dL이다. 소변에서 혈액 2+, 단백 2+, 적혈구 12~14/고배율시야(이형태), 적혈구 원주가 다수 보인다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 상피하 면역복합체 침착
B. IV형 콜라겐에 대한 항체
C. 순환 IgA 항체 결함
D. 소혈관의 염증

## 해설

피부 감염 수 주 뒤의 부종·고혈압·신기능 저하와 변형 적혈구·적혈구 원주는 감염 후 신염을 지지한다. PSGN의 대표 소견은 사구체의 과립상 면역복합체 침착과 상피하 hump다. 피부 감염 뒤에는 인두염보다 잠복기가 길 수 있어 제시된 시간 관계와 모순되지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008942

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 감염 후 잠복기를 인두염·피부 감염 구별 없이 1–3주로 고정한 설명 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/post-streptococcal-glomerulonephritis.html
