---
type: qbank
schema_version: 1
id: medqa-us-train-004473
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c16c22ca512b9b7a60cfe8319e2297f7cef6b9eaf171f7aa00a0774cadc05e8
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "자살 시도"
  - "자살 위험 평가"
  - "이전 자살 시도"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGltZXBpcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

자해로 응급 진료를 받은 환자가 신체적으로는 안정됐다. 동반자가 온라인 위험 점수가 낮으니 퇴원해도 되는지 묻는다. 퇴원 전 적절한 판단 방법은?

## 선택지

A. 점수가 낮으면 추가 평가 없이 퇴원한다
B. 점수 대신 현재 의도와 위험 수단 접근, 지지체계 등을 개별 평가하고 안전 계획을 세운다
C. 환자가 후회한다고 했으므로 재시도 위험은 없다
D. 과거 시도 여부 한 가지만으로 입원 또는 퇴원을 결정한다

## 해설

위험 점수나 한 가지 특성만으로 미래 자해를 예측하거나 퇴원을 결정하지 않는다. 현재의 안전 필요와 장기 위험을 개별적으로 평가하고 환자와 안전 계획을 마련한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자살 시도력이라는 시험의 위험인자 답을 유지하되 단일 예측인자로 현재의 구체적 계획과 약물 접근성을 무시하지 않도록 현행 NICE 안전 원칙을 명시했다.
- https://www.nice.org.uk/guidance/ng225/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004473
