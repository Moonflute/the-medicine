---
type: qbank
schema_version: 1
id: medqa-us-train-009113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f14a677bfd990030a7906236e8af96d4e0ff2db6cdc963bf2489e64309e86586
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ASC-US"
  - "atypical squamous cells of undetermined significance"
  - "HPV testing"
question_type: investigation
difficulty: simple
answer: D
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

24세 G1P1 여성이 자궁경부 세포검사 결과를 상담하기 위해 내원했다. 이전 두 번의 자궁경부 세포검사는 정상이었다. 가족력으로 할머니의 유방암과 언니의 자궁경부 상피내암이 있다. 현재 세포검사 결과는 다음과 같다. 검체 적절성: 평가에 충분함. 판독: 의미 불명의 비정형 편평세포(ASC-US). 이 환자에게 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 3년 후 자궁경부 세포검사 반복
B. 질확대경검사 시행
C. 질 도말검사 시행
D. 인유두종바이러스(HPV) 검사

## 해설


ASC-US 결과는 인유두종바이러스(HPV) 감염 여부를 확인하는 것이 다음 단계이다. HPV 양성은 추가 검사를 결정하고, HPV 음성은 관찰을 권한다. 따라서 HPV 검사가 가장 적절한 조치이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009113
