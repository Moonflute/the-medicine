---
type: qbank
schema_version: 1
id: medqa-us-train-005876
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95728bb88a73001b3ad9b5a63038adc53704eee8be2c223ab7d00cb7cdd25e27
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "청소년 예방접종"
  - "HPV 백신"
  - "건강검진"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: A
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

12세 여아가 정기 건강검진을 위해 일차진료를 받으러 왔다. 천식이 있어 운동할 때 주 1~2회 흡입기를 사용한다. 흡연하지 않고 현재 성관계는 없지만 남자친구는 있다. 어머니와 아파트에 살며 학교생활을 잘한다. 체온은 97.6°F(36.4°C), 혈압은 124/75 mmHg, 맥박은 분당 80회, 호흡수는 분당 12회, 산소포화도는 98%이고 신체검사는 정상이다. 다음 중 현재 이 환자에게 가장 적절한 것은 무엇인가?

## 선택지

A. HPV 백신
B. 고혈압 선별검사
C. 골반검사
D. 혈청 지질 및 콜레스테롤 검사

## 해설

12세는 성관계 여부와 무관하게 HPV 정기 접종이 권장되는 연령으로 A가 적절하다. 원문은 현재 성관계가 없다고 명시한다. 예방접종은 노출 전 시행하는 것이 이상적이며 여성에게만 권장되는 백신도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 성관계가 없다는 본문과 반대인 해설을 교정하고 HPV 정기 접종 기준 명확화.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005876
