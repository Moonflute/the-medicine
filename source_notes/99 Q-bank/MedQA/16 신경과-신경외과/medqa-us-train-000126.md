---
type: qbank
schema_version: 1
id: medqa-us-train-000126
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13b1f0f55a4d7c85d11bab4641984b14370728f2d01af36575f8fdfe236d9a22
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "vertebral burst fracture"
  - "flaccid paralysis"
  - "anterior cord syndrome"
question_type: diagnosis
difficulty: standard
answer: A
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

22세 남성이 자동차 사고 후 응급실로 급히 이송되었습니다. 환자는 양쪽 다리에 위약감과 저린 느낌이 든다고 말합니다. 또한 허리 통증을 호소합니다. 기도, 호흡, 순환은 정상이며 의사소통이 가능합니다. 신경학적 검사상 양측 하지의 이완성 마비와 T10-T11 수준까지의 통증 및 온도 감각 저하가 관찰되며 진동 감각은 정상입니다. 척추 컴퓨터단층촬영(CT) 결과 T11 수준에서 척추체 파열 골절(vertebral burst fracture)이 확인되었습니다. 이 환자에게서 나타날 가능성이 가장 높은 소견은 무엇입니까?

## 선택지

A. 미세 촉각 보존
B. 거친 촉각 보존
C. 병변 수준에서의 반사 항진
D. 정상 방광 기능

## 해설


전방 척수증후군에서는 전통핵·피라미드 경로가 손상돼 통증·온도와 운동이 상실되고, 후방 척수(미세 촉각·진동) 기능은 보존된다. 따라서 환자는 미세 촉각이 유지될 것이다. 정답은 미세 촉각 보존이다. (반사 항진은 후방 손상에서 나타난다)

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000126
