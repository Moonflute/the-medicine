---
type: qbank
schema_version: 1
id: medqa-us-train-010067
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29103c672efa732ab21d1e3035fe0009f519d89dbeb5a33661f66a51d5dfd8d6
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "기관지성 암종"
  - "흡연"
  - "직업성 노출"
question_type: prognosis
difficulty: complex
answer: B
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

41세 건설 노동자가 2개월 동안 점점 악화되는 호흡곤란으로 내원했다. 다른 증상은 없다. 고혈압으로 리시노프릴-히드로클로로티아지드를 복용하고 위식도 역류병으로 판토프라졸을 복용한다. 30갑년의 흡연력이 있고 주말에 술을 마신다. 주로 단열재와 건식벽체 설치 작업을 하며 마스크나 보호장비를 정기적으로 사용하지 않는다. 체온 37.0°C, 혈압 144/78 mmHg, 맥박 분당 72회, 호흡수 분당 10회이다. 다음 중 이 환자에게 위험이 가장 높은 악성종양은?

## 선택지

A. 중피종
B. 기관지성 암종
C. 간세포암
D. 대동맥류

## 해설


건설 현장에서 단열재와 건식벽체 작업 시 석면 등 유해 물질에 장기간 노출되며 흡연이 병존하면 기관지암 위험이 가장 높다. 석면은 중피종을 유발하지만 폐암 위험은 흡연과 직업성 노출이 복합될 때 가장 크게 증가한다. 따라서 정답은 기관지성 암종이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010067
