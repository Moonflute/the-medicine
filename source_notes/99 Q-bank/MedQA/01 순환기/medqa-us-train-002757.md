---
type: qbank
schema_version: 1
id: medqa-us-train-002757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10bb27c752f9dd2c0d792fdc2abae30159a07e88d09c5c2b155393e3f082b9d6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension in diabetes"
  - "ACE inhibitor"
  - "renin-angiotensin-aldosterone system"
  - "lisinopril pharmacodynamics"
question_type: mechanism
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

52세 여성이 정기 신체검사를 위해 내원했다. 메트포르민으로 치료 중인 제2형 당뇨병이 있다. 맥박은 85회/분, 호흡수는 15회/분, 혈압은 162/96 mmHg, 체온은 37.0°C이다. 일차 약물치료를 시작했다. 다음 중 이 약물에서 가장 가능성 높은 효과는? 24시간 소변 나트륨 | 알도스테론 | 안지오텐신 II | 말초혈관저항 | 레닌. A행: 증가 | 감소 | 감소 | 감소 | 증가. B행: 증가 | 감소 | 감소 | 감소 | 감소. C행: 증가 | 증가 | 증가 | 증가 | 증가. E행: 증가 | 감소 | 증가 | 감소 | 증가.

## 선택지

A. A행
B. B행
C. C행
D. E행

## 해설


ACE 억제제는 안지오텐신 II 생성을 감소시켜 알도스테론 분비를 억제하고, 레닌 활성을 증가시킨다. 이로 인해 소변 나트륨 배설이 증가하고 말초혈관저항이 감소한다. 따라서 A행의 변화가 가장 일치한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002757
