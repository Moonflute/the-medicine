---
type: qbank
schema_version: 1
id: medqa-us-test-001271
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:beafc5e02bb0e29eeff8a1d437001f036bbcdaa983105b08752271482a0eff39
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "수면위상 지연"
  - "불면증"
  - "수면위생"
  - "Delayed sleep phase disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 대학생이 2개월간 주간 피로로 진료를 받으러 왔다. 밤에 잠들기 어렵고 수업 중 자주 잠들며 오전 8시 30분에 일어나도 매우 졸리다. 오후에 한 시간 넘게 낮잠을 자고 멜라토닌과 오후 8시 운동을 시도했지만 효과가 없었다. 가장 적절한 권고는?

## 선택지

A. 디펜히드라민을 시험한다
B. 저녁 운동을 중단한다
C. 취침 전 술을 마신다
D. 오후에 계획된 낮잠을 잔다

## 해설

불면과 주간졸림에서 수면 일정, 낮잠, 카페인, 운동 시각·강도를 함께 점검한다. 제시된 선택지 중 저녁 운동을 중단하거나 시간을 앞당겨 수면에 미치는 영향을 평가하는 조정이 적절하다. 특히 취침 직전의 격렬한 운동은 피하지만, 모든 저녁 운동이 해롭거나 멜라토닌 억제로 이 사례의 수면위상지연이 확정된다는 뜻은 아니다. 술이나 디펜히드라민을 수면 해결책으로 삼거나 긴 오후 낮잠을 추가하는 것은 적절하지 않다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001271

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 저녁 운동을 수면위상지연의 확정 원인으로 설명한 과잉 단정 제거. 원정답은 선택지 범위의 수면습관 조정으로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits?trk=article-ssr-frontend-pulse_little-text-block
