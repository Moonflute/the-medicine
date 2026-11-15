---
type: qbank
schema_version: 1
id: medqa-us-train-005483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d0d0508a8965fe35f7fc327c2b1fed64e5d6d1ebc701986bbe00f7238b334367
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "성홍열"
  - "A군 연쇄상구균"
  - "연쇄상구균 감염 후 사구체신염"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISx7ZmN7Je0IChTY2FybGV0IEZldmVyKS5tZA
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: complication
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

9세 남아가 A군 사슬알균으로 확인된 성홍열을 앓았다. 2주 뒤 눈 주위가 붓고 갈색 소변을 보며 혈압이 올랐다. 요침사에서 적혈구 원주가 보이고 혈청 C3가 낮다. 가장 가능성 높은 합병증은?

## 선택지

A. IgA 신병증
B. 급성 간질신염
C. 급성 류마티스열
D. 사슬알균 감염 후 사구체신염

## 해설


인두염이 호전된 뒤 시간 간격을 두고 나타난 혈뇨, 고혈압, 낮은 C3는 사슬알균 감염 후 사구체신염에 부합한다. IgA 신병증의 혈뇨는 상기도 감염과 거의 동시에 발생하는 경우가 많다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005483 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 성홍열 후 PSGN D는 가능한 선택지이나 모든 사례의 가장 흔한 후유증이라는 빈도 과장 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005483
- https://kdca.go.kr/bbs/kdca/55/304967/download.do
