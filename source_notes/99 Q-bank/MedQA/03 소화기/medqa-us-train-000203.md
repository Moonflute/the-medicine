---
type: qbank
schema_version: 1
id: medqa-us-train-000203
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3bcaad68a1c89f2fa0762dac486a54037287f6e7ad2213b446359307026d4b4c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Cholecystitis"
  - "Choledocholithiasis"
  - "Pancreatitis"
  - "Duodenal peptic ulcer"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXsl7wubWQ
question_type: diagnosis
difficulty: complex
answer: C
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

61세 당뇨병 여성 환자가 지난 24시간 동안 반복되는 복통을 주소로 응급실에 내원하였다. 환자는 통증이 둔한 통증(dull aching) 양상이며 등 쪽으로 방사되고 식사 후 악화된다고 말한다. 또한 메스꺼움과 간헐적인 구토를 호소한다. 과거에도 유사한 증상으로 반복적으로 입원한 적이 있다. 체온은 37°C, 호흡수는 16회/분, 맥박은 77회/분, 혈압은 120/89 mmHg이다. 신체 검진에서 겨드랑이 피부의 어두운 과색소침착이 관찰된다. 지난달 시행한 혈액 검사 결과는 다음과 같다: 당화혈색소(HbA1c): 9.1%, 중성지방(Triglyceride): 675 mg/dL, LDL-콜레스테롤: 102 mg/dL, HDL-콜레스테롤: 35 mg/dL, 총 콜레스테롤: 250 mg/dL, 혈청 크레아티닌: 1.2 mg/dL, BUN: 12 mg/dL, 알칼리성 인산분해효소(Alkaline phosphatase): 100 U/L, 알라닌 아미노전이효소(ALT): 36 U/L, 아스파르트산 아미노전이효소(AST): 28 U/L. 이 환자의 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 담낭염(Cholecystitis)
B. 총담관결석증(Choledocholithiasis)
C. 췌장염(Pancreatitis)
D. 십이지장 소화성 궤양(Duodenal peptic ulcer)

## 해설


복통이 식후 악화되고, 고중성지방혈증, 비만, 당뇨, 겨드랑이 색소침착은 급성 췌장염의 전형적인 위험 인자이다. 다른 선택지는 증상 양상과 실험실 결과가 맞지 않는다. 따라서 췌장염이 가장 가능성 높다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000203
