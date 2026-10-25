---
type: qbank
schema_version: 1
id: medqa-us-train-000306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:731c3142110464808677934d375df57a83e4444aa53b78b83d6c67d9fec38fa0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "concussion"
  - "post-concussion syndrome"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 지속적인 저등급 두통과 집중력 저하를 주소로 일차 진료 의사를 방문하였다. 환자는 3일 전 음주 상태에서 자전거를 타다가 나뭇가지에 머리를 부딪힌 후 응급실을 방문한 적이 있다. 당시 시행한 뇌 CT는 정상이었으며, 환자는 추적 관찰 지침을 받고 귀가하였다. 사고 이후 환자는 학업에 집중하기 어렵고 강의를 들을 때 때때로 혼란을 느낀다고 한다. 그는 강의 내용을 기억할 수 없으며 때때로 현기증(vertigo)을 느낀다고 말한다. 계통적 문진에서 최근 우울감을 느끼고 수면 장애를 겪고 있다고 하였으나, 자살이나 타살 사고는 부인하였다. 체온은 98.2°F(36.8°C), 혈압은 122/65 mmHg, 맥박은 70회/분, 호흡수는 12회/분, 실내 공기에서의 산소 포화도는 98%이다. 환자의 신경학적 검사 및 심폐 검사는 정상 범위 내에 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 조영제 없는 뇌 CT 촬영
B. 플루옥세틴(Fluoxetine)
C. 휴식 및 일차 진료 추적 관찰
D. 티아민(Thiamine)

## 해설

정상 초기 CT 뒤 수일간 두통·집중곤란·어지러움·수면 변화가 지속되는 것은 뇌진탕의 초기 회복기에 나타날 수 있다. 선지 중 회복 교육과 일차진료 추적(C)이 적절하다. 보통 처음 1~2일 상대적 휴식 후 증상 허용 범위에서 가벼운 신체·인지 활동을 점진 재개하며 장기간 완전 휴식을 권하지 않는다. 새 신경결손·의식 악화·심해지는 두통 등 위험신호는 재평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 3일째 뇌진탕 증상을 장기 post-concussive syndrome으로 확정하거나 무기한 완전 휴식으로 오해하지 않도록 C를 현행 회복지침에 맞게 설명한다.
- 공식/학회 근거: https://www.cdc.gov/traumatic-brain-injury/response/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000306
