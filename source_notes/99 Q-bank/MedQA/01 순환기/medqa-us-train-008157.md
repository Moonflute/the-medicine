---
type: qbank
schema_version: 1
id: medqa-us-train-008157
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:60a258f073f1499d92926ff818b82ce2f8e93cc9f9cc52e95c37fb6cc3ea1ca6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial septal defect"
  - "fixed split S2"
  - "left-to-right shunt"
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 남자가 캄보디아에서 최근 이민한 후 처음으로 소아과에 내원했다. 6개월 동안 가벼운 운동 시 호흡곤란이 있으며 흉통이나 두근거림은 없다. 과거력과 수술력은 없고 가족력으로 고혈압과 당뇨병이 있다. 아버지는 결핵으로 사망했다. 체온 98°F(36.7°C), 혈압 113/71 mmHg, 맥박 82회/분, BMI 24 kg/m²이다. 좌측 상부 흉골연에서 2등급 수축기 박출성 심잡음과 좌측 흉골연에서 중간이완기 잡음이 들리고 S1은 정상이며 S2 분열은 흡기에 따라 변하지 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 심방중격결손
B. 이첨 대동맥판막
C. 비후성 심근병증
D. 심실중격결손

## 해설


고정된 S2 분열과 좌우 심잡음은 심방중격결손(ASD)에서 좌우 혈류가 지속적으로 흐르며 발생한다. 다른 판막 질환은 S2 분열 변화를 일으키지 않는다. 따라서 ASD가 가장 가능성 높은 진단이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008157
