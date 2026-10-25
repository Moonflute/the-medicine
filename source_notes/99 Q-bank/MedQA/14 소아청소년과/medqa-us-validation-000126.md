---
type: qbank
schema_version: 1
id: medqa-us-validation-000126
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b433d8b650b0364523087100585e7b438aedd9bc709a8044f093e4b0c7a8f60e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "모유수유 황달"
  - "신생아 황달"
  - "생리적 황달"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: simple
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

생후 4일 된 만삭아가 피부가 노래져 소아과에 왔다. 모유만 먹고 수유는 잘하며 하루에 여러 번 울고 밤에는 7~8시간 잔다. 대변은 평균 3일에 한 번 본다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 모유수유 황달
B. 모유 황달
C. 포도당-6-인산 탈수소효소 결핍
D. A형간염

## 해설

생후4일의 긴 야간 수유 간격과 매우 적은 배변은 섭취 부족 관련 고빌리루빈혈증, 과거 명칭 모유수유 황달(A)을 시사한다. 섭취·배출 감소로 장간순환이 증가하는 기전이며 모유 성분만의 억제로 설명하지 않는다. 수유 효과·체중·배뇨·시간별 빌리루빈을 평가하고 지원한다. 충분히 먹는 상태에서 더 오래 지속되는 모유황달과 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 모유수유 황달과 모유황달의 발생 기전을 뒤바꾼 오류 교정.
- https://doi.org/10.1542/peds.2022-058859

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000126
