---
type: qbank
schema_version: 1
id: medqa-us-train-010013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8c9192be008d92c6ca9e778bd9ea4c05905f0c11e8190d0aa72c38f8c674e08
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 간질성 신염"
  - "약물 유발 신염"
  - "호산구뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
curation_status: "revised"
curation_reason: "미제시 단백뇨를 추가하지 않고 원인 약물 중단과 AIN 진단의 확률을 구별."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

57세 여성이 새 베타락탐 항생제를 복용한 지 7일 뒤 발열과 반구진 발진이 생겼다. 크레아티닌이 0.8에서 2.0 mg/dL로 상승했고 농뇨가 있으나 소변배양은 음성이다. 약물 유발 급성 간질성 신염이 의심된다. 우선 조치는?

## 선택지

A. 항생제를 유지하고 프레드니솔론만 추가한다
B. 의심 항생제를 중단하고 신기능과 전해질을 추적한다
C. 소변 호산구 결과가 나올 때까지 같은 약을 유지한다
D. 급성 신손상만으로 즉시 투석한다

## 해설

의심 약을 조기에 중단하는 것이 우선이다. 호산구뇨 유무만으로 확진하거나 배제할 수 없고, 신기능이 회복되지 않거나 진단이 불명확하면 생검 및 추가 치료를 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010013
- https://www.ncbi.nlm.nih.gov/books/NBK482323/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 미제시 단백뇨를 추가하지 않고 원인 약물 중단과 AIN 진단의 확률을 구별.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
