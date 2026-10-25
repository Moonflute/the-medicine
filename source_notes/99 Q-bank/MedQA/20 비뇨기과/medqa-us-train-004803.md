---
type: qbank
schema_version: 1
id: medqa-us-train-004803
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:32a4099cde176efb2ce8e54a5b5da2b3501237b9713fc2c76f9e14a75fe13068
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "신세포암"
  - "육안적 혈뇨"
  - "흡연 관련 비뇨기암"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만인 63세 남성이 일주일 동안 세 차례 붉은 소변을 보아 내원했다. 지난 한 달 동안 반복되는 두통과 간헐적인 흐린 시야도 있었다. 양성 전립선 비대증이 있고 주유소 직원으로 일한다. 40년 동안 하루 한 갑을 피웠고 음주는 하지 않는다. 현재 탐스로신을 복용한다. 체온은 37.4°C (99.4°F), 맥박은 분당 90회, 혈압은 152/95 mm Hg이다. 얼굴이 홍조를 띠고 심폐 진찰은 정상이다. 복부는 부드럽고 압통이 없으며 직장수지검사에서 결절 없는 전립선 비대가 보인다. 소변검사에서 혈액 3+, 포도당 음성, 단백 음성, 백혈구 1~2/고배율시야, 적혈구 40~45/고배율시야, 적혈구 원주 없음이 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 신장결석
B. 이행세포 방광암
C. 신장 호산성 종양
D. 신세포암

## 해설

혈뇨에 두통·시야흐림·얼굴 홍조가 동반되어 EPO 관련 적혈구증가증 같은 부종양 현상을 고려하게 하는 출제 맥락이다. 신세포암 D는 비만·흡연·고혈압과 연관되어 이 조합에 가장 적절하다. 다만 Hb/Hct가 제시되지 않아 적혈구증가증이 실제 확인되었다고 할 수는 없다. RCC가 모든 비뇨기계 악성종양 가운데 가장 흔하다는 설명은 틀리며, 무통성 혈뇨에서는 방광암 등도 실제 감별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. RCC를 모든 비뇨기 악성종양 중 최다로 잘못 설명한 오류와 본문에 없는 적혈구증가증 확정 주장을 피하도록 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004803
