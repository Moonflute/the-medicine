---
type: qbank
schema_version: 1
id: medqa-us-train-007770
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79e998d0cbb1015c37c9fa00cc03c9728d20a83a99a2290dbe76bc1d76d0e616
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "Ranson criteria"
  - "mortality risk"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: prognosis
difficulty: simple
answer: A
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

59세 남자가 전반적인 복통, 오심, 구토로 응급실에 왔다. 입원 시 혈당 2,410 mg/dL, AST 321 IU/L, 백혈구 21,200/mL였다. 중환자실에서 지지요법을 받은 지 3일 이내에 임상 상태가 호전되기 시작했다. 다른 관련 요인은 모두 음성이라고 할 때, Ranson 기준에 따른 이 환자의 전체 사망 위험은?

## 선택지

A. 15%
B. 40%
C. 80%
D. 100%

## 해설


입원 시 5점(Ranson) 이상이 2점(연령>55, 혈당>200, LDH>350, AST>250, WBC>16)이고 48시간 후 2점(칼슘<8, PaO2<60, 베이스엑시드>4, 혈액량 감소>10%)을 더하면 총 4점이 된다. 4점에 해당하는 사망률은 약 15%이다. 따라서 전체 사망 위험은 15%이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007770
