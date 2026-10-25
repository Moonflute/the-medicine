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
answer: A
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

23세 대학생이 간헐적인 흉부 불편감으로 진료를 받으러 왔다. 지난 8~9개월 동안 한 달에 한 번 정도 “가슴이 터질 것 같다”고 느끼는 발작이 있었다. 발작 중에는 호흡곤란, 팔과 다리 전체의 떨림, 셔츠를 갈아입어야 할 정도의 심한 발한도 느꼈다. 뚜렷한 유발 요인은 모르지만 중요한 시험이나 큰 과제 마감 시기에 더 자주 발생하는 것 같다고 한다. 발작이 반복되면서 수업이나 식당에서 발작이 일어날까 봐 불안이 점점 커졌고, 그 결과 외출을 점점 줄이고 있다. 과거력은 없고 신체진찰은 정상이었다. 이 상태의 장기 관리를 위한 가장 적절한 약물은?

## 선택지

A. 시탈로프람
B. 리튬
C. 프로프라놀롤
D. 쿠에티아핀

## 해설

반복되는 공황발작과 이후의 예기불안·외출 회피는 공황장애에 부합한다. 장기 약물치료에는 SSRI 등이 사용되며, 제시된 약물 중 시탈로프람이 적절하다. 리튬과 쿠에티아핀은 통상적인 공황장애 장기치료제가 아니고 프로프라놀롤은 이 장애의 핵심 증상과 재발을 다루는 표준 장기치료가 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000191

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 시탈로프람 정답 유지. '1세대 SSRI', 특정 SSRI의 최상위 효과 단정을 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg113/chapter/Recommendations
