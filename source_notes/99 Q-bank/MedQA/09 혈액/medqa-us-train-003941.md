---
type: qbank
schema_version: 1
id: medqa-us-train-003941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6467b35529786e3f73adf2c369ae6c5bfdf8e27f071b77f9a03ba322ec10952c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hereditary spherocytosis"
  - "RBC membrane defect"
  - "extravascular hemolysis"
  - "negative direct antiglobulin test"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 건강한 남성의 헌혈 전 혈액검사에서 혈색소 10.8 g/dL, MCHC 42%, 망상적혈구 3.2%, 비장 약간 촉지, 직접항글로불린검사 음성이었다. 다음 중 가장 가능성 높은 진단의 원인은?

## 선택지

A. 골수 저세포성
B. 적혈구의 유전성 막 이상
C. 면역매개 용혈
D. 산화제 용혈

## 해설


높은 MCHC·망상적혈구 증가·비장비대와 DAT 음성은 유전구형적혈구증 같은 적혈구막 이상 B를 지지한다. 적혈구막 구조 단백 결함으로 표면적이 감소하여 비장에서 제거된다. 도말 그림이 제공되지 않아 직접 구형적혈구를 관찰했다고 단정하지 않는다. 특히 MCHC42%는 매우 높아 실제 검체/기기 간섭을 확인하고 필요한 막 관련 검사를 결합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003941 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: DAT 음성·MCHC 증가·비장비대의 유전성 막 이상 B 유지; 누락된 도말을 관찰한 것처럼 확진하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003941
