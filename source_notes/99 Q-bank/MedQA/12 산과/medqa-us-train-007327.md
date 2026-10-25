---
type: qbank
schema_version: 1
id: medqa-us-train-007327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:107f26d9209f624a862f239c9e9a08d4e25e7abc9d757cf90582fabce8352493
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 생백신 금기"
  - "MMR 비면역"
  - "산후 예방접종"
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 임신 1기 여성(G1P0)이 첫 산전 진료를 위해 가정의학과에 내원했다. 어머니의 지시에 따라 매일 엽산 보충제를 복용하고 있다. 5년 동안 하루 몇 개비의 담배를 피웠다. 소아기 기록에서 홍역·유행성이하선염·풍진(MMR) 비면역으로 확인되었다. 심박수는 78회/분, 호흡수 14회/분, 체온 36.5°C(97.7°F), 혈압 112/70 mmHg, BMI는 약 26kg/m²이다. 심장에 잡음은 없고 양쪽 폐음은 깨끗하다. 표준 산전검사를 의뢰했다. 이 환자의 산전 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 산후 MMR 백신 접종
B. 임신 중 MMR 백신 접종
C. 혈청검사 후 산후 백신 접종
D. 산후 MMR 백신과 면역글로불린 접종

## 해설

이미 비면역이 기록된 환자에게 MMR 생백신은 임신 중 투여하지 않고 산후 접종하므로 A이다. 임신 중 금기는 태아에 대한 이론적 위험에 근거하며, 우발적 접종 자체가 임신중절 사유는 아니다. 이 문항에서 추가 혈청검사를 접종의 전제처럼 요구하거나, 노출 병력이 없는 환자에게 면역글로불린을 일률적으로 투여할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: A와C를 혼동한 혈청검사후접종 해설 수정. MMR 임신금기는 이론적위험,비면역확인된 산후접종A.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007327
