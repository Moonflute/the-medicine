---
type: qbank
schema_version: 1
id: medqa-us-train-007571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f187db8c3f29babb485118d2e4feccd5fd46f43829d04f408aef07fe830cde8a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "상염색체 열성 다낭성 신장병"
  - "폐 저형성"
  - "포터 연속체"
  - "신장 집합관 낭성 확장"
  - "Autosomal recessive polycystic kidney disease"
question_type: mechanism
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 후반부터 양수과소가 심했고 초음파에서 양쪽 신장이 크고 고에코였다. 출생한 아기는 납작한 코와 사지 변형, 교정하기 어려운 호흡부전을 보인다. 호흡부전이 생긴 원인은?

## 선택지

A. 신장이 커져 신생아 기관지를 직접 막았다
B. 신낭종 내용물이 기도로 흘러들어갔다
C. 태아 소변 감소에 따른 양수과소로 폐가 저형성됐다
D. 출생 뒤 수유 부족으로 폐포가 급성 붕괴했다

## 해설

태아 신기능이 떨어져 소변이 적으면 양수과소로 폐가 충분히 발달하지 못할 수 있다. 양측 고에코 신장 비대의 원인으로 상염색체 열성 다낭신 등도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 집합관 확장이 직접 폐 발달을 막는다고 단순화한 설명에 태아 신기능·양수과소·폐저형성의 연결을 복원했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007571
- https://www.ncbi.nlm.nih.gov/books/NBK1326/
