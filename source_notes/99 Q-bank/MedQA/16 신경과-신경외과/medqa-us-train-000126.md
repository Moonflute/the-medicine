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
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soIQg7LKZ7IiYIOymne2bhOq1sCAoQW50ZXJpb3IgY29yZCBzeW5kcm9tZSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

전방 척수증후군에서는 피질척수로와 척수시상로가 침범되어 운동·통각·온도감각이 저하되고, 뒤기둥의 진동·위치·미세촉각은 상대적으로 보존되므로 A가 적절하다. 급성 척수쇼크에서는 이완성 마비·무반사가 나타날 수 있고, 이후 병변 아래 상위운동신경징후가 나타날 수 있다. 반사항진이 단순히 뒤기둥 손상의 소견인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전통핵이라는 오역 및 반사항진은 후방손상에서 발생한다는 오류 교정. anterior cord의 dorsal column 보존 A 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000126
