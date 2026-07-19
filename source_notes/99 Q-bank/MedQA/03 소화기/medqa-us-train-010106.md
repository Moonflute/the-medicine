---
type: qbank
schema_version: 1
id: medqa-us-train-010106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b2a44b6f381a179cd5c5ca2c05250164cb10e94bc59a06c394e2eda3a081d7aa
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유당불내증"
  - "수소 호기 검사"
  - "락타아제 결핍"
question_type: investigation
difficulty: simple
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

6세 여아가 어머니와 처음 소아과에 내원했다. 가족이 중국에서 막 이주했으며 딸이 미국 식단에 적응하기 어려워하는 것 같다고 한다. 특히 우유나 치즈를 먹으면 복부 불편감과 가스 증가가 생긴다. 소아과 의사가 진단 검사를 의뢰했다. 다음 중 이 환자에서 가장 가능성 높은 결과는?

## 선택지

A. 음성 수소 호기 검사
B. 양성 수소 호기 검사
C. 양성 테크네튬-99 스캔
D. 비정상 복부 초음파

## 해설


우유 섭취 후 복부 불편감과 가스는 유당불내증을 의심하게 한다. 유당불내증 환자는 장내 세균이 유당을 발효하면서 수소를 생성하므로 수소 호기 검사가 양성으로 나타난다. 따라서 양성 수소 호기 검사가 가장 가능성 높은 결과이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010106
