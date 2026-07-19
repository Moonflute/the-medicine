---
type: qbank
schema_version: 1
id: medqa-us-train-000593
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86421330fa1bd8c4f793ba060b48069a251d26731250582cb4b58043569926e4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Gustilo IIIC injury"
  - "comminuted fracture"
  - "peroneal nerve injury"
  - "asthma"
question_type: management
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

23세 남성이 자동차 사고 후 구급차를 통해 응급실로 이송되었다. 그는 몇 시간 동안 두 차량 사이에 끼어 있었다. 환자는 천식 병력이 있다. 그는 간헐적으로 알부테롤(albuterol) 흡입기를 사용한다. 환자는 운전자가 아니었으며, 사고 전 파티에서 맥주를 몇 잔 마셨다고 인정했다. 구급차 내에서의 활력 징후는 안정적이었다. 응급실 도착 즉시 환자는 평가 및 수술적 개입을 위해 수술실로 이송되었다. 환자의 오른쪽 다리는 경골 중간 부위의 Gustilo IIIC 손상과 심한 분쇄 골절이 있는 것으로 확인되었다. 왼쪽 다리도 유사한 손상을 입었으나 비골 신경(peroneal nerve) 손상이 동반되었다. 마취과 의사가 마취 유도를 시작한다. 이 환자에게 금기인 약물은 무엇인가?

## 선택지

A. 에토미데이트(Etomidate)
B. 할로탄(Halothane)
C. 네오스티그민(Neostigmine)
D. 석시닐콜린(Succinylcholine)

## 해설


천식 환자는 히스타민 및 부교감성 자극에 민감해 근육 이완제인 석시닐콜린이 악성 고칼륨혈증 및 악성 고열을 유발한다. 따라서 석시닐콜린은 금기이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000593
