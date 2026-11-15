---
type: qbank
schema_version: 1
id: medqa-us-train-009864
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b98372834ac410f4cb91c50f8c8586d07b1f4d2f9cd42307b302422e48c2b678
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "피오글리타존"
  - "방광암"
  - "제2형 당뇨병"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: adverse_effect
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QaW9nbGl0YXpvbmUubWQ
---

# MedQA US 임상문제

## 문제

52세 제2형 당뇨병 환자에게 호흡곤란과 하지부종을 동반한 박출률 감소 심부전이 있다. 혈당약을 추가하려 할 때 체액저류를 악화시킬 수 있어 피할 약은?

## 선택지

A. 시타글립틴
B. 엠파글리플로진
C. 리나글립틴
D. 피오글리타존

## 해설


피오글리타존은 체액저류를 일으켜 증상이 있는 심부전을 악화시킬 수 있다. 심부전이 동반된 제2형 당뇨병에서는 금기가 없다면 심부전 이득이 입증된 SGLT2 억제제를 우선 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009864 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 방광암 병력 D 회피 취지 유지하되 규제기관별 금기/주의 차이와 현재암/과거암 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ema.europa.eu/en/news/european-medicines-agency-recommends-new-contra-indications-warnings-pioglitazone-reduce-small-increased-risk-bladder-cancer

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009864
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
