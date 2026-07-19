---
type: qbank
schema_version: 1
id: medqa-us-train-005323
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ad50fa72e79b3d37eae64fee262d3dca6c177f3caa4a7905cc696a3228c5cd94
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ASC-US"
  - "HPV 음성"
  - "자궁경부암 선별검사"
question_type: management
difficulty: simple
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

32세 여자의 정기 자궁경부세포검사에서 ASC-US가 보였으나 반사 HPV 검사는 음성이다. 이전 세포검사는 정상이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 정기 선별검사로 3년마다 세포검사 반복
B. 질확대경검사
C. 3년 후 세포검사와 HPV 검사 반복
D. 절제 치료

## 해설


ASC-US가 보였지만 HPV 검사가 음성이고 이전 검사가 정상인 경우, 3년 후에 다시 세포검사와 HPV 검사를 시행하면 충분히 안전하게 추적할 수 있다. HPV 음성은 고위험 감염이 없음을 의미하므로 즉각적인 추가 검사나 치료는 필요하지 않다. 따라서 가장 적절한 처치는 3년 후 세포검사와 HPV 검사를 반복하는 것이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005323
