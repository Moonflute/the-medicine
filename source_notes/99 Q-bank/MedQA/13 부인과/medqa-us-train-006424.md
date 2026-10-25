---
type: qbank
schema_version: 1
id: medqa-us-train-006424
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c55bc281577092fd306d7aa8c101f4b7f15da9f33e4f721cdc6c741ba99914b0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "HPV 예방접종"
  - "성매개감염 선별"
  - "자궁경부암 예방"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
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

24세 여성이 정기 골반 진찰을 위해 내원했다. 건강하며 월경은 30일 간격으로 7일간 지속된다. 마지막 월경은 6일 전이었다. 비정상 자궁경부 세포검사 병력은 없고 마지막 검사는 13개월 전이었다. 남성 파트너 3명과 성관계를 하며 콘돔을 일관되게 사용한다. 성매개감염 검사를 받은 적은 없다. 54세 어머니가 유방암을 앓았다. Tdap, MMR 및 수두 예방접종은 최신 상태이다. 체온은 37.1°C(98.8°F), 맥박은 분당 68회, 혈압은 108/68 mm Hg이다. 신체진찰은 정상이다. HIV, 임질 및 클라미디아 검사와 더불어 현재 가장 적절한 권고는?

## 선택지

A. HPV 예방접종
B. 매독 검사
C. 유방촬영술
D. HPV 검사

## 해설

26세까지 미완료 HPV 예방접종을 보충하므로 A가 적절하다. 성생활 여부와 무관하게 권고하며 백신은 자궁경부암 선별검사를 대체하지 않는다. 13개월 전 정상 세포검사만으로 매년 반복할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미접종 24세 HPV 백신 A 유지. 예방접종과 선별검사를 경쟁적 우선순위로 둔 설명 수정.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006424
