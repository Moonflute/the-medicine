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

10개월 여아가 2일 동안 발열과 보챔, 악취 나는 소변으로 내원했다. 소변검사에서 백혈구와 아질산염이 양성이고 배양에서 대장균이 10⁵ CFU/mL 이상 자랐다. 아세트아미노펜과 세픽심으로 호전된 뒤 다음 중 가장 적절한 처치는?

## 선택지

A. 복부 CT
B. 신장 및 방광 초음파
C. 정맥 신우조영술
D. 트리메토프림-설파메톡사졸 예방요법 시작

## 해설

10개월 영아의 발열성 대장균 요로감염 후에는 북미/CPS 접근에서 신장·방광 초음파(B)로 신장과 요로의 구조적 이상을 평가한다. 초음파만으로 방광요관역류를 확진하거나 배제할 수 있는 것은 아니다. 호전된 첫 감염 후 CT나 정맥 신우조영술을 일률적으로 시행하지 않으며 예방적 항생제도 모든 환자에게 필요한 것은 아니다. 영상검사 대상 연령·시점은 국가 지침에 차이가 있으므로, 모든 소아 요로감염에 같은 검사를 적용한다는 의미로 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초음파로 방광요관역류 확진한다는 오해 수정. 현행 북미/CPS의 24개월 미만 첫 발열UTI 초음파 권고로 B 유지하고 지역 차이 명시.
- https://cps.ca/en/documents/position/management-urinary-tract-infections

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005576
