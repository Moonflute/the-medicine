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
answer: C
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

21세 학생은 몇 달째 새벽 3시 전에는 잠들기 어렵고 아침 수업에 늦는다. 방학에는 새벽 3시부터 오전 11시까지 잘 자고 개운하다. 수면 시간을 앞당기기 위해 권할 첫 조치는?

## 선택지

A. 기상 시간을 매일 크게 바꾼다
B. 늦은 저녁에 밝은 빛을 오래 쬔다
C. 일정한 기상 시간을 유지하고 아침 빛을 늘리며 밤의 밝은 빛을 줄인다
D. 아침 수업 전에 긴 낮잠을 자서 수면을 보충한다

## 해설

수면-각성 위상 지연에서는 원하는 일정에 비해 잠드는 때와 깨는 때가 늦다. 일정한 기상 시간과 빛 노출 조절을 우선하며, 필요하면 전문 상담 후 시간을 맞춘 치료를 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001271
- https://pubmed.ncbi.nlm.nih.gov/26414986/
- https://pubmed.ncbi.nlm.nih.gov/29912983/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 저녁 운동을 수면위상지연의 확정 원인으로 설명한 과잉 단정 제거. 원정답은 선택지 범위의 수면습관 조정으로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits?trk=article-ssr-frontend-pulse_little-text-block
