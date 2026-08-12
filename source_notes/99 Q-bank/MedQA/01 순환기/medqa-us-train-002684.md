---
type: qbank
schema_version: 1
id: medqa-us-train-002684
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1c75c6ab9c019db67432be1af6da19c5a00fc722c80ac16d650b1ddb661f378
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "lateral wall myocardial infarction"
  - "left circumflex coronary artery"
  - "ST-segment elevation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: diagnosis
difficulty: standard
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

70세 남성이 1시간 지속된 심한 흉골 아래 흉통으로 응급실에 왔다. 심전도에서 II, III, aVF와 V5, V6 유도에 ST 상승이 보인다. V5~V6 유도의 ST 상승은 심장 어느 부위의 병리를 가장 잘 나타내는가?

## 선택지

A. 심실중격, 좌전하행 관상동맥
B. 좌심실 측벽, 좌회선 관상동맥
C. 좌심방, 좌주관상동맥
D. 우심실, 좌주관상동맥

## 해설


V5·V6 유도에서 보이는 ST 상승은 좌심실의 측벽(좌측 측부)을 반영한다. 좌측 측벽은 좌회선 관상동맥(LCx)이 공급한다. 따라서 해당 ST 상승은 좌회선 관상동맥 손상을 나타낸다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002684
