---
type: qbank
schema_version: 1
id: medqa-us-train-001728
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e4c8e3d895bbd74caa93e99f04022c9268e22957d04dd41e513ffa56bbcb888
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "transient tachypnea of the newborn"
  - "delayed fetal lung fluid clearance"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOydvOqzvOyEsSDruYjtmLjtnaEgKFRyYW5zaWVudCBUYWNoeXBuZWEgb2YgdGhlIE5ld2Jvcm4pLm1k
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

임신성 당뇨병이 있었던 임신 38주 제왕절개 후 20분이 지나 4630 g (10 lb 3 oz) 남아에게 호흡곤란이 생겼다. 아프가 점수는 1분 7점, 5분 8점이다. 체온은 36.9°C (98.4°F), 맥박은 155회/분, 호흡수는 72회/분, 실내 공기 산소포화도는 88%이다. 끙끙거림과 중등도 늑간·늑골하 함몰이 있고 흉부 청진에서 미만성 수포음이 들린다. 흉부 X선에서 폐 용적 증가와 엽간열 내 액체가 보인다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 지지요법
B. 광범위 항생제 치료
C. 지속적 양압환기
D. 일산화질소 치료

## 해설

제왕절개 후 과팽창·엽간열 액체는 일과성 신생아 빈호흡을 시사한다. 산소·보온·수액/수유 지원 등 지지치료(A)를 하되 저산소증과 함몰이 있어 필요시 CPAP를 사용한다. A를 단순 관찰로 해석해 C의 호흡 지원을 배제하지 않는다. 감염 등 다른 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: TTN의 지지치료 A 유지. SpO2 88%·중등도 함몰에서 산소/CPAP 지원 필요성을 명시.
- https://www.cahs.health.wa.gov.au/~/media/HSPs/CAHS/Documents/Health-Professionals/Neonatology-guidelines/Transient-Tachypnoea-of-the-Newborn.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001728
