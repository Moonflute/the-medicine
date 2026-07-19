---
type: qbank
schema_version: 1
id: medqa-us-train-001219
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5fe5e92fd0a3fcf1b4a1a19a5de65ba0a8ddcad8299e08abd547eba59ba34c3a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "congestive heart failure"
  - "pulmonary edema"
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

울혈성 심부전(congestive heart failure)이 있는 66세 남성이 호흡곤란 악화를 주소로 응급실에 내원하였다. 증상은 지난 3일간 악화되었다. 혈압은 126/85 mm Hg, 심박수는 82회/분이다. 신체 검진에서 양측 폐 기저부의 수포음(bibasilar crackles)이 확인된다. 흉부 X-선 검사에서 양측 폐부종이 관찰된다. 현재 복용 중인 약물은 metoprolol succinate와 captopril이다. 환자의 증상을 완화하기 위해 추가적인 약물을 처방하고자 한다. 다음 중 루프 이뇨제(loop diuretics)에 관한 설명으로 옳은 것은?

## 선택지

A. 루프 이뇨제는 Na+/K+/Cl- 공동수송체(cotransporter)의 작용을 억제한다
B. 루프 이뇨제는 암모니아 독성을 유발할 수 있다
C. 루프 이뇨제는 대사성 산증을 유발할 수 있다
D. 루프 이뇨제는 고지혈증을 유발할 수 있다

## 해설


루프 이뇨제는 Henle 이음의 Na⁺/K⁺/2Cl⁻ 공동수송체를 억제해 나트륨과 물 배설을 촉진한다. 이는 폐부종을 감소시키는 주요 작용이다. 따라서 설명이 맞는 선택지는 Na⁺/K⁺/Cl⁻ 공동수송체 억제이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001219
