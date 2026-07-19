---
type: qbank
schema_version: 1
id: medqa-us-train-005265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:388f386a2feaffce7d45a3c1c7cd6dd75c636b5ccf987378c909cc872c80e9b8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "리튬 유발 부갑상샘기능항진증"
  - "저칼슘뇨성 고칼슘혈증"
  - "칼슘감지수용체"
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

28세 남자가 고칼슘혈증 추적검사를 받으러 왔다. 양극성장애로 리튬을 복용하며 어머니는 30대에 부갑상샘절제술을 받았다. 혈청 칼슘 11.2 mg/dL, PTH 610 pg/mL, 24시간 소변 칼슘 23 mg이다. 다음 중 소견의 가장 가능성 높은 원인은?

## 선택지

A. 과도한 칼슘 섭취
B. 비정상 칼슘감지수용체
C. 리튬 독성
D. 부갑상샘 선종

## 해설


혈청 칼슘 상승, PTH 상승, 저칼슘뇨는 비정상적인 칼슘감지수용체에 의한 부갑상선 기능항진을 나타낸다. 리튬은 칼슘감지수용체를 억제해 PTH 분비를 증가시키지만 여기서는 수용체 자체 변이가 핵심 원인이다. 따라서 비정상 칼슘감지수용체가 가장 가능성 높은 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005265
