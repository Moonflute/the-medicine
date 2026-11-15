---
type: qbank
schema_version: 1
id: medqa-us-test-000758
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d949fc258934877488b4f3a1d01e8a02c9041c6ab04e78cbb704198f5fbe4d88
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "독성쇼크증후군"
  - "월경용 탐폰"
  - "황색포도상구균 독소"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

월경 중인 22세 환자가 고열, 전신 홍반, 저혈압으로 왔다. 질 검사에서 제거하지 않은 탐폰이 확인된다. 수액과 경험적 항생제를 시작하면서 즉시 할 처치는?

## 선택지

A. 탐폰을 제거한다
B. 혈액배양 결과를 확인할 때까지 탐폰은 그대로 둔다
C. 발진의 피부생검을 먼저 한다
D. 쇼크가 회복될 때까지 감염원 조절을 미룬다

## 해설


독성쇼크증후군이 의심되면 소생술과 항생제에 더해 감염원을 즉시 제거한다. 내부 생리용품을 제거하는 데 배양 결과를 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000758`와 직접 대조했다.
- 판정: 월경 관련 독성쇼크를 시사해 D 유지. 생리식염수(탐폰)라는 해설 오류와 원인 빈도 단정을 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.fda.gov/consumers/consumer-updates/facts-tampons-and-tampon-safety

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000758
- https://www.nhs.uk/conditions/toxic-shock-syndrome/
