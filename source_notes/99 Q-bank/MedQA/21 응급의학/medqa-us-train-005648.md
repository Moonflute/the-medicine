---
type: qbank
schema_version: 1
id: medqa-us-train-005648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4c3aff47aaa3be886a55cf0f1ce33685f82638204c1c08856d35986ae555ebdb
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심장눌림증"
  - "외상성 심낭삼출"
  - "Beck 삼징"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 자동차 사고 후 가슴 중앙 통증과 약간의 호흡곤란으로 응급실에 왔다. 우측 팔과 다리에 손상을 입었으나 의식 소실은 없었다. 체온은 37°C(98.6°F), 맥박은 분당 110회, 호흡수는 분당 18회, 혈압은 90/60 mmHg이다. 사람, 장소, 시간에 대한 지남력은 정상이다. 상지와 흉부에 여러 손상이 있다. 흉골각에서 10cm 위까지 경정맥 박동이 보이고 심장 청진음은 작다. 폐 청진은 깨끗하다. 심전도가 제시되어 있다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 가스트로그라핀을 이용한 조영 식도조영술
B. 흉부 X선
C. 뇌 CT
D. 경흉부 심초음파

## 해설

둔상 후 저혈압, 경정맥 팽창, 심음 감소가 함께 나타나므로 심장압전을 우선 의심한다. 양쪽 호흡음이 유지되는 상황에서 심낭액과 압전 소견을 신속하게 확인할 침상 경흉부 심초음파(D)가 적합하다. 본문에 흉골 골절이 제시된 것은 아니며, 누락된 심전도 그림의 형태를 추정할 필요도 없다. 상태가 악화되면 영상 검사 때문에 외상외과의 응급 감압과 수술을 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저혈압·경정맥 팽창·심음 감소로 심장압전을 의심할 수 있다. 원문에 없는 흉골 골절을 해설에서 삭제하고 침상 심초음파와 응급 처치의 관계를 명확히 한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005648
