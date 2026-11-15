---
type: qbank
schema_version: 1
id: medqa-us-test-000191
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a82bb4f7dc5b92ab55df81684d35ecc4bfe6118537b1baa831694a08e32c728b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황장애"
  - "공황발작"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

반복되는 예기치 않은 공황발작과 예기불안 때문에 외출이 줄어든 27세 환자가 장기 약물치료를 원한다. 물질 사용이나 의학적 원인은 평가했다. 첫 약으로 적절한 것은?

## 선택지

A. 클로나제팜 장기 단독
B. 에스시탈로프람
C. 프로프라놀롤 단독
D. 쿠에티아핀

## 해설

공황장애의 장기 약물치료는 SSRI가 일차 선택이다. 초기 불안이 일시적으로 심해질 수 있어 저용량에서 시작해 반응과 부작용을 확인한다. 벤조디아제핀 장기 단독치료는 기본 치료가 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000191
- https://www.nice.org.uk/guidance/cg113/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 시탈로프람 정답 유지. '1세대 SSRI', 특정 SSRI의 최상위 효과 단정을 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg113/chapter/Recommendations
