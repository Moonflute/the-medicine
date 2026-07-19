---
type: qbank
schema_version: 1
id: medqa-us-train-000531
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be5b37f8ab3dc26780fdab54437c2b1a2fe477140542091914ec2c7e32d5c12f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "diabetes"
  - "hypertension"
  - "myocardial infarction"
  - "obesity"
  - "acute decompensated heart failure"
question_type: mechanism
difficulty: standard
answer: D
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

57세 남성이 호흡곤란을 주소로 응급실에 내원하였다. 그는 휴일에 가족과 저녁 식사를 하던 중 매우 심한 호흡곤란을 느껴 내원하게 되었다. 과거력상 당뇨병, 고혈압, 2회의 심근경색, 비만이 있다. 신체 검진에서 양측 폐의 수포음(crackles)과 경정맥 팽창(jugular venous distension)이 관찰된다. 흉부 X-선 검사에서 심장 음영의 확대와 늑골횡격막각(costophrenic angles)의 둔화가 확인된다. 환자는 급성 증상에 대해 약물 치료를 시작하였다. 2시간 후, 환자는 증상이 크게 호전되었다고 말하며, 재시행한 흉부 X-선 검사에서도 심장 음영의 확대가 관찰된다. 투여되었을 가능성이 가장 높은 약물의 특성으로 옳은 것은?

## 선택지

A. 호흡 억제를 유발할 수 있다
B. 정맥 확장을 일으키고 전부하(preload)를 감소시킨다
C. 심근 수축력과 후부하(afterload)를 증가시킨다
D. 만성 사용 시 장기적인 신성(nephrogenic) 적응을 유발한다

## 해설


급성 심부전에서 증상 완화를 위해 투여된 약물은 일반적으로 루프 이뇨제인 furosemide이다. 고용량 루프 이뇨제는 장기 사용 시 신성(nephrogenic) 내분비 적응을 유발한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000531
