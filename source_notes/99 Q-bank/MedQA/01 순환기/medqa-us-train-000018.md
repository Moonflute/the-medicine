---
type: qbank
schema_version: 1
id: medqa-us-train-000018
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d23320984da39413ff5a2853f2421f5182660bd081a4fd116c27cf3dfe7b3b7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "메스꺼움"
  - "복부 불편감"
  - "제2형 당뇨병"
  - "고혈압"
  - "말초동맥질환"
  - "비만"
  - "식도위십이지장내시경술"
  - "수소 호기 검사"
  - "심장 스트레스 검사"
  - "복부 초음파 검사"
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 남성이 지난 4개월간 반복되는 메스꺼움과 복부 불편감으로 의사를 찾아왔다. 불편감은 상복부에 위치하며, 때때로 식사 후, 특히 과식 후에 발생한다. 그는 소화를 돕기 위해 저녁 식사 후 산책을 시도했지만, 불편감은 오히려 증가했다. 지난 3주 동안 그는 아파트 계단을 오를 때도 증상이 있었다. 그는 제2형 당뇨병, 고혈압, 2단계 말초동맥질환을 앓고 있다. 그는 지난 45년간 매일 한 갑의 담배를 피웠다. 그는 매일 맥주 한두 잔을 마시며, 주말에는 가끔 더 많이 마신다. 현재 복용 중인 약물은 메트포르민, 에날라프릴, 아스피린이다. 키는 168cm, 체중은 126kg이며, BMI는 45 kg/m2이다. 체온은 36.4°C, 맥박은 78회/분, 혈압은 148/86 mmHg이다. 신체 검진에서 복부는 부드럽고 압통이 없었으며 장기 비대도 없었다. 양측 족부 맥박은 촉지되지 않았다. 심전도(ECG)는 이상 소견을 보이지 않았다. 다음 중 진단을 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 식도위십이지장내시경술 (EGD)
B. 수소 호기 검사
C. 심장 스트레스 검사
D. 우상복부 복부 초음파 검사

## 해설


상복부 불편감과 운동 시 악화, 말초동맥맥박 미감지는 심혈관성 협심증을 의심하게 한다. 협심증을 평가하기 위해서는 심장 스트레스 검사가 가장 적절하다. 다른 검사는 위장관 질환을 평가하지만, 환자의 위험 요인과 증상은 심장성 원인을 시사한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000018
