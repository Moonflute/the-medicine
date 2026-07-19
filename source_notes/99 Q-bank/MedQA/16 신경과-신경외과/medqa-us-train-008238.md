---
type: qbank
schema_version: 1
id: medqa-us-train-008238
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e79d7a5b1fed50a929a7e811ac9625f688ac3c21bb13697e4e555c5cd085f84
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Wilson disease"
  - "low ceruloplasmin"
  - "hepatic and neurologic manifestations"
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

22세 남자가 6개월 동안 점점 걷기 어려워지고 넘어져 내원했다. 지난 1년 동안 친구들은 말이 느려졌다고 했고 손이 서툴러 비디오 게임을 그만두었다. 아버지는 40세에 식도정맥류로 사망했다. 환자는 슬퍼 보이며 체온 37°C(98.6°F), 맥박 70회/분, 혈압 120/80 mm Hg이다. 말이 어눌하고 단조로우며 보행이 불안정하다. 공막 황달, 침흘림, 간과 비장 비대가 있다. 추가 검사에서 가장 가능성 높은 소견은?

## 선택지

A. CAG 반복 증가
B. 뇌척수액 올리고클론 띠
C. 뇌 CT의 뇌실확장
D. 낮은 혈청 세룰로플라스민

## 해설


환자는 간비대·황달·신경증상(운동실조, 언어장애)과 가족력(식도정맥류 사망)으로 윌슨병을 시사한다. 윌슨병에서는 혈청 세룰로플라스민이 감소한다. 따라서 가장 가능성 높은 소견은 낮은 혈청 세룰로플라스민이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008238
