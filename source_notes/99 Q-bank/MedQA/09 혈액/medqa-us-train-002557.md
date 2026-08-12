---
type: qbank
schema_version: 1
id: medqa-us-train-002557
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f8625fc255e81461fbf4c142a55d828b8572eb00b3aa5513e2c370a4b21b260b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hemophilia A"
  - "factor VIII deficiency"
  - "prolonged PTT"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: diagnosis
difficulty: complex
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

6세 남아가 킥보드에서 떨어져 응급실에 왔다. 왼쪽 허벅지 바깥쪽에 광범위한 멍과 압통이 있다. 부모는 아이가 어릴 때부터 쉽게 멍이 들었고 외삼촌도 비슷한 문제가 있었다고 한다. 혈색소와 혈소판은 정상이고 PT 13초, PTT 56초, 출혈시간 4분이다. 다음 중 이 환자 상태의 가장 가능성 높은 병태생리는?

## 선택지

A. 제8인자 결핍
B. 제8인자 항원 결핍
C. GP1b 결핍
D. 혈소판에 대한 항체

## 해설


PT는 정상이고 PTT가 연장된 것은 내인성 혈액응고인자 VIII 결핍(혈우병 A)을 시사한다. 제8인자 결핍은 혈액응고 연쇄 반응의 마지막 단계에서 결핍으로 PTT만 증가한다. 따라서 제8인자 결핍이 가장 가능성 높은 병태생리이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002557
