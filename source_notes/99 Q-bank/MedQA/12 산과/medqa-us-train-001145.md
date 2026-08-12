---
type: qbank
schema_version: 1
id: medqa-us-train-001145
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:741bc9d5f5723d7e09a27cd71b9a6f8d01e75d705e01bfbd59a3ae8c73251a39
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "macrocytic anemia"
  - "folate deficiency"
  - "neural tube defects"
question_type: prognosis
related_disease_slugs: []
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

21세 여성이 첫 임신을 시도하기 전 산전 상담을 위해 일차 진료 의사를 방문했다. 그녀는 열렬한 달리기 선수이며, 의사는 그녀의 체질량지수(BMI)가 17.5임을 확인했다. 환자는 만성 피로를 호소하며, 이를 바쁜 생활 방식 탓으로 돌리고 있다. 의사가 시행한 일반혈액검사(CBC) 결과 혈색소(Hgb) 10.2 g/dL(정상 12.1~15.1 g/dL), 평균적혈구용적(MCV) 102 µm^3(정상 78~98 µm^3)로 나타났다. 메티오닌(methionine)의 이화 산물에 대한 혈청 측정 결과 수치가 상승했다. 이 환자가 임신할 경우 가장 위험이 높은 합병증은 무엇인가?

## 선택지

A. 임신성 당뇨병
B. 전치 태반
C. 태반 조기 박리
D. 유착 태반

## 해설


거대 적혈구와 메티오닌 대사산물 상승은 엽산 결핍성 거대적아구성 빈혈을 의미하며, 임신 시 태아 신경관 결손 위험이 크게 증가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001145
