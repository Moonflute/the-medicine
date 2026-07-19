---
type: qbank
schema_version: 1
id: medqa-us-train-003003
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4233276ee568525b9b3b53cdd8cba58764f8a1d7cd9dab1438e942fa1f494616
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "innocent murmur"
  - "venous hum"
  - "continuous supraclavicular murmur"
  - "pediatric cardiac auscultation"
question_type: diagnosis
difficulty: standard
answer: C
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

4세 여아가 건강검진을 위해 내원했다. 영아기에 세기관지염을 앓은 것 외에는 건강했다. 6세 언니가 최근 심실중격결손 폐쇄수술을 받았고, 키와 체중은 60백분위수이다. 어머니는 아이에게 심혈관 기형이 있을까 걱정한다. 다음 중 이 아이에서 양성 심잡음을 가장 잘 시사하는 소견은?

## 선택지

A. 좌측 하부 흉골연의 3/6 수축기 박출성 잡음으로 발살바에서 커짐
B. 우측 상부 흉골연의 4/6 중수축기 잡음으로 빠르게 쪼그려 앉을 때 커짐
C. 우측 쇄골상부에서 들리는 2/6 지속성 잡음
D. 좌측 하부 흉골연의 4/6 범수축기 잡음으로 손잡이 쥐기에서 커짐

## 해설


우측 쇄골상부에서 들리는 2/6 지속성 잡음은 정상적인 정맥 울음(venous hum)으로, 무해한 양성 심잡음이다. 다른 선택지는 구조적 심장 잡음과 일치하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003003
