---
type: qbank
schema_version: 1
id: medqa-us-train-009135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ceff18b1fb251fbaeb5a964ced6694231ff3b27ce7d34bbbede9414c316a1df8
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "severe preeclampsia"
  - "중증 전자간증"
  - "hypertension in pregnancy"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-ykkeymnSDsoITsnpDqsITspp0gKFNldmVyZSBQcmUtZWNsYW1wc2lhKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주인 25세 임산부가 두통으로 내원했다. 임신 관리는 전문간호사가 담당했다. 체온 99.0°F(37.2°C), 혈압 164/104 mmHg, 맥박 100회/분, 호흡수 22회/분, 실내 공기에서 산소포화도 98%이다. 진찰에서 불편해 보이지 않는 임신 자궁이 관찰된다. 검사 결과 혈색소 12 g/dL, 헤마토크릿 36%, 백혈구 6,700/mm³(감별 정상), 혈소판 100,500/mm³, Na⁺ 141 mEq/L, Cl⁻ 101 mEq/L, K⁺ 4.4 mEq/L, HCO₃⁻ 25 mEq/L, BUN 21 mg/dL, 혈당 99 mg/dL, 크레아티닌 1.0 mg/dL, AST 32 U/L, ALT 30 U/L이다. 소변은 호박색이고 단백 양성, 혈액 음성이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 임신성 급성 지방간
B. 자간증
C. 전자간증
D. 중증 전자간증

## 해설

20주 이후 고혈압과 단백뇨에 두통이 있고 수축기 혈압 164mmHg가 중증 범위이므로, 신속히 재확인하면서 중증 소견을 동반한 전자간증(D)을 평가한다. 혈압 기준은 수축기 160 이상 또는 이완기 110 이상이며 둘 다 높아야 하는 것은 아니다. 혈소판 100,500/μL는 100,000/μL 미만 기준에 해당하지 않는다. 발작이 없으므로 이를 ‘중증 자간증’이라고 부르면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중증전자간증과자간증혼용교정. 수축기164가중증범위이고혈소판100500은10만미만아님을명시.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009135
