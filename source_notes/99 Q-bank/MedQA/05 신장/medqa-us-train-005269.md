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
answer: "D"
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

34세 여자가 며칠 동안 선홍색 소변을 간헐적으로 봐서 내원했다. 최근 감염은 없고 월경 관련 골반통으로 diclofenac 몇 캡슐을 복용했다. 혈압은 150/90 mmHg이고 무릎까지 2+ 함요부종이 있다. 소변검사에서 적혈구·적혈구 원주·가시적혈구(acanthocyte)가 보이고 단백뇨는 검출되지 않았다. 크레아티닌 2.4 mg/dL, BUN 42 mg/dL, 칼륨 4.8 mEq/L이다. 다음 중 가장 적절한 처치는?

## 선택지

A. NSAID 중단
B. 포메피졸
C. 정맥 수액과 전해질 교정
D. 신장 생검

## 해설

적혈구 원주와 acanthocyte는 사구체성 출혈을 지지하며 신기능 저하·고혈압·부종이 동반된다. 선택지 중 원인 사구체 질환을 규명할 신장 생검이 적절하다. 단일 creatinine만으로 상승 속도를 알 수는 없으며 필요한 혈청검사·약물 검토와 신장 전문 평가를 병행한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005269

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 단일 creatinine으로 급격한 진행을 창작하지 않고 사구체성 침사·고혈압·부종을 연결.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
