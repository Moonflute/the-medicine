---
type: qbank
schema_version: 1
id: medqa-us-train-000413
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3b82f7e0140dc4c4dfe4fea076a0af0fecc8eb2f65c4763d7fe25b7e0c55b502
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "motor vehicle collision"
  - "trauma"
  - "open fracture"
  - "abdominal distension"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 자동차 사고로 내원하였다. 환자는 초기 내원 시 병력을 제공할 수 없는 상태이다. 체온은 36.4°C, 혈압은 104/74 mmHg, 맥박은 150/회, 호흡수는 12/회, 실내 공기에서의 산소 포화도는 98%이다. 진찰 결과, 환자는 눈을 뜨지 않고, 통증에 움츠러들며, 이해할 수 없는 소리를 낸다. 흉부와 복부에 명백한 외상 징후가 있다. 복부는 팽만되어 있고 촉진 시 현저한 압통이 있다. 또한 왼쪽 대퇴골의 명백한 개방성 변형이 있다. 가장 적절한 초기 처치는 무엇인가?

## 선택지

A. 100% 산소 공급
B. 응급 개방 골절 정복술
C. 탐색적 복강경 검사
D. 기관내 삽관

## 해설

눈을 뜨지 않음(E1), 알아들을 수 없는 소리(V2), 통증에 사지를 회피함(M4)이므로 GCS는 7이다. 외상 환자의 중증 의식저하는 기도 보호 실패와 흡인의 위험이 커서 D, 기관삽관을 통한 기도 확보가 적절하다. 경추 보호와 혈역학 관리를 병행한다. 산소포화도 98%라는 한 시점의 측정치만으로 기도 보호 능력이 보장되는 것은 아니며, 본문에서 저산소혈증이 확인되었다고 할 수도 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. GCS E1V2M4=7의 중증 의식저하에 따른 기도 보호가 근거이며, 정상 SpO2에서 실제 저산소혈증이 있다는 설명을 교정.
- 공식/학회 근거: https://aci.health.nsw.gov.au/networks/trauma/resources/airway

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000413
