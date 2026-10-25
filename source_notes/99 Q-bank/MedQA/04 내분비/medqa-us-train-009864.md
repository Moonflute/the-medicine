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
question_type: management
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

52세 남성이 추적 진료를 위해 일차진료의에게 내원했다. 3개월 전 제2형 당뇨병을 진단받아 메트포르민을 시작했다. 오늘 HbA1c는 7.9%이며, 의사는 고혈당 조절을 위해 피오글리타존을 추가하기로 했다. 다음 중 피오글리타존 치료의 금기는?

## 선택지

A. 신장 기능 저하
B. 생식기 진균 감염
C. 췌장염
D. 방광암 병력

## 해설


정답 D. Pioglitazone은 방광암 관련 안전성 우려가 있어 선택지 중 방광암 병력이 사용 회피의 핵심이다. EMA는 현재 또는 과거 방광암 환자에서 사용하지 않도록 금기한다. 미국 허가사항은 활동성 방광암에는 사용하지 않고 과거 병력에는 재발 위험과 이득을 신중히 평가하도록 구분하므로 전 세계에서 과거암이 동일한 절대금기라고 일반화하지 않는다. 심부전·체액저류도 별도의 중요한 사용 제한이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009864 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 방광암 병력 D 회피 취지 유지하되 규제기관별 금기/주의 차이와 현재암/과거암 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ema.europa.eu/en/news/european-medicines-agency-recommends-new-contra-indications-warnings-pioglitazone-reduce-small-increased-risk-bladder-cancer

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009864
