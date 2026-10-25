---
type: qbank
schema_version: 1
id: medqa-us-train-007178
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd0496c7ea35b9b6fb2a509bbae7d0d0da8fd9484febd35d1621fb386464659b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "살리실산염 중독"
  - "혼합 산-염기 장애"
  - "호흡성 알칼리증"
  - "대사성 산증"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCtOumrOyLpOyCsCDspJHrj4UgKFNhbGljeWxhdGUgUG9pc29uaW5nKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여자가 2시간 동안 지속된 호흡곤란과 혼돈으로 응급실에 내원했다. 정신병과 알코올 남용 병력이 있으며 25년 동안 하루 한 갑을 흡연했다. 초조하고 혼돈되어 있다. 혈압은 165/95 mmHg, 맥박은 110회/분, 호흡수는 35회/분, 체온은 36.7°C(98.1°F)이다. 폐검사에서 빈호흡과 경미한 전반적 천명이 보인다. 심장 청진에서 이상음은 없다. 나머지 신체검사는 정상이다. 검사 결과는 다음과 같다.
혈청 나트륨 138 mEq/L, 염소 100 mEq/L
실내 공기 동맥혈가스: pH 7.37, pCO₂ 21 mmHg, pO₂ 88 mmHg, HCO₃⁻ 12 mEq/L
다음 중 이 소견을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 알코올성 케톤산증
B. 과호흡 증후군
C. 살리실산염 중독
D. 구토

## 해설

음이온차는 138−100−12=26 mEq/L로 증가되어 있어 대사성 산증이 있다. HCO3 12 mEq/L에서 Winter 공식으로 예상되는 보상성 PaCO2는 약 26±2 mmHg인데 실제는 21 mmHg로 더 낮으므로 일차성 호흡성 알칼리증도 동반되어 있다. 이 혼합 장애는 살리실산염 중독(C)에 전형적이다. pH가 정상 범위에 가깝다는 사실이 정상 산염기 상태를 의미하지 않으며, 단순 과호흡이나 구토만으로 이 조합을 설명하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 혼합 산염기 장애 C를 유지하고 pH·HCO3를 저탄산혈증 수치처럼 묶은 표현을 바로잡는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007178
