---
type: qbank
schema_version: 1
id: medqa-us-train-005269
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d8244edca9ee2cce358a0d49bf247bbe5ec7adbce6d933a70593445a4bc4cbb
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급속진행성 사구체신염"
  - "적혈구 원주"
  - "신장 생검"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "단일 creatinine으로 급격한 진행을 창작하지 않고 사구체성 침사·고혈압·부종을 연결."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

34세 여성이 육안적 혈뇨와 다리 부종으로 내원했다. 1주 전 0.9 mg/dL였던 크레아티닌이 2.4 mg/dL로 올랐다. 소변에 적혈구 원주와 변형 적혈구가 보이고 초음파에서 폐쇄는 없다. 혈청검사와 병행해 사구체신염의 유형을 확인할 조치는?

## 선택지

A. 진통제만 바꾸고 3개월 뒤 재검
B. CT 요로조영술만 시행
C. 정맥 수액만 투여하고 관찰
D. 신장내과에 긴급 의뢰해 신장 생검을 시행

## 해설

짧은 기간의 신기능 악화와 적혈구 원주는 급속진행성 사구체신염을 의심하게 한다. 혈청검사와 신장 생검으로 원인을 구분하고 신장내과와 치료 시점을 결정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005269
- https://kdigo.org/guidelines/gd/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 단일 creatinine으로 급격한 진행을 창작하지 않고 사구체성 침사·고혈압·부종을 연결.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
