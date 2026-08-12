---
type: qbank
schema_version: 1
id: medqa-us-train-001181
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:017fae8a65d29b86edf21c7009153cee615cd658ca7e96383aa220c5599df265
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hemochromatosis"
related_disease_slugs: []
question_type: prognosis
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

55세 남성이 지난 3개월간 진행된 우상복부 통증과 지난 1년간 "평소와 다른" 설명되지 않는 쇠약감 및 관절통을 주소로 일차 진료 의사를 방문했다. 병력상 환자는 좌식 생활을 하며 외출을 거의 하지 않고, 15년 전 진단받은 당뇨병이 조절 중이며, 심근병증(cardiomyopathy)이 기록되어 있다. 신체 검진상 환자는 독성 병색이 없고, 공막 황달이 관찰되며, 각막은 정상으로 보이고, 우상복부 촉진 시 전반적인 통증이 유발되며, 사지의 피부는 상당히 청동색을 띤다. 이 환자의 기저 질환으로 인해 10~15년 후 가장 위험도가 높은 질환은 무엇인가?

## 선택지

A. 결장 선암종(Colonic adenocarcinoma)
B. 폐섬유증(Pulmonary fibrosis)
C. 전립선 선암종(Prostatic adenocarcinoma)
D. 간세포암종(Hepatocellular carcinoma)

## 해설


이 환자는 혈색소 침착으로 인한 혈색소증을 가지고 있으며, 간경변과 간암 위험이 크게 증가한다. 장기적으로 가장 위험도가 높은 합병증은 간세포암종이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001181
