---
type: qbank
schema_version: 1
id: medqa-us-train-007344
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a9bb9ae9ecc4a776f4b5ea10a295aaaaabf1d87ec646784c213c58e1f71ea8f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황발작"
  - "공황장애"
  - "클로나제팜"
  - "급성 불안"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

응급실에서 갑자기 심계항진과 과호흡이 생긴 환자가 있다. 의학적 응급 원인은 위험도에 맞춰 평가했고, 이전에 평가받은 공황발작과 같은 양상이며 현재 호전 중이다. 가장 적절한 즉각적인 대응은?

## 선택지

A. 조용한 곳에서 현재 상태를 설명하고 곁에서 천천히 호흡하도록 돕는다
B. 공황 증상이므로 환자의 호소를 무시한다
C. 증상이 멎을 때까지 종이봉투에 대고 호흡하게 한다
D. 즉시 항우울제를 투여하고 수분 내 약효가 나타나기를 기다린다

## 해설

의학적으로 위험한 원인을 확인한 뒤에는 차분한 설명과 지지로 환자가 호흡을 되찾도록 돕는다. 증상이 새로 생기거나 달라지면 공황으로만 단정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007344
- https://www.nice.org.uk/guidance/cg113/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로나제팜 원정답 유지하되 모든 급성 흉통에서 공황 확정·검사 불필요·벤조 일률 1차로 설명한 오류 수정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
