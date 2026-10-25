---
type: qbank
schema_version: 1
id: medqa-us-train-000449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0a25323ca770aae936389b7beb49154bf9a3836650a4f521db282d215797fdb
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Intracerebellar mass"
  - "Craniopharyngioma"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzsnbjrkZDsooUgKENyYW5pb3BoYXJ5bmdpb21hKS5tZA
difficulty: complex
answer: D
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

11세 소년이 구토 증상으로 어머니와 함께 소아과에 내원하였다. 환자는 지난 일주일 동안 구토를 지속해 왔으며 증상은 호전되지 않았다. 증상은 아침에 더 심하고 하루가 지나면서 호전되는 경향이 있다. 환자는 간헐적인 두통을 호소하며 며칠 전 설사를 한 적이 있다. 환자는 균형 잡힌 식단을 섭취하며 탄산음료나 주스는 마시지 않는다. 환자의 형제들 모두 최근 자연적으로 호전된 설사를 앓았다. 체온은 99.5°F(37.5°C), 혈압은 80/45 mmHg, 맥박은 90회/분, 호흡수는 16회/분, 실내 공기에서의 산소 포화도는 98%이다. 신체 검진상 환자는 급성 고통을 보이지 않는다. 심폐 검진에서 경미한 기능성 심잡음(flow murmur)이 확인된다. 신경학적 검진에서 뇌신경 II-XII는 전반적으로 정상이나 환자의 시야가 약간 좁아진 것이 확인된다. 환자의 보행은 안정적이며 제자리에서 점프할 수 있다. 이 환자의 증상에 대한 가장 직접적인 원인은 무엇인가?

## 선택지

A. 비피막형, (+) ssRNA 바이러스
B. 그람 양성 장독소
C. 소뇌 종괴(Intracerebellar mass)
D. 라트케 주머니(Rathke's pouch)의 잔재

## 해설

정답은 D, 라트케 주머니의 잔재이다. 아침 두통·구토와 시야 협착은 소아의 안장/안장위 병변인 두개인두종을 고려하게 한다. 두개인두종은 라트케 주머니/두개인두관의 잔여 상피와 연관된 상피성 종양이며, 단순히 뇌하수체 전엽에 생기는 선천성 낭종 또는 라트케열낭종과 같은 질환은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두개인두종 명칭 오역과 이를 뇌하수체 전엽의 선천성 낭종으로 단정한 오류 교정. 발생기원 D 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000449
