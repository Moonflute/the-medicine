---
type: qbank
schema_version: 1
id: medqa-us-train-000879
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:26b7ba3fcfd7f6f7a6537f55855c5169dcffcff1cd1e3d20a3e2a835518d32fd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pheochromocytoma"
  - "multiple endocrine neoplasia type 2A"
  - "medullary thyroid carcinoma"
question_type: diagnosis
difficulty: standard
answer: B
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

16세 남성이 두근거리는 두통, 가슴 두근거림, 과도한 발한 증상을 주소로 응급실에 내원하였다. 과거력상 칼슘 옥살레이트(calcium oxalate)로 구성된 신장 결석이 있었다. 흡연이나 음주는 하지 않는다. 가족력상 어머니가 갑상선암으로 사망하였다. 활력 징후는 체온 37.1°C, 혈압 200/110 mmHg, 맥박 120회/분이다. 24시간 소변 칼슘, 혈청 메타네프린(metanephrines), 혈청 노르메타네프린(normetanephrines) 수치가 모두 상승하였다. 이 환자의 상태를 유발하는 유전자 돌연변이는 무엇인가?

## 선택지

A. BRAF
B. RET proto-oncogene
C. BCL2
D. HER-2/neu (C-erbB2)

## 해설


고혈압, 고혈압 위기, 24시간 소변 및 혈청 메타네프린 상승은 RET 유전자의 활성화 변이를 가진 MEN2A와 연관된 pheochromocytoma를 시사한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000879
