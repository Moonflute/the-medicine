---
type: qbank
schema_version: 1
id: medqa-us-train-005811
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e3b04143f57eb2f5620b8325eb38f3d39ff72a2c17dcf73006b7727703dd303
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "일과성 단백뇨"
  - "기립성 단백뇨"
  - "소아 단백뇨 평가"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4sOumveyEsSDri6jrsLHrh6ggKE9ydGhvc3RhdGljIFByb3RlaW51cmlhKS5tZA
question_type: investigation
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
curation_status: "revised"
curation_reason: "아직 확인되지 않은 단백 변동을 창작하지 않고 기립성·운동성 단백뇨를 구별."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

건강한 15세 청소년에서 낮에 채취한 소변의 단백이 두 차례 양성이었다. 혈압과 신기능은 정상이고 혈뇨는 없다. 기립성 단백뇨인지 먼저 확인할 방법은?

## 선택지

A. 활동 직후 소변 잠혈만 다시 측정한다
B. 즉시 신장 생검을 한다
C. 기상 직후 첫 소변의 단백/크레아티닌 비를 측정한다
D. 혈청 알부민만 검사한다

## 해설

밤새 누워 있다가 활동하기 전에 채취한 첫 소변의 단백 배설이 정상인데 낮에만 증가하면 기립성 단백뇨에 부합한다. 첫 소변에서도 지속되면 다른 원인을 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005811
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13141067/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 아직 확인되지 않은 단백 변동을 창작하지 않고 기립성·운동성 단백뇨를 구별.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
