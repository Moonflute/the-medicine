---
type: qbank
schema_version: 1
id: medqa-us-train-006243
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0dc53e30bfaf0872a905981a3a180d7011c7baa92e7cd76035489bc9a14576f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "원위 신세뇨관 산증"
  - "정상 음이온차 대사성 산증"
  - "수소 이온 분비 장애"
  - "Distal renal tubular acidosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2MpeyEuOq0gCDsgrDspp0gMe2YlSAoUmVuYWwgVHVidWxhciBBY2lkb3NpcyBUeXBlIDEpLm1k
question_type: mechanism
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "양이온 차 오역을 음이온차로 고치고 산증인데 높은 요 pH라는 결정 단서를 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

3개월 여아가 2주 동안 지속된 수유곤란, 보챔 및 구토로 내원했다. 임신 36주에 태어났고 키 5백분위수, 체중 3백분위수이다. 체온은 36.8°C(98.2°F), 맥박은 분당 112회, 호흡수는 분당 49회이다. 검사에서 혈청 Na⁺ 138 mEq/L, K⁺ 3.1 mEq/L, Cl⁻ 115 mEq/L, 암모니아 23 μmol/L이며 소변 pH는 6.9이다. 동맥혈가스는 pH 7.28, pO₂ 96 mmHg, HCO₃⁻ 12 mEq/L이다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 분지쇄 아미노산 대사 장애
B. CFTR 유전자 기능 결함
C. 원위 세뇨관의 수소 이온 분비 불능
D. 오르니틴 트랜스카바밀레이스 결핍

## 해설

음이온차는 138−(115+12)=11로 정상 범위이며 고염소성 대사성 산증과 저칼륨혈증이 있다. 전신 산증에도 요 pH가 6.9로 높아 원위부 H+ 분비 장애인 1형 RTA를 지지한다. 정상 음이온차 산증만으로 원위형을 확정하는 것이 아니라 소변의 부적절한 산성화가 중요한 단서다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006243

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 양이온 차 오역을 음이온차로 고치고 산증인데 높은 요 pH라는 결정 단서를 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
