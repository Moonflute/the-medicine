---
type: qbank
schema_version: 1
id: medqa-us-train-008117
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a45136a2c6279acd5ab88654b040e478174305d594362193b371df8e890df0e
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "obstructive sleep apnea"
  - "obesity"
  - "weight loss"
  - "Obstructive sleep apnea"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남자가 주간 피로로 내원했다. 아침에 심한 두통과 피로가 있고 충분히 자도 계속 피곤하다. 혼자 살며 매일 맥주 2~3병을 마시고 커피를 규칙적으로 마시며 10갑년의 흡연력이 있다. 체온 99.0°F(37.2°C), 혈압 180/110 mm Hg, 맥박 80회/분, 호흡수 13회/분, 산소포화도 98%이다. BMI 39 kg/m²이고 나머지 심폐 및 신경학적 검사는 정상이다. 가장 적절한 다음 처치는?

## 선택지

A. 저녁 음주 피하기
B. 카페인 피하기
C. 우울증 선별
D. 체중 감량

## 해설

심한 비만, 주간 졸림과 아침 두통은 폐쇄성 수면무호흡을 의심하게 하며, 제시된 선택지 중 D, 체중 감량이 중요한 장기 관리다. 저녁 음주를 피하는 것도 도움이 될 수 있지만 비만에 대한 치료를 대체하지 못한다.

체중감량만을 기다리면서 진단과 치료를 미뤄서는 안 된다. 실제로는 수면검사 등을 통한 확인과 적응증에 따른 양압기 치료를 고려한다. 혈압 180/110 mmHg는 별도로 재측정하고 급성 장기손상 여부와 치료를 평가해야 한다. 체중감량이 모든 OSA에서 PAP보다 효과적인 유일한 초기치료라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 체중감량이 OSA의 가장 효과적인 단독 초기치료라는 과장을 교정하고 수면검사/PAP와 매우 높은 혈압 평가의 필요성 분리.
- https://site.thoracic.org/advocacy-patients/patient-resources/positive-airway-pressure-cpap-and-bpap-for-adults-with-obstructive-sleep-apnea

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008117
