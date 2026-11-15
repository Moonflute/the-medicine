---
type: qbank
schema_version: 1
id: medqa-us-train-004896
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a10f3a4d60d55614b57859a5360ef721b9f3c92ae92f025a0f69bfc1353ff49
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 발열성 요로감염"
  - "방광요관역류"
  - "신장 및 방광 초음파"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyalOq0gOyXreulmCAoVmVzaWNvVXJldGVyYWwgUmVmbHV4KS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22개월 아이가 배양으로 확인된 발열성 요로감염으로 치료받고 있다. 감수성에 맞는 항생제를 48시간 사용했는데 고열이 계속되고 소변이 잘 나오지 않는다. 요로 폐쇄나 신장 합병증을 평가할 첫 영상은?

## 선택지

A. 신장·방광 초음파
B. 복부 단순촬영
C. 첫 검사로 배뇨방광요도조영술
D. 소변배양만 반복하고 영상은 하지 않음

## 해설

항생제에 반응하지 않는 발열성 요로감염이나 소변 흐름 이상은 비전형 경과다. 신장·방광 초음파로 수신증과 폐쇄를 우선 평가하고 결과에 따라 추가 영상검사를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 첫 발열성 UTI 후 초음파의 목적을 신실질 흉터 검사와 구별.
- https://uroweb.org/guidelines/paediatric-urology/chapter/urinary-tract-infections-in-children

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004896
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002066563
- https://www.nice.org.uk/guidance/ng224/chapter/Recommendations
