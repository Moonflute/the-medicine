---
type: qbank
schema_version: 1
id: medqa-us-train-005576
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da0e591b7b1f2bb1a50e631df1bffc78b5402bf3c9f1437e545f4b550332773f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "영아 요로감염"
  - "신장 및 방광 초음파"
  - "방광요관역류 평가"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyalOq0gOyXreulmCAoVmVzaWNvVXJldGVyYWwgUmVmbHV4KS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmaXhpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10개월 여아가 다른 원인이 뚜렷하지 않은 발열로 내원했다. 소변주머니 검체에서 백혈구와 아질산염이 검출됐다. 아이는 안정적이다. 항생제를 시작하기 전 요로감염 확인에 가장 적절한 조치는?

## 선택지

A. 같은 주머니 검체로 배양해 확진한다
B. 도뇨로 소변을 새로 채취해 배양한다
C. 혈액 배양만 한다
D. 해열 후 발열이 반복될 때까지 추가 평가를 미룬다

## 해설

소변주머니 검체는 선별검사에 활용할 수 있지만 오염이 잦아 양성 배양만으로 확진할 수 없다. 항생제 전 도뇨 등 신뢰할 수 있는 방법으로 배양 검체를 얻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초음파로 방광요관역류 확진한다는 오해 수정. 현행 북미/CPS의 24개월 미만 첫 발열UTI 초음파 권고로 B 유지하고 지역 차이 명시.
- https://cps.ca/en/documents/position/management-urinary-tract-infections

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005576
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002066563
- https://www.nice.org.uk/guidance/ng224/chapter/Recommendations
