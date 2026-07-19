---
type: qbank
schema_version: 1
id: medqa-us-train-009753
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d54cbb9e4f1003a15265af1987b8e2fb6352f3d94cbec2d31683b7acbaca09fe
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근허혈"
  - "S4 심음"
  - "심방성 갤럽"
question_type: diagnosis
difficulty: complex
answer: C
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

64세 여성이 4시간 동안 악화되는 간헐적 오심과 상복부의 작열통 때문에 진료를 받으러 왔다. 흉골 뒤 흉통, 숨참, 구토는 없었다. 고혈압과 제2형 당뇨병이 있으며 20년 동안 매일 담배 한 갑을 피웠다. 유일한 복용 약물은 리시노프릴과 인슐린이다. 체온 37°C, 맥박 분당 90회, 호흡수 분당 12회, 혈압 155/75 mmHg이다. 폐 청진은 깨끗하다. 복부는 부드럽고 심와부 촉진 시 경미한 압통이 있으나 경직이나 반발통은 없다. 장음은 정상이다. 심전도는 제시된 것과 같다. 이 환자의 현재 상태로 인해 심장 진찰에서 가장 가능성 높은 소견은?

## 선택지

A. 감소하는 양상의 이완기 잡음
B. 심실 갤럽
C. 심방 갤럽
D. 감소된 심음

## 해설


고혈압, 당뇨, 흉통이 없고 심전도에서 S4(심방 갤럽) 파형이 나타나는 경우는 심방이 비정상적으로 강하게 수축하면서 발생한다. 이는 급성 심근허혈 시 심방이 경직돼 S4를 만든다. 따라서 가장 가능성 높은 심음은 심방 갤럽이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009753
