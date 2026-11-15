---
type: qbank
schema_version: 1
id: medqa-us-train-002566
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7cd2640ac4720011e1c56c167ad71f0ba9bcd8e12a24bfc973be38d4920ae49d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "acute appendicitis"
  - "pediatric right lower quadrant pain"
  - "abdominal ultrasound"
question_type: investigation
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

10세 아이에게 발열과 우하복부 국소 압통이 지속된다. 첫 충수 초음파에서 충수가 보이지 않았고, 재평가에서도 충수염 의심이 높다. 활력은 안정적이고 복막염 소견은 없다. 즉시 진정 없이 MRI를 할 수 있다면 적절한 다음 검사는?

## 선택지

A. 복부 단순 X선
B. 복부·골반 MRI
C. 대장내시경
D. 다음 날까지 외래 관찰 후 소변 재검

## 해설


충수가 보이지 않았다는 이유만으로 충수염을 배제할 수 없다. 의심이 계속되는 안정적인 소아에서 즉시 가능하면 MRI가 방사선 없는 추가 영상이다. MRI가 어렵거나 늦어지면 조영 CT도 적절할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002566
- https://acsearch.acr.org/docs/3105874/Narrative/
