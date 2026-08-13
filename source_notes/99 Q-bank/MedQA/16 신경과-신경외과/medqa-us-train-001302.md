---
type: qbank
schema_version: 1
id: medqa-us-train-001302
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a3ff9f0474b6b7f5a6ba1782dda8f23923bb5de6a321d5e3e316619335eaa2b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 파종성 뇌척수염"
  - "뇌염"
  - "수막염"
  - "신경이완제 악성 증후군"
  - "틱"
  - "발열"
  - "의식 변화"
  - "전신 경직"
  - "지남력 장애"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
---

# MedQA US 임상문제

## 문제

22세 남성이 2일간의 발열과 의식 변화로 응급실에 내원했습니다. 그는 오한이나 떨림 없는 발열을 호소하며, 인후통, 복통, 두통, 묽은 변, 배뇨 시 작열감, 또는 발작은 없다고 말합니다. 그는 틱 병력이 있으며 현재 저용량 할로페리돌을 복용 중입니다. 병원 도착 시 체온은 39.6°C (103.2°F)이고, 혈압은 126/66 mmHg, 맥박은 116회/분입니다. 그는 심하게 땀을 흘리고 전신 경직이 있습니다. 그는 혼란스러워하고 지남력 장애를 보입니다. 모든 사지를 움직일 수 있습니다. 양측 발바닥 반사 하강과 함께 정상 심부건 반사가 있습니다. 뇌 MRI는 특이 소견이 없습니다. 소변 약물 검사는 음성입니다. 백혈구 수는 14,700/mm3입니다. 크레아틴 키나아제는 5600 U/L입니다. 요추 천자를 시행했으며 뇌척수액(CSF) 검사 결과는 다음과 같습니다:
CSF 개방압 22 cm H2O
CSF 백혈구 4 cells/mm3
CSF 적혈구 0 cells/mm3
CSF 포도당 64 mg/dL
CSF 단백 48 mg/dL
혈청 포도당 96 mg/dL
가장 가능성 있는 진단은 무엇입니까?

## 선택지

A. 급성 파종성 뇌척수염
B. 뇌염
C. 수막염
D. 신경이완제 악성 증후군

## 해설


고용량 근육경련, 고열, 의식 변화, 근육 경직, 정상 CSF와 급격히 상승한 CK는 신경이완제 악성 증후군(NMS)을 특징짓는다. 다른 선택지는 감염성 뇌염·수막염·파종성 뇌척수염과 일치하지 않는다. 따라서 NMS가 가장 가능성 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001302
