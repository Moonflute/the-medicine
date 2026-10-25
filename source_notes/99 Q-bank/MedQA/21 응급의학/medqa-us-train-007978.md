---
type: qbank
schema_version: 1
id: medqa-us-train-007978
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92e3efb6f23570759d5d617cb7b3704d67e8150250499cd792a5f8627869b5b1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "salicylate toxicity"
  - "mixed respiratory alkalosis and metabolic acidosis"
  - "supportive care"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCtOumrOyLpOyCsCDspJHrj4UgKFNhbGljeWxhdGUgUG9pc29uaW5nKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 남아가 여러 알약을 복용한 지 12시간 후 응급실에 왔다. 10시간 동안 양쪽 귀에서 소리가 난다고 호소한다. 맥박 136회/분, 호흡수 39회/분, 혈압 108/72 mm Hg이며 발한이 있다. 혈청 Na⁺ 136, Cl⁻ 99 mEq/L이고 실내 공기 동맥혈가스는 pH 7.39, PaCO₂ 25 mmHg, HCO₃⁻ 15 mEq/L이다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 위장관 오염 제거
B. 혈액투석
C. 다회용 활성탄
D. 지지요법

## 해설

이명, 발한, 빈호흡과 음이온차 증가 대사성 산증에 과도한 호흡성 보상이 동반된 소견은 살리실산염 중독을 시사한다. 초기에는 기도·호흡·순환과 체액·전해질을 평가하고 지지 치료(D)를 시작한다. 혈중 살리실산 농도와 산염기 상태를 반복 확인하고, 독성 정도에 따라 정맥 중탄산에 의한 혈청·소변 알칼리화 및 투석 필요성을 판단한다. pH가 정상에 가깝다고 독성이 경미한 것은 아니다. 섭취 12시간 뒤 모든 환자에게 위장관 제독이나 다회 활성탄을 우선한다는 원칙은 없으며, 흡수 지연 가능성과 기도 안전성을 개별 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 살리실산 중독의 초기 지지요법 D를 유지하되 정상에 가까운 pH가 경증을 보장하거나 수액만으로 충분하다는 오해를 피한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC4371029/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007978
