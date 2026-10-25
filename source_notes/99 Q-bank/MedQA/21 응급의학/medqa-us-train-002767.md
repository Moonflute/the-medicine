---
type: qbank
schema_version: 1
id: medqa-us-train-002767
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ba9356f243ad86236172c9427d03b40314b16124b5a7989188a15f18e0a2c6b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Jehovah's Witness"
  - "refusal of blood transfusion"
  - "minor emergency treatment"
  - "parental medical proxy"
question_type: ethics
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: standard
answer: C
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

12세 남아와 어머니가 교통사고 후 응급실로 이송되었다. 남아는 정면 충돌 사고에서 안전벨트를 매지 않은 채 앞좌석에 타고 있다가 차 밖으로 튕겨 나왔다. 운전자였던 어머니는 현재 소생술을 받고 있다. 아이와 어머니 모두 의식이 없지만, 가족 모두 여호와의 증인이며 급성 상황에서 수혈을 원하지 않는다는 기록이 있다. 남편이자 아버지가 외상 처치 구역에 도착해 가족의 종교적 신념에 따라 누구도 수혈을 원하지 않는다는 의사를 확인한다. 아버지가 공식적인 의료 대리인으로 확인되었다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 병원 윤리위원회에 자문을 요청한다
B. 남아와 어머니 모두에게 수혈하지 않는다
C. 어머니에게는 수혈하지 않고 남아에게는 수혈한다
D. 남아와 어머니 모두에게 수혈한다

## 해설

이 증례는 성인 어머니의 수혈거부 의사가 사전에 기록되고 공식 대리인도 확인하는 상황이므로 그 유효한 본인 의사를 존중한다. 반면12세 미성년자에게 생명구조를 위해 수혈이 긴급히 필요하면 부모의 종교적 거부만으로 이를 배제하지 않는 것이 미국 의료윤리의 원칙으로, 선지 C가 적절하다. 실제로는 출혈·수혈 필요성, 가능한 무수혈 대안, 기록의 유효성과 관할 법·병원 정책을 확인하고 법무·윤리 지원을 병행한다. 단지 여호와의 증인이라는 이유만으로 모든 성인이 같은 제제를 거부한다고 가정하거나, 성인의 명확한 거부를 위급함만으로 무시하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선지 C와 반대로 어머니에게도 수혈이 필요하다고 적은 해설을 성인 본인의 사전거부와 미성년자의 생명구조 처치 구별로 교체했다. 종교명만으로 개인의 동의를 추정하지 않는다.
- 공식/학회 근거: https://www.facs.org/about-acs/statements/recommendations-for-surgeons-caring-for-patients-who-are-jehovah-s-witnesses/
- 공식/학회 근거: https://code-medical-ethics.ama-assn.org/ethics-opinions/decisions-adult-patients-who-lack-capacity

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002767
